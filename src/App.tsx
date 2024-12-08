import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Board from "./components/Board";
import UnitList from "./components/UnitList";
import SynergyList from "./components/SynergyList";
import { Unit } from "./types";
import { units } from "./data/units";
import { traits } from "./data/traits";

function App() {
  const [boardUnits, setBoardUnits] = useState<Unit[]>([]);
  const [availableUnits, setAvailableUnits] = useState<Unit[]>(units);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (over.id === "board") {
      const draggedUnit = availableUnits.find((unit) => unit.id === active.id);
      if (draggedUnit) {
        setBoardUnits([...boardUnits, draggedUnit]);
        setAvailableUnits(
          availableUnits.filter((unit) => unit.id !== active.id),
        );
      }
    } else if (over.id === "unit-list") {
      const draggedUnit = boardUnits.find((unit) => unit.id === active.id);
      if (draggedUnit) {
        setAvailableUnits([...availableUnits, draggedUnit]);
        setBoardUnits(boardUnits.filter((unit) => unit.id !== active.id));
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="grid grid-cols-[300px_1fr] gap-8">
          <div>
            <SynergyList boardUnits={boardUnits} traits={traits} />
          </div>
          <div className="space-y-8">
            <Board units={boardUnits} />
            <UnitList units={availableUnits} />
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default App;
