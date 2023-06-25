import { User } from '@chatbot-ui/core/types/auth';
import { Message } from '@chatbot-ui/core/types/chat';
export declare const localCreateMessage: (user: User, conversationId: string, newMessage: Message) => boolean;
export declare const localUpdateMessage: (user: User, conversationId: string, updatedMessage: Message) => boolean;
export declare const localDeleteMessage: (user: User, conversationId: string, messageId: string) => boolean;
