"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDeleteFolder = exports.localUpdateFolder = exports.localCreateFolder = void 0;
const localCreateFolder = (user, newFolder) => {
    const itemName = `folders-${user.email}`;
    const folders = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedFolders = [...folders, newFolder];
    localStorage.setItem(itemName, JSON.stringify(updatedFolders));
    return true;
};
exports.localCreateFolder = localCreateFolder;
const localUpdateFolder = (user, folder) => {
    const itemName = `folders-${user.email}`;
    const folders = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedFolders = folders.map((f) => {
        if (f.id === folder.id) {
            return folder;
        }
        return f;
    });
    localStorage.setItem(itemName, JSON.stringify(updatedFolders));
    return true;
};
exports.localUpdateFolder = localUpdateFolder;
const localDeleteFolder = (user, folderId) => {
    const itemName = `folders-${user.email}`;
    const folders = JSON.parse(localStorage.getItem(itemName) || '[]');
    const updatedFolders = folders.filter((f) => f.id !== folderId);
    localStorage.setItem(itemName, JSON.stringify(updatedFolders));
    return true;
};
exports.localDeleteFolder = localDeleteFolder;
