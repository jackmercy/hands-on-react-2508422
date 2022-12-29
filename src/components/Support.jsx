import { useState, useEffect } from 'react';

const pageTitle = document.title;

export default () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    count && (document.title = `${pageTitle} x${count}`);
  });

  const getCount = () => {
    setCount(++count);
  };

  return (
    <button className="outline" onClick={() => getCount()}>
      {count === 0 ? 'Click me!' : `Supported ${count}`}
    </button>
  );
};
