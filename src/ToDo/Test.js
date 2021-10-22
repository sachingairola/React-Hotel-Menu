import React, { useState, useEffect } from 'react'

function Test() {
    
    const [showData, setShowData] = useState("");
    const [newData, setNewData] = useState([]);

    const showItems = ()=>{
        if(!showData){
            alert("Please enter some data");
        }else{
            setNewData([...newData, showData])
            setShowData("")
        }
    }

    return ( 
        <>
            <div>
                <input type="text"  onChange={(e)=>setShowData(e.target.value)} value={showData}/>
                <i className="fa fa-plus add-btn"onClick={showItems}></i>
            </div>
            {
                newData.map((data)=>{
                    return(

                    <div>
                        <h2>{data}</h2>
                    </div>
                    )

                })
            }
        </>
    )
}

export default Test
