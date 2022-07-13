export interface IReviewForm {
    name: string;
    title: string;
    description: string;
    rating: number;
}

export interface ICreateDemoRequest extends IReviewForm {
    productId: string;
}

export interface ICreateDemoResponce {
    message: string;
}