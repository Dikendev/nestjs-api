import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signup() {
        return {msg: 'I have signup' }
    }

    login() {
        return {msg: 'I have login' }

    }
}