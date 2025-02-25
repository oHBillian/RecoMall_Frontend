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
    categoryname : string,
    categoryId: number;
    subcategoryId: number;
    Images: Image[];
    category: Category;
    subcategory: SubCategory
}


export interface Image {
    id: string,
    url: string,
}