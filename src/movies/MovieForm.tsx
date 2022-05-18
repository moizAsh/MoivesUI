import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import CheckboxField from "../forms/CheckboxField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";

export default function MovieForm(props: movieFormsProps){

    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] =
        useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setSelectedMovieTheaters] =
        useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] =
        useState(mapToModel(props.nonSelectedMovieTheaters));



    function mapToModel(items: { id: number, name: string }[]): multipleSelectorModel[] {
        return items.map(item => {
            return { key: item.id, value: item.name }
        })
    }


    return (
        <Formik
            initialValues={props.model}
            onSubmit={(values,actions)=>{
                values.genresIds = selectedGenres.map(item => item.key)
                values.movieTheatersIds = selectedMovieTheaters.map(item => item.key)
                props.onSubmit(values,actions)
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('This feild is required').firstLetterUpperCase()
            })}
        
        >
            {
                (formikProps) => (
                    <Form>
                    <TextField field="Title" displayName="Title"/>
                    <CheckboxField displayName="In Theaters" field="inTheaters"/>            
                    <TextField field="Trailer" displayName="Trailer"/>            
                    <DateField field="Release Date" displayName="releaseDate"/>            
                    <ImageField field="Poster" displayName="poster" imageUrl={props.model.posterURL}/>            
                    <MultipleSelector
                        displayName="Genres"
                        nonSelected={nonSelectedGenres}
                        selected={selectedGenres}
                        onChange={(selected, nonSelected) => {
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected);
                        }}
                    />

                    <MultipleSelector
                        displayName="Movie Theaters"
                        nonSelected={nonSelectedMovieTheaters}
                        selected={selectedMovieTheaters}
                        onChange={(selected, nonSelected) => {
                            setSelectedMovieTheaters(selected);
                            setNonSelectedMovieTheaters(nonSelected);
                        }}
                    />
                    
                    
                    <Button disabled={formikProps.isSubmitting} type='submit' >Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>                   

                    </Form>
                )
            }
        </Formik>
    )
}

interface movieFormsProps{
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
}