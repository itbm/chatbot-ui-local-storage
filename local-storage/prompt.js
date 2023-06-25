"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeletePrompt = exports.localUpdatePrompt = exports.localCreatePrompt = void 0;
const localCreatePrompt = (user, newPrompt) => {
    const itemName = `prompts-${user.email}`;
    const prompts = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedPrompts = [...prompts, newPrompt];
    localStorage.setItem(itemName, JSON.stringify(updatedPrompts));
    return true;
};
exports.localCreatePrompt = localCreatePrompt;
const localUpdatePrompt = (user, updatedPrompt) => {
    const itemName = `prompts-${user.email}`;
    const prompts = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedPrompts = prompts.map((p) => {
        if (p.id === updatedPrompt.id) {
            return updatedPrompt;
        }
        return p;
    });
    localStorage.setItem(itemName, JSON.stringify(updatedPrompts));
    return true;
};
exports.localUpdatePrompt = localUpdatePrompt;
const localDeletePrompt = (user, promptId) => {
    const itemName = `prompts-${user.email}`;
    const prompts = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedPrompts = prompts.filter((p) => p.id !== promptId);
    localStorage.setItem(itemName, JSON.stringify(updatedPrompts));
    return true;
};
exports.localDeletePrompt = localDeletePrompt;
