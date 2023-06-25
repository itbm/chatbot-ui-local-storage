"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeleteSystemPrompt = exports.localUpdateSystemPrompt = exports.localCreateSystemPrompt = void 0;
const localCreateSystemPrompt = (user, newPrompt) => {
    const itemName = `system_prompts-${user.email}`;
    const systemPrompts = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedSystemPrompts = [...systemPrompts, newPrompt];
    localStorage.setItem(itemName, JSON.stringify(updatedSystemPrompts));
    return true;
};
exports.localCreateSystemPrompt = localCreateSystemPrompt;
const localUpdateSystemPrompt = (user, updatedPrompt) => {
    const itemName = `system_prompts-${user.email}`;
    const systemPrompts = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedSystemPrompts = systemPrompts.map((p) => {
        if (p.id === updatedPrompt.id) {
            return updatedPrompt;
        }
        return p;
    });
    localStorage.setItem(itemName, JSON.stringify(updatedSystemPrompts));
    return true;
};
exports.localUpdateSystemPrompt = localUpdateSystemPrompt;
const localDeleteSystemPrompt = (user, promptId) => {
    const itemName = `system_prompts-${user.email}`;
    const systemPrompts = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedSystemPrompts = systemPrompts.filter((p) => p.id !== promptId);
    localStorage.setItem(itemName, JSON.stringify(updatedSystemPrompts));
    return true;
};
exports.localDeleteSystemPrompt = localDeleteSystemPrompt;
