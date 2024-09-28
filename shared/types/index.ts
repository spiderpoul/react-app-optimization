export interface LibraryResponse {
    items: LibraryItemModel[];
    links: [
        {
            rel: string;
            href: string;
            prompt: string;
        }
    ];
    version: string;
    href: string;
    metadata: { total_hits: number };
}

export interface LibraryItemModel {
    links: {
        rel: string;
        href: string;
        render?: MediaType;
    }[];
    href: string;
    data: [
        {
            title: string;
            center: string;
            nasa_id: string;
            date_created: string;
            keywords: string[];
            description: string;
            media_type: MediaType;
        }
    ];
}

export enum MediaType {
    image = 'image',
    video = 'video',
}

export interface PictureOfTheDayResponse {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: MediaType;
    service_version: string;
    title: string;
    url: string;
}

