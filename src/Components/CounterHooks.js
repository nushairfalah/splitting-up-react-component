const { useState, useEffect, useRef } = require("react");
let timeout;
function CounterHooks(props) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const initialMount = useRef(true);

  // mount
  useEffect(() => {
    console.log("component mounted on hooks");
    // this is just an example of loading content
    timeout = setTimeout(() => {
      setLoading(false);
      console.log("data updated on hooks");
    }, 1000);

    // unmount
    return () => {
      console.log("component unmounted on hooks");
      clearTimeout(timeout);
    };
  }, []);

  // update
  useEffect(() => {
    // since we this effect will also run when the component mounted on the first time,
    // we need this code to keep our logic only run when the component is update
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      console.log("component updated on hooks");
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h6> Counter </h6>
      <p> current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
    </div>
  );
}

export default CounterHooks;
