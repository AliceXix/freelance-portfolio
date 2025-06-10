import { Routes, Route } from "react-router-dom";
import CharacterSelector from "./components/CharacterSelector";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterSelector />} />
    </Routes>
  );
}
