import { useState } from "react";
export default function List() {
  const [items, setItems] = useState(["finish this challenge!"]);
  const [newState,setNewState]=useState('')

  const handleAddItem=()=>{
    const newItem = newState;
    setItems([...items,newItem]);
    setNewState("");
  }

  const handleSetState=(event)=>{
    setNewState(event.target.value);
  }

  return (
    <div>
      <input value={newState} onChange={handleSetState} />
      <button onClick={handleAddItem} >add item</button>
      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
