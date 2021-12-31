import React from "react";
import { Note } from "./Note";
import { INotes } from "../models/notes";

interface Props {
  notes: INotes[];
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>;
}

export const NoteList = ({ notes, setNotes }: Props): JSX.Element => {
  const renderNotes = () => {
    const handleDelete = (id: string) => {
      const filteredData: INotes[] = notes.filter((item) => item.id !== id);

      setNotes(filteredData);
    };

    return notes.map((note: INotes) => (
      <div className="col">
        <Note note={note} handleDelete={handleDelete} />
      </div>
    ));
  };

  return (
    <>
      <h2> NoteList </h2>
      {renderNotes()}
    </>
  );
};
