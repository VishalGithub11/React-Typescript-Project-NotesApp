import React, { useState } from "react";
import "./App.css";
import { INotes } from "./models/notes";
import { NoteList } from "./Notes/NoteList";
import { CreateNotes } from "./Notes/CreateNotes";

function App() {
  const [notes, setNotes] = useState<INotes[]>([]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <NoteList notes={notes} setNotes={setNotes} />
        </div>
        <div
          className="row"
          style={{
            maxWidth: "500px",
            marginTop: "35px",
            padding: "15px",
            border: "1px solid grey",
          }}
        >
          <CreateNotes setNotes={setNotes} notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
