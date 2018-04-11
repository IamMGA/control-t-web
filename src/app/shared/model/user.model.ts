export class User {
    id: string;
    email: string;
    password?: string;
    nickname: string;
    info: {
        sex: string,
        weight: number,
        stature: number,
        age: number,
        activity: string
    } = {} as any;
}