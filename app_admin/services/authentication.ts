import { Inject, Injectable } from '@angular/core'; 
import { BROWSER_STORAGE } from 'src/app/storage'; 
import { User } from '../models/user'; 
import { AuthResponse } from '../models/authresponse'; 
import { TripDataService } from '../services/trip-data.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({ 
    providedIn: 'root' 
})

export class AuthenticationService {

    constructor(
        @Inject(BROWSER_STORAGE) private storage: Storage, 
        private tripDataService: TripDataService
    ) { }

    // Look up InjectionToken documentation from angular/core
    public getToken(): string | any { 
        return this.storage.getItem('travlr-token'); 
    }

    public saveToken(token: string): void { 
        this.storage.setItem('travlr-token', token); 
    }

    public login(user: User): Observable<any> { 
        return this.tripDataService.login(user)
        .pipe(map((authResp: AuthResponse) => { 
            this.saveToken(authResp.token)
        }));
    }
    
    public register(user: User): Observable<any> { 
        return this.tripDataService.register(user) 
        .pipe(map((authResp: AuthResponse) => {
            this.saveToken(authResp.token)
        })); 
    }

    public logout(): void {
        this.storage.removeItem('travlr-token');
    }

    public isLoggedIn(): boolean {
        const token = this.getToken();
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > (Date.now() / 1000);
        } else {
            return false;
        }
    }

    public getCurrentUser(): User | any {
        if (this.isLoggedIn()) {
            const token = this.getToken();
            const { email, name } = JSON.parse(atob(token.split('.')[1]));
            return {email, name } as User;
        }
    }
}

