"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeleteConversations = exports.localUpdateConversations = exports.localGetConversations = void 0;
const localGetConversations = (user) => {
    const itemName = `conversationHistory-${user.email}`;
    const conversations = JSON.parse(localStorage.getItem(itemName) || '[]');
    return conversations;
};
exports.localGetConversations = localGetConversations;
const localUpdateConversations = (user, updatedConversations) => {
    console.log('localUpdateConversations', updatedConversations);
    const itemName = `conversationHistory-${user.email}`;
    localStorage.setItem(itemName, JSON.stringify(updatedConversations));
    return true;
};
exports.localUpdateConversations = localUpdateConversations;
const localDeleteConversations = (user) => {
    const itemName = `conversationHistory-${user.email}`;
    localStorage.removeItem(itemName);
    return true;
};
exports.localDeleteConversations = localDeleteConversations;
