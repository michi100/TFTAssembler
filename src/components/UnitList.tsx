import React from "react";
import { Unit } from "../types";
import { useDroppable, useDraggable } from "@dnd-kit/core";

interface UnitItemProps {
  unit: Unit;
}

const UnitItem: React.FC<UnitItemProps> = ({ unit }) => {
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
      className="w-24 h-24 bg-gray-700 rounded-md cursor-move"
    >
      <img
        src={unit.imageUrl}
        alt={unit.name}
        className="w-full h-full object-cover object-right rounded-md"
      />
    </div>
  );
};

interface UnitListProps {
  units: Unit[];
}

const UnitList: React.FC<UnitListProps> = ({ units }) => {
  const { setNodeRef } = useDroppable({
    id: "unit-list",
  });

  return (
    <div ref={setNodeRef} className="p-4 bg-gray-800 rounded-lg">
      <div className="grid grid-cols-10 gap-2">
        {units.map((unit) => (
          <UnitItem key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
};

export default UnitList;
