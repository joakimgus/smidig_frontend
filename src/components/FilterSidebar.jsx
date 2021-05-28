import React, { useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "./Loading";

const FilterSidebar = ({
  filter,
  setFilter,
  searchFilter,
  setSearchFilter,
}) => {
  const [museums, setMuseums] = useState();

  useEffect(() => {
    fetchMuseums();
  }, []);

  const fetchMuseums = async () => {
    const res = await fetchData("/museums");
    setMuseums(res);
  };

  const handleMuseumChange = (e) => {
    const name = e.target.name;
    if (filter.museums.includes(name)) {
      setFilter({
        ...filter,
        museums: filter.museums.filter((item) => item !== name),
      });
    } else {
      setFilter((prev) => {
        return { ...filter, museums: [...prev.museums, name] };
      });
    }
  };

  const handleTagChange = (e) => {
    const name = e.target.name;
    if (filter.tags.includes(name)) {
      setFilter({
        ...filter,
        tags: filter.tags.filter((item) => item !== name),
      });
    } else {
      setFilter((prev) => {
        return { ...filter, tags: [...prev.tags, name] };
      });
    }
  };

  if (!museums) {
    return <Loading />;
  }

  return (
    <>
      <div
        className={"sidebar-filter-thing"}
        style={{ width: "15vw", minHeight: "65vh", backgroundColor: "white" }}
      >
        <div>
          <input
            type="text"
            placeholder={"Søk etter utstillinger"}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </div>
        <div>
          <h1>Spesifikasjoner</h1>
          <label>
            <input type="checkbox" name={"lyd"} onChange={handleTagChange} />
            Lyd
          </label>
          <label>
            <input type="checkbox" name={"fysisk"} onChange={handleTagChange} />
            Fysisk
          </label>
          <label>
            <input
              type="checkbox"
              name={"digital"}
              onChange={handleTagChange}
            />
            Digital
          </label>
        </div>
        <div>
          <h1>Brukergruppe</h1>
          <label>
            <input type="checkbox" name={"barn"} onChange={handleTagChange} />
            Barn
          </label>
          <label>
            <input type="checkbox" name={"voksne"} onChange={handleTagChange} />
            Voksne
          </label>
        </div>
        <hr />
        <div>
          <h1>Museum</h1>
          {museums.map((m) => (
            <label>
              <input
                type="checkbox"
                name={m._id}
                onChange={handleMuseumChange}
              />
              {m.name}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
