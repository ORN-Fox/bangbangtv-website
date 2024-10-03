export class Video {

    category!: string;
    title!: string;
    videoHash!: string;
    tags!: string[];

    constructor(category: string, title: string, videoHash: string, tags: string[] = []) {
        this.category = category;
        this.title = title;
        this.videoHash = videoHash;
        this.tags = tags;
    }
}