"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeleteConversation = exports.localUpdateConversation = exports.localCreateConversation = void 0;
const localCreateConversation = (user, newConversation) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedConversations = [...conversations, newConversation];
    localStorage.setItem(itemName, JSON.stringify(updatedConversations));
    return true;
};
exports.localCreateConversation = localCreateConversation;
const localUpdateConversation = (user, updatedConversation) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const conversation = conversations.find((conversation) => conversation.id === updatedConversation.id);
    // Keeping the messages in the conversation object
    const messages = conversation?.messages || [];
    const updatedConversations = conversations.map((conversation) => {
        if (conversation.id === updatedConversation.id) {
            return { ...updatedConversation, messages: messages };
        }
        return conversation;
    });
    localStorage.setItem(itemName, JSON.stringify(updatedConversations));
    return true;
};
exports.localUpdateConversation = localUpdateConversation;
const localDeleteConversation = (user, conversationId) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedConversations = conversations.filter((conversation) => conversation.id !== conversationId);
    localStorage.setItem(itemName, JSON.stringify(updatedConversations));
    return true;
};
exports.localDeleteConversation = localDeleteConversation;
