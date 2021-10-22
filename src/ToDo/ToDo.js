import React, { useState } from 'react';
import Test from './Test';
import './style.css';

function ToDo() {
    const [inputData, setInputData] = useState("");
    const [items, setItems] =useState([]);

    const addItem = ()=>{
        if(!inputData){
            alert("Please add data")
        }else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            setItems([...items, myNewInputData])
            setInputData("")
        }
    }

    const removeItem = (id)=>{
        const updatedItems = items.filter((curEle)=>{
            return curEle.id !== id;
        });
            setItems(updatedItems);
    }

    const removeAll = ()=>{
        return setItems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add your List here ✔</figcaption>
                    </figure>
                    <div className="addItems">
                        <input 
                            type="text" 
                            placeholder="Add Item"
                            className="form-control"
                            value={inputData}
                            onChange = {(e)=>setInputData(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                        <i className="far fa-edit add-btn"></i>
                    </div>
                    <div className="showItems">
                        {
                            items.map((item, index)=>{
                                return(
                                    <div className="eachItem" key={item.id}>
                                        <h3>{item.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn"></i>
                                            <i className="far fa-trash-alt add-btn" onClick={()=>removeItem(item.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text='Remove' onClick={removeAll}>
                            <span>Check List</span>
                        </button>
                    </div>
                </div>
            </div>
            <Test />
        </>
    )
}

export default ToDo
