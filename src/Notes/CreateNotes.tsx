import React, { useState } from "react";
import { INotes } from "../models/notes";
import { NoteList } from "./NoteList";

interface Props {
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>;
  notes: INotes[];
}

export const CreateNotes = ({ setNotes, notes }: Props) => {
  const [formvalues, setformvalues] = useState<INotes>({
    title: "",
    description: "",
    backgroundColor: "#ffffff",
    createdAt: new Date().toString(),
    id: new Date().toString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    console.log("handlechange", value);

    setformvalues({ ...formvalues, [name]: value });
    console.log("formvalues", formvalues);
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.currentTarget;
    setformvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotes([...notes, formvalues]);
    // notes.push(formvalues);
  };

  return (
    <div>
      <h4>Create Notes</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formvalues.title}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            value={formvalues.description}
            className="form-control"
            id="exampleInputPassword1"
            name="description"
            onChange={(e) => handleChangeTextArea(e)}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="colorInput">{`Select Color  `} </label>
          <input
            type="color"
            id="colorInput"
            name="backgroundColor"
            title="Choose your color"
            onChange={handleChange}
            value={formvalues.backgroundColor}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Notes
        </button>
      </form>
    </div>
  );
};
