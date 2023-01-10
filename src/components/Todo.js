import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import './todo.css';

const Todo = () => {

  const [inputData, setInputData] = useState('');
  const list  = useSelector((state) =>state.todoReducers.list);
  const dispatch = useDispatch();

   function getVal(thisval){
      // let getValue = document.getElementById("plus-btn").value;  
        alert(thisval);
   }

  return (
    <div className="main-div">
      <div className='child-div'>
        <figure>
          <figcaption>Add your List Here</figcaption>
        </figure>
        <div className='addItems'>
          <input type="text" placeholder='Add Items..' value={inputData} onChange={(e) => setInputData(e.target.value)}/>
          <i className='fa fa-plus add-btn' id='plus-btn' onClick={() =>dispatch(addTodo(inputData), setInputData(''), getVal(this.value))}></i>
        </div>
        <div className='showItems'>
          {
            list.map((elem)=>{
              return (
              <div className='eachItem' key={elem.id}>
                <h3>{elem.data}</h3>
                <div className='todo-btn'>
                  <i className='fa fa-trash add-btn' title='Delete' onClick={() =>dispatch(deleteTodo(elem.id))}></i>
                </div>
              </div>
              )
            })
          }
        </div>

        <div className='showItems'>
          <button className='btn effect04' data-sm-link-text='remove All' onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>
        </div>
      </div>
    </div>
  )
}

export default Todo