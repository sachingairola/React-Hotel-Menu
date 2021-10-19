import React from 'react'

function Navigation({filterItem, menuItem}) {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                        menuItem.map((curEle)=>{
                            return(
                                <button className='btn-group__item' 
                                    onClick={()=>filterItem(curEle)}>{curEle}
                                </button>
                            );
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default Navigation;
