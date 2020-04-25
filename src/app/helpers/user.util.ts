import { Injectable } from '@angular/core';
import { TokenStorageService } from '../services/auth/token-storage.service';
import { User } from '../classes/user';

@Injectable({
    providedIn: 'root'
})
export class UserUtil {

    isLoggedIn: boolean;
    user: User;

    constructor(private tokenStorageService: TokenStorageService) {

    }

    public isLoggedInFn() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        return this.isLoggedIn;
    }
    public getUser() {
        this.user = this.tokenStorageService.getUser();
        return this.user;
    }
    public getUsername() {
        return this.user.username;
    }
    public signOut() {
        return this.tokenStorageService.signOut();
    }
}
