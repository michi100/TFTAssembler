import React from "react";
import { Unit, Trait } from "../types";
import { traits } from "../data/traits";

interface SynergyListProps {
  boardUnits: Unit[];
  traits: typeof traits;
}

const SynergyList: React.FC<SynergyListProps> = ({ boardUnits, traits }) => {
  const calculateTraitCount = (traitId: string) => {
    return boardUnits.filter((unit) => unit.traits.includes(traitId)).length;
  };

  const getActiveBreakpoint = (trait: Trait, count: number) => {
    return trait.breakpoints.reduce(
      (active, breakpoint) => (count >= breakpoint ? breakpoint : active),
      0
    );
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl text-white mb-4">シナジー</h2>
      <div className="space-y-2">
        {Object.values(traits)
          .sort((a, b) => {
            const countA = calculateTraitCount(a.id);
            const countB = calculateTraitCount(b.id);
            const activeA = getActiveBreakpoint(a, countA) > 0;
            const activeB = getActiveBreakpoint(b, countB) > 0;
            if (activeA && !activeB) return -1;
            if (!activeA && activeB) return 1;
            return 0;
          })
          .map((trait) => {
            const count = calculateTraitCount(trait.id);
            const activeBreakpoint = getActiveBreakpoint(trait, count);

            if (count === 0) return null;

            return (
              <div
                key={trait.name}
                className={`flex items-center justify-between p-2 rounded ${
                  activeBreakpoint > 0 ? "bg-blue-900" : "bg-gray-700"
                }`}
              >
                <span className="text-white">{trait.name}</span>
                <span className="text-white">{count}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SynergyList;
