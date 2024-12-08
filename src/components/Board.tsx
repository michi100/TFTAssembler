import React from "react";
import { useDroppable, useDraggable } from "@dnd-kit/core";
import { Unit } from "../types";

interface BoardUnitProps {
  unit: Unit;
}

const BoardUnit: React.FC<BoardUnitProps> = ({ unit }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: unit.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-full h-full p-1 cursor-move"
    >
      <img
        src={unit.imageUrl}
        alt={unit.name}
        className="w-full h-full object-cover object-right rounded-md"
      />
    </div>
  );
};

interface BoardProps {
  units: Unit[];
}

const Board: React.FC<BoardProps> = ({ units }) => {
  const { setNodeRef } = useDroppable({
    id: "board",
  });
  const cellSize = 150;

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <div
        ref={setNodeRef}
        className="grid grid-cols-7 grid-rows-4 gap-1 w-full h-[400px]"
        style={{
          width: `1000px`,
          height: `650px`,
          gridTemplateColumns: `repeat(7, ${cellSize}px)`,
          gridTemplateRows: `repeat(4, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: 28 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-400 rounded-md flex items-center justify-center"
          >
            {units[index] && <BoardUnit unit={units[index]} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
