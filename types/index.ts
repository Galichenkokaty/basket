export interface IBasketCard {
    id: number,
    title: string,
    desc: string,
    article: string,
    price: number,
    image: string,
    count: number,
    text: string,
    mini_title: string,
    range_price: {
        ru: string,
        eu: string
    }
}