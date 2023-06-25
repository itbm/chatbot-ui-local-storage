import { User } from '@chatbot-ui/core/types/auth';
import { Conversation } from '@chatbot-ui/core/types/chat';
export declare const localGetConversations: (user: User) => Conversation[];
export declare const localUpdateConversations: (user: User, updatedConversations: Conversation[]) => boolean;
export declare const localDeleteConversations: (user: User) => boolean;
