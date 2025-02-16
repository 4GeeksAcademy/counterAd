import React, { useEffect, useState }from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(prevCount => prevCount + 1);
		}, 1000);
		
		//función de limpieza
		return () => clearInterval(interval);
	}, []);

	const countString = count.toString().padStart(6, '0');

  return (
    <div className="d-flex justify-content-center align-items-center text-white">
      <h1 className="text-white">Contador:</h1>
      <div className="p-4">
	  	<div className="btn items-center m-2 bg-secondary"><i class="fi fi-rr-clock-three"></i></div>
        <div className="btn items-center m-2 bg-secondary">
          {countString[0]}
        </div>
        <div className="btn items-center m-2 bg-secondary">
          {countString[1]}
        </div>
		<div className="btn items-center m-2 bg-secondary">
          {countString[2]}
        </div>
		<div className="btn items-center m-2 bg-secondary">
          {countString[3]}
        </div>
        <div className="btn items-center m-2 bg-secondary">
          {countString[4]}
        </div>
		<div className="btn items-center m-2 bg-secondary">
          {countString[5]}
        </div>
      </div>
    </div>
  ); }


export default Counter;