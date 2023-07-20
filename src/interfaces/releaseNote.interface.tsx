export interface ReleaseNoteData {
    version: string;
    date: string;
    content: Content[];
}

export interface Content {
    tag: RNTag;
    content: string[];
}

export type RNTag = "new" | "featured" | "changed" | "fixed" | "deprecated" | "bug";
