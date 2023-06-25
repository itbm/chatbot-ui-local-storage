import { User } from '@chatbot-ui/core/types/auth';
import { SystemPrompt } from '@chatbot-ui/core/types/system-prompt';
export declare const localGetSystemPrompts: (user: User) => SystemPrompt[];
export declare const localUpdateSystemPrompts: (user: User, updatedSystemPrompts: SystemPrompt[]) => boolean;
export declare const localDeleteSystemPrompts: (user: User, promptIds: string[]) => boolean;
