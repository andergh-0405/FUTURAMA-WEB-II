export interface Personajes {
    id: number;
    name: string;
    gender: string;
    image: string;
}

export interface RespuestaApi{
    data:Personajes[];
}