"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeleteSystemPrompts = exports.localUpdateSystemPrompts = exports.localGetSystemPrompts = void 0;
const localGetSystemPrompts = (user) => {
    const itemName = `system_prompts-${user.email}`;
    return JSON.parse(localStorage.getItem(itemName) || '[]');
};
exports.localGetSystemPrompts = localGetSystemPrompts;
const localUpdateSystemPrompts = (user, updatedSystemPrompts) => {
    const itemName = `system_prompts-${user.email}`;
    localStorage.setItem(itemName, JSON.stringify(updatedSystemPrompts));
    return true;
};
exports.localUpdateSystemPrompts = localUpdateSystemPrompts;
const localDeleteSystemPrompts = (user, promptIds) => {
    const itemName = `system_prompts-${user.email}`;
    const systemPrompts = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedSystemPrompts = systemPrompts.filter((p) => !promptIds.includes(p.id));
    localStorage.setItem(itemName, JSON.stringify(updatedSystemPrompts));
    return true;
};
exports.localDeleteSystemPrompts = localDeleteSystemPrompts;
