export type List = {
  id: string;
  name: string;
};
export type TAddListPayload = { name: string };
export type SwapListPayload = { sourceId: string; targetId: string };

export type KanbanState = {
  list: List[];
  setList: (payload: TAddListPayload) => void;
  swapList: (paayload: SwapListPayload) => void;
};
