import { useKanbanStore } from "../store";
import { AddList } from "./AddList";
import { ListItem } from "./ListItem";

export const Layout = () => {
  const list = useKanbanStore((state) => state.list);

  return (
    <main className="flex-1">
      <div className="flex gap-6">
        {list.map((li) => (
          <ListItem key={li.id} id={li.id} name={li.name} />
        ))}
        <AddList />
      </div>
    </main>
  );
};
