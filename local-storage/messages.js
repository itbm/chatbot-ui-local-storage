"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeleteMessages = exports.localUpdateMessages = exports.localCreateMessages = exports.localGetMessages = void 0;
const localGetMessages = (user, conversationId) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const conversation = conversations.find((conversation) => conversation.id === conversationId);
    const messages = conversation ? conversation.messages : [];
    return messages;
};
exports.localGetMessages = localGetMessages;
const localCreateMessages = (user, conversationId, newMessages) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const conversation = conversations.find((conversation) => conversation.id === conversationId);
    if (!conversation) {
        return false;
    }
    const updatedConversation = {
        ...conversation,
        messages: [...conversation.messages, ...newMessages],
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
exports.localCreateMessages = localCreateMessages;
const localUpdateMessages = (user, conversationId, updatedMessages) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const conversation = conversations.find((conversation) => conversation.id === conversationId);
    if (!conversation) {
        return false;
    }
    const updatedConversation = {
        ...conversation,
        messages: conversation.messages.map((message) => {
            const updatedMessage = updatedMessages.find((updatedMessage) => updatedMessage.id === message.id);
            if (updatedMessage) {
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
exports.localUpdateMessages = localUpdateMessages;
const localDeleteMessages = (user, conversationId, messageIds) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    const conversation = conversations.find((conversation) => conversation.id === conversationId);
    if (!conversation) {
        return false;
    }
    const updatedConversation = {
        ...conversation,
        messages: conversation.messages.filter((message) => !messageIds.includes(message.id)),
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
exports.localDeleteMessages = localDeleteMessages;
