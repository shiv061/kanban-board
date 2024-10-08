import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

export const Kanban = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 gap-6">
      <Header />
      <Layout />
    </div>
  );
};
