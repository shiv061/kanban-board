import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { KanbanState, List, TAddListPayload } from "./types";
import { ulid } from "ulidx";

export const useKanbanStore = create<KanbanState>()(
  devtools(
    persist(
      immer((set) => ({
        list: [],
        setList: (payload: TAddListPayload) => {
          const listItem: List = {
            id: ulid(),
            name: payload.name,
          };
          set((state) => {
            state.list.push(listItem);
          });
        },
        swapList: (payload) => {
          const { sourceId, targetId } = payload;
          set((state) => {
            const sourceIndex = state.list.findIndex(
              (li) => li.id === sourceId
            );
            const targetIndex = state.list.findIndex(
              (li) => li.id === targetId
            );
            [state.list[sourceIndex], state.list[targetIndex]] = [
              state.list[targetIndex],
              state.list[sourceIndex],
            ];
          });
        },
      })),
      { name: "kanban-storage" }
    )
  )
);
