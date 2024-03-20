
export interface ListCharacters {
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
    results: Character[];
}

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comics_Series_Events;
    series: Comics_Series_Events;
    stories: Stories;
    events: Comics_Series_Events;
    urls: Url[];
}
interface Url {
    type: string;
    url: string;
}
interface Stories {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}
interface Item2 {
    resourceURI: string;
    name: string;
    type: string;
}
interface Comics_Series_Events {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}
interface Item {
    resourceURI: string;
    name: string;
}
interface Thumbnail {
    path: string;
    extension: string;
}