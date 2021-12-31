import React from "react";
import { INotes } from "../models/notes";

interface Props {
  note: INotes;
  handleDelete: (id: string) => void;
}

export const Note = ({ note, handleDelete }: Props): JSX.Element => {
  return (
    <div className="card" style={{ width: "18rem", marginTop: "10px" }}>
      <div className="card-body" style={{ background: note.backgroundColor }}>
        <h5 className="card-title">{note.title}</h5>
        <h6 className="card-title">{note.createdAt}</h6>
        <p className="card-text">{note.description}</p>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
