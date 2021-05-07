
import React , {useState} from 'react'
import styled from 'styled-components'
const Cross = styled.button`
  background-color:#FD6868;
  color : #DEE3D0;
  width:50px;
  height:50px;
  font-size : 30px;
  float : right;
  margin-right:5px;
  border-radius : 10px;
`
const Add =  styled.button`
  background-color: green;
  font-size : 20px;
  color: #DEE3D0;
  width:100px;
  height:50px;
  border-radius:20px 20px;
  margin-top:40px;
`
const Input = styled.input`
  width:300px;
  height:30px;
  border-radius : 10px 10px;
  border-color : white;
  margin-left:500px;
  margin-top:50px;
`
const List = styled.div`
  margin-left:500px;
  margin-top:20px;
  width:auto;
  height:auto;
  background:#242C37;
  color:#DEE3D0;
  border-radius : 30px;
  overflow  : hidden;
  padding:10px;
`
const Output = styled.span`
  font-size:25px;
  margin-left:10px;
  margin-top:10px;

`
function App() {
  
  const [todo , setTodos] = useState([])
  const [inputVal , setINputVal] = useState()
  const addtask = (item) => {
  
    const newArr = [...todo , inputVal]
    setTodos(newArr)
    // newArr.splice(item, 1);
    setINputVal('');
    
  }
  const deleteNotes = index => {
    const notesArray = [...todo];
    notesArray.splice(index, 1);
    setTodos(notesArray);
  }
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      addtask();
    }
  };

  return (
    <>
    <div className="App">

           <Input class = "input" type="text" value = {inputVal} onKeyPress={handleKeyPress} onChange = {e => setINputVal(e.target.value)}/>
           <Add onClick = {() => addtask(inputVal)}>Add task</Add>
           </div>
          {todo.map((item, index) => (
           <List>
                <Output key = {index}>{item}</Output>
                <Cross onClick = {() => deleteNotes(index)}>X</Cross>
           </List>
        ))}
            
    
    </>
  );
}

export default App;
