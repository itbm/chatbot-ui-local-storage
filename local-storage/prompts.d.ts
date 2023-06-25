import { User } from '@chatbot-ui/core/types/auth';
import { Prompt } from '@chatbot-ui/core/types/prompt';
export declare const localGetPrompts: (user: User) => Prompt[];
export declare const localUpdatePrompts: (user: User, updatedPrompts: Prompt[]) => boolean;
export declare const localDeletePrompts: (user: User, promptIds: string[]) => boolean;
