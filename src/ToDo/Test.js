import React, { useState, useEffect } from 'react'

function Test() {
    
    const [showData, setShowData] = useState("");
    const [newData, setNewData] = useState([]);

    const showItems = ()=>{
        if(!showData){
            alert("Please enter some data");
        }else{ const newShowData ={
            id: new Date().getTime().toString(),
            name: showData
        }
            setNewData([...newData, newShowData])
            setShowData("")
        }
    }

    const delItem = (id)=>{
            const updatedItem = newData.filter((curEle)=>{
                return curEle.id !== id;
            })
            setNewData(updatedItem);
    }
    return ( 
        <>
            <div>
                <input type="text"  onChange={(e)=>setShowData(e.target.value)} value={showData} autoFocus="autofocus" />
                <i className="fa fa-plus add-btn"onClick={showItems}></i>
            </div>
            {
                newData.map((data)=>{
                    return(

                    <div>
                        <h2>{data.name}</h2>
                        <div className="todo-btn" key={data.id}>
                            <i className="far fa-trash add-btn" onClick={()=>delItem(data.id)}></i>
                            <i className="far fa-trash-alt add-btn" onClick={console.log(data.id)}></i>
                        </div>
                    </div>
                    )

                })
            }
        </>
    )
}

export default Test
