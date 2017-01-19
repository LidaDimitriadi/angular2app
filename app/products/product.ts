export interface IProduct {
    id?: number;
    name: string;
    code: string;
    releaseDate: string;
    description: string;
    price: number;
    rating: number;
    imgUrl: string;
    reviews: IReview[];
}

export interface IReview {
    id?: number;
    content: string;
}