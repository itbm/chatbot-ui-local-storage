"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeleteMessage = exports.localUpdateMessage = exports.localCreateMessage = void 0;
const localCreateMessage = (user, conversationId, newMessage) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const conversation = conversations.find((conversation) => conversation.id === conversationId);
    if (!conversation) {
        return false;
    }
    const updatedConversation = {
        ...conversation,
        messages: [...conversation.messages, newMessage],
    };
    const updatedConversations = conversations.map((conversation) => {
        if (conversation.id === conversationId) {
            return updatedConversation;
        }
        return conversation;
    });
    localStorage.setItem(itemName, JSON.stringify(updatedConversations));
    return true;
};
exports.localCreateMessage = localCreateMessage;
const localUpdateMessage = (user, conversationId, updatedMessage) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const conversation = conversations.find((conversation) => conversation.id === conversationId);
    if (!conversation) {
        return false;
    }
    const updatedConversation = {
        ...conversation,
        messages: conversation.messages.map((message) => {
            if (message.id === updatedMessage.id) {
                return updatedMessage;
            }
            return message;
        }),
    };
    const updatedConversations = conversations.map((conversation) => {
        if (conversation.id === conversationId) {
            return updatedConversation;
        }
        return conversation;
    });
    localStorage.setItem(itemName, JSON.stringify(updatedConversations));
    return true;
};
exports.localUpdateMessage = localUpdateMessage;
const localDeleteMessage = (user, conversationId, messageId) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const conversation = conversations.find((conversation) => conversation.id === conversationId);
    if (!conversation) {
        return false;
    }
    const updatedConversation = {
        ...conversation,
        messages: conversation.messages.filter((message) => message.id !== messageId),
    };
    const updatedConversations = conversations.map((conversation) => {
        if (conversation.id === conversationId) {
            return updatedConversation;
        }
        return conversation;
    });
    localStorage.setItem(itemName, JSON.stringify(updatedConversations));
    return true;
};
exports.localDeleteMessage = localDeleteMessage;
