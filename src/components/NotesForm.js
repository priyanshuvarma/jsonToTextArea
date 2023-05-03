import React, { useState } from 'react';

function NotesForm({ onSubmit }) {
  const [notes, setNotes] = useState('');
  const [macroscopic_description, setMacDes] = useState('');

  const handleChangeNotes = (event) => {
    setNotes(event.target.value);
  };
  const handleChangeMacDesc = (event) => {
    setMacDes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // create a new JSON object with the notes data
    const notesData = {
      clinical_history: notes,
      macroscopic_description:macroscopic_description,
    };

    // pass the JSON data to the onSubmit function
    onSubmit(notesData);

    // reset the notes input field
    setNotes('');
    setMacDes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='label-style'>
        Notes 1:
        <textarea value={notes} onChange={handleChangeNotes} />
      </label>
      <label  className='label-style'>
        Notes 2:
        <textarea value={macroscopic_description} onChange={handleChangeMacDesc} />
      </label>
      <button type="submit" style={{ float: "left", margin:"10px" }}>Save</button>
    </form>
  );
}

export default NotesForm;
