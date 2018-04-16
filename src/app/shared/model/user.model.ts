import { UserDetails } from './user-details.model';
export class User {
    id: string;
    email: string;
    password?: string;
    nickname: string;
    calories: number;
    info: UserDetails = new UserDetails();
}
