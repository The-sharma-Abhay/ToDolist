import React, { useState } from "react";
import logo from './Image/download.png';
import './index.css';
function Todolist() {
    const [inputdata, setInputdata] = useState("");
    const [item, setItem] = useState([]);

    const additems = () => {
        if(!inputdata){

        }else{
            setItem([...item, inputdata]);
        setInputdata("");
        }
    }
 const deleteitem=(id)=>{
        const updateditems =item.filter((elem,ind)=>{
            return ind !== id;
        })
        setItem(updateditems);
 }
 const deleteAll =()=>{
    setItem([]);
 }
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={logo} alt="Todo logo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="additems">
                        <input type="text" placeholder="Add items" value={inputdata} onChange={(e) => { setInputdata(e.target.value) }} />
                        <i className="fa fa-plus add-btn" title="Add items" onClick={additems}></i>
                    </div>

                    <div className="showItems">

                    {
                        item.map((elements, index) => {
                            return (
                                <>
                                        <div className="eachItem" key={index}>
                                            <h3>{elements}</h3>
                                            <i className="fa-edit fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteitem(index)}></i>
                                        </div>
                                        
                                </>
                            )
                        })
                    }
                                    </div>

                    <div className="showItems">
                        <button type="button" className="btn effect04"  onClick={deleteAll}>Clear All</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Todolist;