import { Typeahead } from 'react-bootstrap-typeahead';
import {actorMovieDTO} from '../actors/actors.model'

export default function TypeAheadActors(props: typeAheadActorsProps){
    const actors: actorMovieDTO[] = [{
        id: 1 , name: 'Moiz', character:'', picture:''
    },
    { 
         id: 2 , name: 'Tom', character:'', picture:''
    },
    { 
        id: 3 , name: 'James', character:'', picture:''
    }
]
    
    
    return (
        <>
            <label>{props.displayName}</label>
            <Typeahead
               id="typeahead"
               onChange={actor => {
                   console.log(actor)
               }}
               options={actors}
               labelKey={actor => actor.name} 
               filterBy={['name']}
               placeholder="Name of actor"
               minLength={1}
            />
        </>
    )
}
interface typeAheadActorsProps{
    displayName: string;
    actors: actorMovieDTO[];
}