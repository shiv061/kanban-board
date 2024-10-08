import { useCallback, useState } from "react";
import { AddModal } from "./AddModal";

export const AddList = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback((nextOpen: boolean) => {
    setOpen(nextOpen);
  }, []);

  return (
    <>
      <button className="btn btn-primary" onClick={() => handleToggle(true)}>
        Add List
      </button>
      <AddModal open={open} handleToggle={handleToggle} />
    </>
  );
};
