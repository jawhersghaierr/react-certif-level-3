import useLocalStorage from "../hooks/genericLocalStorage";

function DisplayLocalStorageValue() {
  const [localStorageValue] = useLocalStorage<string>("exampleKey");

  return (
    <div>
      <h2>Valeur actuelle dans le local storage</h2>
      <p>{localStorageValue || "Aucune valeur stockée."}</p>
    </div>
  );
}

export default DisplayLocalStorageValue;
