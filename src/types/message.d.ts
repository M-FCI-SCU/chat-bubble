// type MessageT=  'TEXT' | 'IMAGE' | 'VOICE';


type Message = {
    id: number;
    type: MessageT;
    content: string;
    user: User
}