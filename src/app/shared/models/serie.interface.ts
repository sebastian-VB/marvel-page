export interface ListSeries {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}

interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Serie[];
}

export interface Serie {
    id: number;
    title: string;
    description?: string;
    resourceURI: string;
    urls: Url[];
    startYear: number;
    endYear: number;
    rating: string;
    type: string;
    modified: string;
    thumbnail: Thumbnail;
    creators: Creators;
    characters: Characters;
    stories: Stories;
    comics: Characters;
    events: Events;
    next?: Item2;
    previous?: any;
}

interface Events {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

interface Stories {
    available: number;
    collectionURI: string;
    items: Item3[];
    returned: number;
}

interface Item3 {
    resourceURI: string;
    name: string;
    type: string;
}

interface Characters {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}

interface Item2 {
    resourceURI: string;
    name: string;
}

interface Creators {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

interface Item {
    resourceURI: string;
    name: string;
    role: string;
}

interface Thumbnail {
    path: string;
    extension: string;
}

interface Url {
    type: string;
    url: string;
}
