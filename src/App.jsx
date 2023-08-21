import { EstilosGlobais, Grade, Rodape } from "./EstilosGlobais";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <EstilosGlobais />
      <Grade>
        <Home />
        <Rodape />
      </Grade>
    </>
  );
}
