import React, { useEffect, useState } from "react";
import { ListEntry } from "./components/UI/ListEntry/ListEntry";
import { AddNewEntry } from "./components/UI/AddNewEntry"
import './style/App.css';
import { SideBar } from "./components/UI/SideBar/SideBar";

function App() {


  const [arr, setArr] = useState([]);
  const [filterArr, setFilterArr] = useState(arr)
  const [visibleList, setVisibleList] = useState(true)

  const activeTask = arr.length - (arr.filter((item) => item.completed)).length;
  const visibleClearAll = arr.filter(item => item.completed).length > 0;
  const visibleButton = arr.length > 0;
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data') || '[]');
    setArr(data)
  }, [])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(arr))
  }, [arr])

  useEffect(() => {
    setFilterArr(arr)
  }, [arr])

  const createNewObj = (text) => {

    let creacteId = filterArr.length !== 0 ? filterArr[filterArr.length - 1].id : 0;
    return {
      id: creacteId + 1,
      label: text,
      completed: false
    };
  };

const addItem = (text) => {
  setArr([
      ...arr,
      createNewObj(text)
    ])
  };

  const removeItem = (id) => {
    setArr(arr.filter((item) => item.id !== id))
  }

  const toggleItem = (id) => {
    setArr(arr.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed 
      }
      return item
    }))
  }

  const filterTasks = (sort) => {
    switch (sort) {
      case 'all':
        setFilterArr(arr);
        break;
      case 'active':
        setFilterArr(arr.filter((item) => !item.completed))
        break;
      case 'completed':
        setFilterArr(arr.filter((item) => item.completed))
        break;
      default:
        setFilterArr(arr);
        break;
    }
  }

  const clearAllTasks = () => {
    setArr(arr.filter((item) => !item.completed))
  }

  const toggleVisibleList = () => {
    setVisibleList(prev => !prev)
  }

  
  
  return (
    <div className="App">
      <div className="todo">
        <AddNewEntry 
          visibleList={visibleList} 
          toggleVisibleList={toggleVisibleList} 
          visibleButton={visibleButton} 
          addItem={addItem}/>
        {visibleList && (
          <ListEntry
            toggleItem={toggleItem}
            removeItem={removeItem}
            value={filterArr}
        />
        )}
        {visibleButton && (
          <SideBar 
            clearAllTasks={clearAllTasks} 
            visibleClearAll={visibleClearAll} 
            filterTasks={filterTasks} 
            count={activeTask}/>
        ) &&
        visibleList && (
          <SideBar 
            clearAllTasks={clearAllTasks} 
            visibleClearAll={visibleClearAll} 
            filterTasks={filterTasks} 
            count={activeTask}/>
        )}
      </div>
    </div>
  );
}

export default App;