import { User } from '@chatbot-ui/core/types/auth';
import { FolderInterface } from '@chatbot-ui/core/types/folder';
export declare const localCreateFolder: (user: User, newFolder: FolderInterface) => boolean;
export declare const localUpdateFolder: (user: User, folder: FolderInterface) => boolean;
export declare const localDeleteFolder: (user: User, folderId: string) => boolean;
