import { useEffect, useRef, useState } from "react";
let timeout;
function CounterHooksClone() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const initialMount = useRef(true);

  // componentDidMount
  useEffect(() => {
    console.log("use effect mounted");

    timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // componentWillUnmount
    return () => {
      console.log("use effect unmounted");
      clearTimeout(timeout);
    };
  }, []);

  useEffect(function () {
    return function () {
      console.log("will unmount");
    };
  }, []);

  // componentDidUpate
  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      console.log("use effect invoked");
    }
  }, [loading, count]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h6>Counter Hooks Clone</h6>
      <p> current count : {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment counter
      </button>
    </div>
  );
}

export default CounterHooksClone;
