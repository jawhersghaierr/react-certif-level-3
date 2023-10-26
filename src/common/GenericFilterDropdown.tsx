import React, { useState } from "react";

type AutoFilterDropdownProps<T> = {
  data: T[];
  filterKey: keyof T;
  valueChange: (selectedItem: T) => void;
};

const GenericFilterDropdown = <T extends { [key: string]: any }>({
  data,
  filterKey,
  valueChange,
}: AutoFilterDropdownProps<T>) => {
  const [filterText, setFilterText] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const filteredData = data.filter((item) =>
    item[filterKey].toString().toLowerCase().includes(filterText.toLowerCase())
  );

  const handleValueChange = (selectedItem: T) => {
    setFilterText(""); // Clear the filter input
    valueChange(selectedItem);
    setIsDropdownVisible(false); // Close the dropdown
  };

  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
    setIsDropdownVisible(true); // Show the dropdown when typing
  };

  return (
    <div className="auto-filter-dropdown-container">
      <input
        type="text"
        className="filter-input"
        placeholder="Filter..."
        value={filterText}
        onChange={handleFilterInputChange}
        onFocus={() => setIsDropdownVisible(true)}
      />
      {isDropdownVisible && (
        <ul className="filtered-list">
          {filteredData.map((item) => (
            <li
              key={item.id} // Assuming there's an 'id' property
              onClick={() => handleValueChange(item)}
              className="filtered-item"
            >
              {item[filterKey]
                .toString()
                .split(new RegExp(`(${filterText})`, "i"))
                .map((text: string, i: number) =>
                  text.toLowerCase() === filterText.toLowerCase() ? (
                    <b key={i}>{text}</b>
                  ) : (
                    text
                  )
                )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenericFilterDropdown;
