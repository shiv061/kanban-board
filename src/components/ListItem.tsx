import { useCallback, useRef, useState } from "react";
import { useKanbanStore } from "../store";
import clsx from "clsx";

export const ListItem = ({ id, name }: { id: string; name: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const swapList = useKanbanStore((state) => state.swapList);
  const [isHovering, setIsHovering] = useState("");

  const handleDragStart = useCallback(
    (e: React.DragEvent) => {
      e.dataTransfer.setData("sourceId", id);
    },
    [id]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsHovering("");
      const targetId = id;
      const sourceId = e.dataTransfer.getData("sourceId");
      if (sourceId === targetId) return;

      swapList({ sourceId, targetId });
    },
    [id, swapList]
  );

  const handleDragEnter = () => {
    setIsHovering(id);
  };
  const handleDragLeave = () => {
    setIsHovering("");
  };

  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-4 w-64 p-4 bg-neutral-900 rounded-md cursor-move transition-colors duration-300",
        isHovering === id ? "bg-gray-700" : "bg-gray-900"
      )}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <p>{name}</p>
      <div>Cards</div>
      <div className="flex justify-center">
        <button className="btn btn-sm">Add task</button>
      </div>
    </div>
  );
};
