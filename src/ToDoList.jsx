import "./todolist.css"
import { useEffect, useState } from "react"


function ToDOList(){
    const [tasks,setTask]= useState([]);
     

    function addtask(event){
        const newtask = document.getElementById("puttask").value;
        if(!newtask.trim()==""){
            setTask(t=>[...t,newtask]);

        }
        
        document.getElementById("puttask").value="";
    }
    function delet(index){
        
        setTask(t=>t.filter((_,i)=> i !==index));
         
    }
    function uptask(index){
        if(index>0){
            const updatatask =[...tasks];
          
            [updatatask[index],updatatask[index -1 ]]=
            [updatatask[index - 1],updatatask[index]];
            setTask(updatatask);
        }

    }
    function downtask(index){
        
       
        if(index < tasks.length-1){
            const updatatask =[...tasks];

            [updatatask[index],updatatask[index+1]]=[updatatask[index+1 ],updatatask[index]]
            setTask(updatatask)
        }
        

        

    }
    



    return(
        <>
        
        <div className="To-Do-List">
        <h1 className="h1-for-to-do">To DO List</h1> 
        
        <input type="text" placeholder="Enter New Task.." id="puttask"
              onKeyDown={(e)=>{
                if(e.key=="Enter"){
                    const newtask = document.getElementById("puttask").value;
                    setTask(t=>[...t,newtask])
                    document.getElementById("puttask").value="";
                }
                
              }}/>
        <button onClick={addtask} className="add-task">Add Task</button>

        
        <ul className="todoul">
            {tasks.map((tast,index)=><li key={index} className="todoli"> 
                                <span>{tast}</span> 
                <button onClick={()=>delet(index)} className="delete-task">delete</button>
                <button onClick={()=>uptask(index)} className="uptask" >👆</button>
                <button onClick={()=>downtask(index)} className="downtask">👇</button>
            </li>)}
        </ul>
      

        </div>
        </>
    )
}

export default ToDOList