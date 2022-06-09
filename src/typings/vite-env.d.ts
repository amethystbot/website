/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_REDIRECT_URI: string;
	readonly VITE_API_URI: string;
	readonly VITE_URI: string;
}

export interface ImportMeta {
	readonly env: ImportMetaEnv;
}
