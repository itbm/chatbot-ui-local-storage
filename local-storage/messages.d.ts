import { User } from '@chatbot-ui/core/types/auth';
import { Message } from '@chatbot-ui/core/types/chat';
export declare const localGetMessages: (user: User, conversationId: string) => Message[];
export declare const localCreateMessages: (user: User, conversationId: string, newMessages: Message[]) => boolean;
export declare const localUpdateMessages: (user: User, conversationId: string, updatedMessages: Message[]) => boolean;
export declare const localDeleteMessages: (user: User, conversationId: string, messageIds: string[]) => boolean;
