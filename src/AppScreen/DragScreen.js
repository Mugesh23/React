import React, { useState } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import SampleData from '../SampleJsonData';

export default function DragAndDrop() {

  const [listDataArry, setListDataArry] = useState(SampleData)
  const getListStyle = (isDraggingOver) => {
    let style = {
      background: isDraggingOver ? "#ffd859" : "#f4f5f7",
      padding: 10,
      width: 250,
      margin: 20
    }
    return style
  }
  const getItemStyle = (isDragging, draggableStyle) => {
    let style = {
      userSelect: "none",
      padding: 0,
      margin: `0 0 ${10}px 0`,

      // change background colour if dragging

      // styles we need to apply on draggables
      ...draggableStyle
    }
    return style
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!result.destination) {
      return;
    }
    const sourceIndex = +source.droppableId;
    const destinationIndex = +destination.droppableId;
    if (sourceIndex === destinationIndex) {
      const items = reorder(listDataArry[sourceIndex], source.index, destination.index);
      const newState = [...listDataArry];
      newState[sourceIndex] = items;
      setListDataArry(newState);
    } else {
      const result = move(listDataArry[sourceIndex], listDataArry[destinationIndex], source, destination);
      const newState = [...listDataArry];
      newState[sourceIndex] = result[sourceIndex];
      newState[destinationIndex] = result[destinationIndex];

      setListDataArry(newState.filter(group => group.length));
    }
  }
  return (
    <div className='d-flex'>
      <DragDropContext onDragEnd={onDragEnd}>
        {
          listDataArry.map((item, index) => {
            return <Droppable key={index} droppableId={index.toString()} >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {
                    item.map((draggableItem, draggableItemIndex) => {
                      return <Draggable draggableId={draggableItem.id.toString()} key={draggableItem.id} index={draggableItemIndex}>
                        {(draggableProvided, draggableSnapShot) => {
                          return <div
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            {...draggableProvided.dragHandleProps}
                            style={getItemStyle(
                              draggableSnapShot.isDragging,
                              draggableProvided.draggableProps.style
                            )}
                          >
                            <div className='d-flex flex-column card py-2 px-3 border-rad15' style={
                              { background: draggableSnapShot.isDragging ? "#6cd47f" : "#ffffff", }}>
                              <div>
                                <span>{draggableItem.title}</span>
                              </div>
                              <div className='d-flex justify-content-between align-items-center'>
                                <img src='./images/attention.png' alt='caution' className='icon-w-15' />
                                <div>
                                  <img src={draggableItem.thumbnailUrl} alt='caution' className='icon-w-15' />
                                </div>
                              </div>

                            </div>
                          </div>
                        }}
                      </Draggable>
                    })
                  }
                </div>
              )}
            </Droppable>
          })
        }
      </DragDropContext>
    </div>
  );
}
