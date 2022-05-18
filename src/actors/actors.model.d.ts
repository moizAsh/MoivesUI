export default interface actorCreationDTO{
    name:string;
    dateOfBirth?: Date;
    picture?: File;
    pictureUrl?: string;
    biography?: string;
}

export interface actorMovieDTO {
    id: number;
    name: string;
    character: string;
    picture: string;

}