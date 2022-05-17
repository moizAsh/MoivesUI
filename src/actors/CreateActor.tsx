import ActionForm from "./ActorForm";

export default function CreateActor() {
    return (
        <>
            <h3>Create Actor</h3>
            <ActionForm model={{name: '', dateOfBirth: undefined}}
            onSubmit={values => console.log(values)}/>
        </>
    )
}