import { User } from '@chatbot-ui/core/types/auth';
import { SystemPrompt } from '@chatbot-ui/core/types/system-prompt';
export declare const localCreateSystemPrompt: (user: User, newPrompt: SystemPrompt) => boolean;
export declare const localUpdateSystemPrompt: (user: User, updatedPrompt: SystemPrompt) => boolean;
export declare const localDeleteSystemPrompt: (user: User, promptId: string) => boolean;
