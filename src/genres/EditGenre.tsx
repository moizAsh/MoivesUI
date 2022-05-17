import { useParams } from "react-router-dom"
import GenreForm from "./GenreForm";

export default function EditGenre() {
    const {id}: any = useParams();
    return (
        <>
            <h3> Edit Genre </h3>
            <GenreForm model={{name: ''}}
                    onSubmit={async value => {
                        await new Promise(r => setTimeout(r,1))
                        console.log(value)
                        console.log(id)
                }}
            />                
        </>
    )
}