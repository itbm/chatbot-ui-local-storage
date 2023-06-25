"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeletePrompts = exports.localUpdatePrompts = exports.localGetPrompts = void 0;
const localGetPrompts = (user) => {
    const itemName = `prompts-${user.email}`;
    return JSON.parse(localStorage.getItem(itemName) || '[]');
};
exports.localGetPrompts = localGetPrompts;
const localUpdatePrompts = (user, updatedPrompts) => {
    const itemName = `prompts-${user.email}`;
    localStorage.setItem(itemName, JSON.stringify(updatedPrompts));
    return true;
};
exports.localUpdatePrompts = localUpdatePrompts;
const localDeletePrompts = (user, promptIds) => {
    const itemName = `prompts-${user.email}`;
    const prompts = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedPrompts = prompts.filter((p) => !promptIds.includes(p.id));
    localStorage.setItem(itemName, JSON.stringify(updatedPrompts));
    return true;
};
exports.localDeletePrompts = localDeletePrompts;
