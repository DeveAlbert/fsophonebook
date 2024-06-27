const Phonebook = ({persons}) => {
    return (
        <div>
            <h2>Phonebook</h2>

            <p>{persons.map(m => <p key={Math.random() * 1}>{m.name} {m.number}</p>)}</p>
             
        </div>
    )
   
}

export default Phonebook