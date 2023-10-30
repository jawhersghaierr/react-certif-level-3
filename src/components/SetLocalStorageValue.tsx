import React, { useState } from "react";
import useLocalStorage from "../hooks/genericLocalStorage";

function SetLocalStorageValue() {
  const [inputValue, setInputValue] = useState<string>("");

  const [localStorageValue, setLocalStorageValue] =
    useLocalStorage<string>("exampleKey");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSetLocalStorage = () => {
    setLocalStorageValue(inputValue);
  };

  return (
    <div>
      <h2>Définir la valeur dans le local storage</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSetLocalStorage}>Définir la valeur</button>
    </div>
  );
}

export default SetLocalStorageValue;
