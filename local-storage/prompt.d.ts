import { User } from '@chatbot-ui/core/types/auth';
import { Prompt } from '@chatbot-ui/core/types/prompt';
export declare const localCreatePrompt: (user: User, newPrompt: Prompt) => boolean;
export declare const localUpdatePrompt: (user: User, updatedPrompt: Prompt) => boolean;
export declare const localDeletePrompt: (user: User, promptId: string) => boolean;
