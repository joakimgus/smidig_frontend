import React, { useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "./Loading";

const FilterSidebar = ({ filterMuseums, setFilterMuseums }) => {
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
    if (filterMuseums.includes(name)) {
      setFilterMuseums(filterMuseums.filter((item) => item !== name));
    } else {
      setFilterMuseums((prev) => [...prev, name]);
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
        {museums.map((m) => (
          <div>
            <label>
              <input
                type="checkbox"
                name={m._id}
                onChange={handleMuseumChange}
              />
              {m.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterSidebar;
