import { UserDetails } from './user-details.model';
export class User {
    id: string;
    email: string;
    password?: string;
    nickname: string;
    info: UserDetails = new UserDetails();
}
