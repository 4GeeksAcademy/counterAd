import React, { useEffect, useState }from "react";
import Pause from "./Pause";

const Counter = () => {
	const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return; //Para que no haga nada si no está corriendo

		const interval = setInterval(() => {
			setCount(prevCount => prevCount + 1);
		}, 1000);
		
		//función de limpieza
    return () => clearInterval(interval);
  }, [isRunning, count]);

  const handlePause = () => {
    setIsRunning(false); // Detiene el contador
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  //1ro se pasa el número a texto para después poder manipularlo y poner "0" a la izq cpn padStart
	const countString = count.toString().padStart(6, '0');

  return (
    <div className="d-flex flex-column align-items-center">
    <div className="align-items-center text-white">
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
      <div className="d-flex justify-content-center">
        <Pause onStop={handlePause} onResume={handleResume} isRunning={isRunning} />
      </div>
    </div>
    </div>
  ); }


export default Counter;