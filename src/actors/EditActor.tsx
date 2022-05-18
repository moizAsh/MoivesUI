import ActionForm from "./ActorForm";

export default function EditActor() {
    return (
        <>
            <h3>Edit Actor</h3>
            <h3>Create Actor</h3>
            <ActionForm model={{name: 'Arnold', 
            dateOfBirth: new Date('1996-06-01T00:00:00'),
            biography: 'Born in 190000',
            pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg'

        }}
            onSubmit={values => console.log(values)}/>
        </>
    )
}