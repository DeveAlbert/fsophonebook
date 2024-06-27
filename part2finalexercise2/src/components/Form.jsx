const Form = ({addName, newName, enterName, enterNumber, newNumber}) => {
    return(
        <div>
    <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={enterName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={enterNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
    )
}

export default Form