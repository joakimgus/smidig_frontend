import React, { useEffect, useState } from "react";
import "../style/Superuser/SuperuserAddPackage.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { fetchData } from "../../api/apiHandler";
import Loading from "../../components/Loading";
import FileBase from "react-file-base64";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const SuperuserAddPackage = () => {
  const [columns, setColumns] = useState({});
  const [products, setProducts] = useState();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    fetchData("/products/ourProducts").then((res) => setProducts(res));
  }, []);

  useEffect(() => {
    if (products) {
      setColumns({
        ["yourProducts"]: {
          name: "Dine produkter",
          items: products,
        },
        ["productsAdded"]: {
          name: "Produkter i pakken",
          items: [],
        },
      });
    }
  }, [products]);

  const handleClick = async () => {
    // Just log out selected products for now
    console.log(columns);

    const res = await postData("/exhibitions/add", columns);
    console.log(res);
  };

  if (!products) {
    return <Loading />;
  }

  return (
    <div className={"su-new-package-page-container"}>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
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
                              ? "lightblue"
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
                                          ? "#263B4A"
                                          : "#456C86",
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
      <div>
        <button onClick={handleClick}>Legg til i pakken</button>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, media: base64 })}
        />
      </div>
    </div>
  );
};

export default SuperuserAddPackage;
