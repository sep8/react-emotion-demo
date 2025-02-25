import React, { useState, useEffect } from 'react';

const Component = (props) => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([{ id: 1, name: 'Item 1' }]);

  useEffect(() => {
    console.log('Component re-rendered');
  }, [items]);

  const handleClick = () => {
    count++;
    setCount(count);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => setItems([...items, { id: Date.now(), name: 'New Item' }])}>
              Add Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
