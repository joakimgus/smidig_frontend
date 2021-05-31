import React, { useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import "./style/FilterSidebar.css";

const FilterSidebar = ({ filter, setFilter, setSearchFilter }) => {
  const [museums, setMuseums] = useState();

  useEffect(() => {
    fetchMuseums();
  }, []);

  const fetchMuseums = async () => {
    const res = await fetchData("/museums/names");
    setMuseums(res);
    console.log(res);
  };

  const handleChange = (e, f) => {
    const name = e.target.name;
    if (filter[f.name].includes(name)) {
      setFilter({
        ...filter,
        [f.name]: filter[f.name].filter((item) => item !== name),
      });
    } else {
      setFilter((prev) => {
        return { ...filter, [f.name]: [...prev[f.name], name] };
      });
    }
  };

  if (!museums) {
    return <Loading />;
  }

  return (
    <div className={"sidebar-container"}>
      <SearchBar setSearchFilter={setSearchFilter} />
      <div className={"filter-container"}>
        <div className={"specs-area"}>
          <h3>Spesifikasjoner</h3>
          <label>
            <input
              type="checkbox"
              name={"lyd"}
              onChange={(e) => handleChange(e, { name: "tags" })}
            />
            Lyd
          </label>
          <label>
            <input
              type="checkbox"
              name={"fysisk"}
              onChange={(e) => handleChange(e, { name: "tags" })}
            />
            Fysisk
          </label>
          <label>
            <input
              type="checkbox"
              name={"digital"}
              onChange={(e) => handleChange(e, { name: "tags" })}
            />
            Digital
          </label>
        </div>
        <div className={"user-area"}>
          <h3>Brukergruppe</h3>
          <label>
            <input
              type="checkbox"
              name={"barn"}
              onChange={(e) => handleChange(e, { name: "tags" })}
            />
            Barn
          </label>
          <label>
            <input
              type="checkbox"
              name={"voksne"}
              onChange={(e) => handleChange(e, { name: "tags" })}
            />
            Voksne
          </label>
        </div>
        <div className={"museum-area"}>
          <h3>Museum</h3>
          {museums.map((m, i) => (
            <label>
              <input
                key={i}
                type="checkbox"
                name={m._id}
                onChange={(e) => handleChange(e, { name: "museums" })}
              />
              {m.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
