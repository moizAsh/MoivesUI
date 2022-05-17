import { date } from "yup";
import ActionForm from "./ActorForm";

export default function EditActor() {
    return (
        <>
            <h3>Edit Actor</h3>
            <h3>Create Actor</h3>
            <ActionForm model={{name: 'Tom holland', dateOfBirth: new Date('1996-06-01T00:00:00')}}
            onSubmit={values => console.log(values)}/>
        </>
    )
}