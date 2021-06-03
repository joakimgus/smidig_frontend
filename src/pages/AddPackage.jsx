import React, { useContext, useEffect, useState } from "react";
import "./style/AddPackage.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";
import { useHistory } from "react-router";
import { onDragEnd } from "../util/onDragEnd";
import { UserContext } from "../context/context";

const AddPackage = () => {
  const [columns, setColumns] = useState({});
  const [products, setProducts] = useState();

  const { user } = useContext(UserContext);

  let redirect;
  let productsUrl;
  if (user.type === "SUPER") {
    redirect = "/superbruker/lag-ny-pakke/info";
    productsUrl = "/products/ourProducts";
  } else if (user.type === "ADMIN") {
    redirect = "/admin/lag-ny-pakke/info";
    productsUrl = "/products";
  }

  const history = useHistory();

  useEffect(() => {
    fetchData(productsUrl).then((res) => setProducts(res));
  }, []);

  useEffect(() => {
    if (products) {
      setColumns({
        ["yourProducts"]: {
          name: "Lagerbeholdning",
          items: products,
        },
        ["productsAdded"]: {
          name: "Ny pakkeløsning",
          items: [],
        },
      });
    }
  }, [products]);

  const handleClick = async () => {
    // Just log out selected products for now
    console.log(columns);
    localStorage.setItem(
      "newExhibition",
      JSON.stringify(columns.productsAdded)
    );

    history.push(redirect);
  };

  if (!products) {
    return <Loading />;
  }

  return (
    <div className={"su-new-package-page-container"}>
      <div className={"su-new-package-top-text-container"}>
        <h3>Lag ny pakkeløsning</h3>
        <p>
          På denne siden kan du sette sammen enkeltprodukter for å lage en
          pakkeløsning som kan bestilles av kunder.
          <br />
          Dra produktene du vil ha med i pakkeløsningen fra "Lagerbeholdning"
          til "Ny pakkeløsning" (fra venstre til høyre).
        </p>
        <div className={"su-new-package-img-container"}>
          <img src={require("../images/add-package-process-1.png").default} />
        </div>
      </div>
      <div className={"su-new-package-drag-drop-container r3"}>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                id={columnId}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightgreen"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item._id}
                                draggableId={item._id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 8,
                                        margin: "0 0 4px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#747474"
                                          : "#2f2f2f",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.name}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
      <div className={"su-create-package-btn-container"}>
        <button onClick={handleClick}>Gå videre</button>
      </div>
    </div>
  );
};

export default AddPackage;
