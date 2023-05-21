

export interface IPokemon {
    name: string;
    id: number;
    imageURL: string;
    sprites: ISprite;
    height: number;
    weight: number;
}

export interface ISprite {
    other: {
        'official-artwork': {
            front_default: string;
        }
    }
}