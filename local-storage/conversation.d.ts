import { User } from '@chatbot-ui/core/types/auth';
import { Conversation } from '@chatbot-ui/core/types/chat';
export declare const localCreateConversation: (user: User, newConversation: Conversation) => boolean;
export declare const localUpdateConversation: (user: User, updatedConversation: Conversation) => boolean;
export declare const localDeleteConversation: (user: User, conversationId: string) => boolean;
