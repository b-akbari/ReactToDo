import { useState } from "react";
export default function List() {
  const [items, setItem] = useState(["finish this challenge!"]);

  return (
    <div>
      <input />
      <button>add item</button>
      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
