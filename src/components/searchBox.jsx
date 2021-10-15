import React from "react";
import DataList from "../utils/dataList";

const SearchBox = ({ value, onChange, optionsList, listName }) => {
  return (

    <div className="input-group">
      <input
        type="text"
        name="query"
        className="form-control mb-3 searchBar"
        placeholder={listName}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
        list={listName}
      />

      {optionsList && <DataList listItems={optionsList} listname={listName} />}
    </div>
  );
};

export default SearchBox;
