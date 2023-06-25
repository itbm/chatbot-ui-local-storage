"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDatabase = void 0;
const conversation_1 = require("./local-storage/conversation");
const conversations_1 = require("./local-storage/conversations");
const folder_1 = require("./local-storage/folder");
const folders_1 = require("./local-storage/folders");
const message_1 = require("./local-storage/message");
const messages_1 = require("./local-storage/messages");
const prompt_1 = require("./local-storage/prompt");
const prompts_1 = require("./local-storage/prompts");
const systemPrompt_1 = require("./local-storage/systemPrompt");
const systemPrompts_1 = require("./local-storage/systemPrompts");
class LocalDatabase {
    constructor() {
        this.name = 'local-storage';
    }
    async connect() { }
    async disconnect() { }
    // -----------------------------------Conversation-----------------------------------
    async createConversation(user, newConversation) {
        return (0, conversation_1.localCreateConversation)(user, newConversation);
    }
    async updateConversation(user, updatedConversation) {
        return (0, conversation_1.localUpdateConversation)(user, updatedConversation);
    }
    async deleteConversation(user, conversationId) {
        return (0, conversation_1.localDeleteConversation)(user, conversationId);
    }
    // -----------------------------------Conversations-----------------------------------
    async getConversations(user) {
        return (0, conversations_1.localGetConversations)(user);
    }
    async updateConversations(user, updatedConversations) {
        return (0, conversations_1.localUpdateConversations)(user, updatedConversations);
    }
    async deleteConversations(user) {
        return (0, conversations_1.localDeleteConversations)(user);
    }
    // -----------------------------------Folder-----------------------------------
    async createFolder(user, newFolder) {
        return (0, folder_1.localCreateFolder)(user, newFolder);
    }
    async updateFolder(user, updatedFolder) {
        return (0, folder_1.localUpdateFolder)(user, updatedFolder);
    }
    async deleteFolder(user, folderId) {
        return (0, folder_1.localDeleteFolder)(user, folderId);
    }
    // -----------------------------------Folders-----------------------------------
    async getFolders(user) {
        return (0, folders_1.localGetFolders)(user);
    }
    async updateFolders(user, updatedFolders) {
        return (0, folders_1.localUpdateFolders)(user, updatedFolders);
    }
    async deleteFolders(user, folderIds) {
        return (0, folders_1.localDeleteFolders)(user, folderIds);
    }
    // -----------------------------------Message-----------------------------------
    async createMessage(user, conversationId, newMessage) {
        return (0, message_1.localCreateMessage)(user, conversationId, newMessage);
    }
    async updateMessage(user, conversationId, updatedMessage) {
        return (0, message_1.localUpdateMessage)(user, conversationId, updatedMessage);
    }
    async deleteMessage(user, conversationId, messageId) {
        return (0, message_1.localDeleteMessage)(user, conversationId, messageId);
    }
    // -----------------------------------Messages-----------------------------------
    async getMessages(user, conversationId) {
        return (0, messages_1.localGetMessages)(user, conversationId);
    }
    async createMessages(user, conversationId, newMessages) {
        return (0, messages_1.localCreateMessages)(user, conversationId, newMessages);
    }
    async updateMessages(user, conversationId, updatedMessages) {
        return (0, messages_1.localUpdateMessages)(user, conversationId, updatedMessages);
    }
    async deleteMessages(user, conversationId, messageIds) {
        return (0, messages_1.localDeleteMessages)(user, conversationId, messageIds);
    }
    // -----------------------------------Prompt-----------------------------------
    async createPrompt(user, newPrompt) {
        return (0, prompt_1.localCreatePrompt)(user, newPrompt);
    }
    async updatePrompt(user, updatedPrompt) {
        return (0, prompt_1.localUpdatePrompt)(user, updatedPrompt);
    }
    async deletePrompt(user, promptId) {
        return (0, prompt_1.localDeletePrompt)(user, promptId);
    }
    // -----------------------------------Prompts-----------------------------------
    async getPrompts(user) {
        return (0, prompts_1.localGetPrompts)(user);
    }
    async updatePrompts(user, updatedPrompts) {
        return (0, prompts_1.localUpdatePrompts)(user, updatedPrompts);
    }
    async deletePrompts(user, promptIds) {
        return (0, prompts_1.localDeletePrompts)(user, promptIds);
    }
    // -----------------------------------SystemPrompt-----------------------------------
    async createSystemPrompt(user, newSystemPrompt) {
        return (0, systemPrompt_1.localCreateSystemPrompt)(user, newSystemPrompt);
    }
    async updateSystemPrompt(user, updatedSystemPrompt) {
        return (0, systemPrompt_1.localUpdateSystemPrompt)(user, updatedSystemPrompt);
    }
    async deleteSystemPrompt(user, systemPromptId) {
        return (0, systemPrompt_1.localDeleteSystemPrompt)(user, systemPromptId);
    }
    // -----------------------------------SystemPrompts-----------------------------------
    async getSystemPrompts(user) {
        return (0, systemPrompts_1.localGetSystemPrompts)(user);
    }
    async updateSystemPrompts(user, updatedSystemPrompts) {
        return (0, systemPrompts_1.localUpdateSystemPrompts)(user, updatedSystemPrompts);
    }
    async deleteSystemPrompts(user, systemPromptIds) {
        return (0, systemPrompts_1.localDeleteSystemPrompts)(user, systemPromptIds);
    }
}
exports.LocalDatabase = LocalDatabase;
