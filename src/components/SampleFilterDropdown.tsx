import { useEffect, useState } from "react";
import GenericFilterDropdown from "../common/GenericFilterDropdown";
import useLocalStorage from "../hooks/genericLocalStorage";
import SetLocalStorageValue from "./SetLocalStorageValue";
import DisplayLocalStorageValue from "./DisplayLocalStorageValue";

const TestFilterComponent: React.FC = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleUserSelection = (selectedUser: (typeof apiData)[0]) => {
    console.log("Selected User:", selectedUser);
  };

  return (
    <div>
      <h2>exemple of auto dropdwon filter :</h2>
      <GenericFilterDropdown
        data={apiData}
        filterKey="name"
        valueChange={handleUserSelection}
      />
      <SetLocalStorageValue />
      <DisplayLocalStorageValue />
    </div>
  );
};

export default TestFilterComponent;
