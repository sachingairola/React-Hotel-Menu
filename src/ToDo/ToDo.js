import React from 'react';
import './style.css';

function ToDo() {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add your List here✔</figcaption>
                    </figure>
                    <div className="addItems">
                        <input 
                            type="text" 
                            placeholder="Add Item"
                            className="form-control"
                            value="value"
                        />
                        <i className="far fa-edit add-btn"></i>
                        <i className="fa fa-plus add-btn"></i>
                    </div>
                    <div className="showItems">
                        <div className="eachItem">
                            <div className="todo-btn">
                                <i className="far fa-edit add-btn"></i>
                                <i className="far fa-trash-alt add-btn"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="showItems">
                    <button className="btn effect04">
                        <span>Check List</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ToDo
