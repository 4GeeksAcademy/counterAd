import React from "react";

const Pause = ({ onStop, onResume, isRunning }) => {
    return (
      <button onClick={isRunning ? onStop : onResume}   //condicional si en el código Counter isRunning es verdadero
            className={`btn ${isRunning ? "btn-danger" : "btn-success"} m-2`}>
        {isRunning ? "Pausar" : "Reanudar"}
      </button>
    );
  };

export default Pause;