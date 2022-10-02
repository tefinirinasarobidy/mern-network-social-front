import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Child from './components/Child';
import Routes from './components/Routtes'

function App() {
  const [data,setData] = useState(
    [
      {
        "id": 1,
        "task": "Give dog a bath",
        "complete": true
      }, 
      {
        "id": 2,
        "task": "Do laundry",
        "complete": true
      }, {
        "id": 3,
        "task": "Vacuum floor",
        "complete": false
      }, {
        "id": 4,
        "task": "Feed cat",
        "complete": true
      }, {
        "id": 5,
        "task": "Change light bulbs",
        "complete": false
      }, {
        "id": 6,
        "task": "Go to Store",
        "complete": true
      }, {
        "id": 7,
        "task": "Fill gas tank",
        "complete": true
      }, {
        "id": 8,
        "task": "Change linens",
        "complete": false
      }, {
        "id": 9,
        "task": "Rake leaves",
        "complete": true
      }, {
        "id": 10,
        "task": "Bake Cookies",
        "complete": false
      }, {
        "id": 11,
        "task": "Take nap",
        "complete": true
      }, {
        "id": 12,
        "task": "Read book",
        "complete": true
      }, {
        "id": 13,
        "task": "Exercise",
        "complete": false
      }, {
        "id": 14,
        "task": "Give dog a bath",
        "complete": false
      }, {
        "id": 15,
        "task": "Do laundry",
        "complete": false
      }, {
        "id": 16,
        "task": "Vacuum floor",
        "complete": false
      }, {
        "id": 17,
        "task": "Feed cat",
        "complete": true
      }, {
        "id": 18,
        "task": "Change light bulbs",
        "complete": false
      }, {
        "id": 19,
        "task": "Go to Store",
        "complete": false
      },
      {
        "id": 20,
        "task": "Fill gas tank",
        "complete": false
      }]
)
  const [input, setInput] = useState("")

  useEffect(() => {
      console.log(data)
    }, [])
    

  const declencher = () => {
    console.log('declencher depuis parent')
  }
    // const changeValue = (e) => {
    //   setInput(e.target.value)
    // }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <div>{input}</div>
    //     <div class="input-group">
    //      <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
    //     </div>
    //     <Child declencher={() => declencher()} inp={input}/>
    //    {/* {
    //       data.map(elemnt => {
    //         return <span> { elemnt.task }</span>
    //       })
    //     } */}
    //   </header>
    // </div>
    <div >
      <Routes/>
    </div>
  );
}

export default App;
