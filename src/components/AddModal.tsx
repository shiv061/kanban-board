import clsx from "clsx";
import { useState } from "react";
import { useKanbanStore } from "../store";

export const AddModal = ({
  open,
  handleToggle,
}: {
  open: boolean;
  handleToggle: (nextOpen: boolean) => void;
}) => {
  const [itemInput, setItemInput] = useState("");
  const setList = useKanbanStore((state) => state.setList);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemInput(e.target.value);
  };

  const handleAddListItem = () => {
    if (!itemInput.length) return;
    setList({ name: itemInput.trim() });
    setItemInput("");
    handleToggle(false);
  };

  return (
    <dialog className={clsx("modal", open && "modal-open")}>
      <div className="modal-box">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Add a new list item</h3>
          <div>
            <input
              value={itemInput}
              className="input input-bordered w-full max-w-xs"
              onChange={handleInputChange}
              type="text"
              placeholder="type here..."
            />
          </div>
        </div>
        <div className="modal-action">
          <button className="btn" onClick={() => handleToggle(false)}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleAddListItem}>
            Add
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={() => handleToggle(false)} />
    </dialog>
  );
};
