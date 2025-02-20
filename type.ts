export interface Category {
    id: string,
    name: string
}

export interface SubCategory {
    id: string,
    name: string,
}


export interface Product {
    id: string,
    name: string,
    description: string;
    price: string;
    categoryId: number;
    subcategoryId: number;
    images: Image[];
}


export interface Image {
    id: string,
    url: string,
}