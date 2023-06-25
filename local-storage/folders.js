"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeleteFolders = exports.localUpdateFolders = exports.localGetFolders = void 0;
const localGetFolders = (user) => {
    const itemName = `folders-${user.email}`;
    return JSON.parse(localStorage.getItem(itemName) || '[]');
};
exports.localGetFolders = localGetFolders;
const localUpdateFolders = (user, folders) => {
    const itemName = `folders-${user.email}`;
    localStorage.setItem(itemName, JSON.stringify(folders));
    return true;
};
exports.localUpdateFolders = localUpdateFolders;
const localDeleteFolders = (user, folderIds) => {
    const itemName = `folders-${user.email}`;
    const folders = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedFolders = folders.filter((f) => !folderIds.includes(f.id));
    localStorage.setItem(itemName, JSON.stringify(updatedFolders));
    return true;
};
exports.localDeleteFolders = localDeleteFolders;
