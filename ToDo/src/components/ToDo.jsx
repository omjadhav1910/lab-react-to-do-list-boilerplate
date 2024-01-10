import { Component } from "react";

class ToDo extends Component{

    constructor(){
        super()
        this.state = {
            text : "",
            todo : []
        }
    }

    render(){
        

        let {text,todo} = this.state;
        let handleChange= (event)=>{
            this.setState({text:event.target.value})
        }
        let handleClick = ()=>{
            this.setState({
                todo:[...todo , text]
            })
        }
        let handleUpadte =(index)=>{
            let updatedText= prompt("Enter a new To Do")
            let filterToDO = todo.map((element,i)=>{
                if(i == index){
                    return updatedText; 
                }
                return element
            })
            this.setState({
                todo:filterToDO
            })
        }
        let handleDelete =(index)=>{
            let deleteData = todo.filter((element,i)=> i !== index)
            this.setState({
                todo:deleteData
            })
        }

        return(
            <>
            <div id="shadow">

            <input type="text" placeholder="ENTER NEW TEXT" onChange={handleChange}/>
            <button onClick={handleClick}>ADD TO DO</button>
            </div>

            <div>
                {todo.map(
                    (element,i)=>(
                        <div key={i}>   
                            <p>{element}</p>
                            <button onClick={()=>handleUpadte(i)}>Update Todo</button>
                            <button onClick={()=>handleDelete(i)}>Delete Todo</button>

                        </div>
                    )
                )}
                    
                
            </div>
            </>
        )
    }
}

export default ToDo