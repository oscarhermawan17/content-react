import { useState, useMemo } from 'react'
import Child from './Child'

function Parent() {
  const [text, setText] = useState('')
  const [count, setCount] = useState(1);

  const [selectedFruit, setSelectedFruit] = useState('banana')
  
  // const tanpaCaching = []
  const caching = useMemo(() => [], [])

  const perhitungan = (count) => {
    for(let i=0; i<999999999; i++) {}
    return count*2
  }

  const onClickHandler = () => {
    setCount((prev) => prev+1)
  }

  const onChangeHandler = (event) => {
    setText(event.target.value)
  }


  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log('event', event)
  }


  return (
    <div style={{ margin: `20px auto`, width: 500, border: `solid 1px black `, padding: 20}}>
      Text: <input value={text} onChange={onChangeHandler} /> <br/><br/>
      Count : {count} &nbsp;
      <button onClick={onClickHandler}>Add</button> <br/><br/>
      <Child values={caching} />


      <form onSubmit={onSubmitHandler}>
        <select
          value={selectedFruit} // ...force the select's value to match the state variable...
          onChange={e => setSelectedFruit(e.target.value)} // ... and update the state variable on any change!
          onBlur={e => setSelectedFruit("orange")}
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
        <button type="submit">Submit</button> 
      </form>
      

    </div>
  );
}

export default Parent
