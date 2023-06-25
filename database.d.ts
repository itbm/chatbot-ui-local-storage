import { User } from '@chatbot-ui/core/types/auth';
import { Conversation, Message } from '@chatbot-ui/core/types/chat';
import { FolderInterface } from '@chatbot-ui/core/types/folder';
import { Prompt } from '@chatbot-ui/core/types/prompt';
import { SystemPrompt } from '@chatbot-ui/core/types/system-prompt';
import { Database } from '@chatbot-ui/core';
export declare class LocalDatabase implements Database {
    name: string;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    createConversation(user: User, newConversation: Conversation): Promise<boolean>;
    updateConversation(user: User, updatedConversation: Conversation): Promise<boolean>;
    deleteConversation(user: User, conversationId: string): Promise<boolean>;
    getConversations(user: User): Promise<Conversation[]>;
    updateConversations(user: User, updatedConversations: Conversation[]): Promise<boolean>;
    deleteConversations(user: User): Promise<boolean>;
    createFolder(user: User, newFolder: FolderInterface): Promise<boolean>;
    updateFolder(user: User, updatedFolder: FolderInterface): Promise<boolean>;
    deleteFolder(user: User, folderId: string): Promise<boolean>;
    getFolders(user: User): Promise<FolderInterface[]>;
    updateFolders(user: User, updatedFolders: FolderInterface[]): Promise<boolean>;
    deleteFolders(user: User, folderIds: string[]): Promise<boolean>;
    createMessage(user: User, conversationId: string, newMessage: Message): Promise<boolean>;
    updateMessage(user: User, conversationId: string, updatedMessage: Message): Promise<boolean>;
    deleteMessage(user: User, conversationId: string, messageId: string): Promise<boolean>;
    getMessages(user: User, conversationId: string): Promise<Message[]>;
    createMessages(user: User, conversationId: string, newMessages: Message[]): Promise<boolean>;
    updateMessages(user: User, conversationId: string, updatedMessages: Message[]): Promise<boolean>;
    deleteMessages(user: User, conversationId: string, messageIds: string[]): Promise<boolean>;
    createPrompt(user: User, newPrompt: Prompt): Promise<boolean>;
    updatePrompt(user: User, updatedPrompt: Prompt): Promise<boolean>;
    deletePrompt(user: User, promptId: string): Promise<boolean>;
    getPrompts(user: User): Promise<Prompt[]>;
    updatePrompts(user: User, updatedPrompts: Prompt[]): Promise<boolean>;
    deletePrompts(user: User, promptIds: string[]): Promise<boolean>;
    createSystemPrompt(user: User, newSystemPrompt: SystemPrompt): Promise<boolean>;
    updateSystemPrompt(user: User, updatedSystemPrompt: SystemPrompt): Promise<boolean>;
    deleteSystemPrompt(user: User, systemPromptId: string): Promise<boolean>;
    getSystemPrompts(user: User): Promise<SystemPrompt[]>;
    updateSystemPrompts(user: User, updatedSystemPrompts: SystemPrompt[]): Promise<boolean>;
    deleteSystemPrompts(user: User, systemPromptIds: string[]): Promise<boolean>;
}
export type { Database };
