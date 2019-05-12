import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async validateUser(token: string): Promise<any> {
        // Validate if token passed along with HTTP request
        // is associated with any registered user in the database
        return await this.usersService.findOneByToken(token);
    }
}
