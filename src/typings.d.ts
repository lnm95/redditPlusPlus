declare module '*.less';
declare module '*.svg';

declare const VERSION: string;
declare const DEBUG: boolean;

declare function GM_getValue(key: string, defaultValue: any): any;
declare function GM_setValue(key: string, value: any): void;
declare function GM_deleteValue(key: string): void;
