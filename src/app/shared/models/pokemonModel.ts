

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

export interface IPokemonDetails {
    name: string;
    id: number;
    types: [{
        "type":{
            name: string;
        }
    }];
    stats:Stats[];
    sprites: ISprite;
    height: number;
    weight: number;

}

export interface Stats {
    base_stat: number;
        "stat":{
            name: string;
        }
}

export interface FlavorResponseInterface{
    flavor_text: string;
    language: {
        name:string;
    }
}