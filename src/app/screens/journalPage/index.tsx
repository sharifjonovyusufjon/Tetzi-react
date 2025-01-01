import { Route, Routes } from "react-router-dom";
import Journals from "./journal";
import ChosenJournal from "./chosenJournal";
import "../../../css/journal.css";

export default function JournalPage() {
  return (
    <div>
      <Routes>
        <Route path="/:journalId" element={<ChosenJournal />} />
        <Route path="/" element={<Journals />} />
      </Routes>
    </div>
  );
}
