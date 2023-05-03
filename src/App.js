import React, { useState } from 'react';
import NotesForm from './components/NotesForm';
import Notes from './components/Notes';
import JsontoUi from './components/JsontoUi';
import './App.css'

function App() {
  const [data, setData] = useState({});

  const handleSubmit = (notesData) => {
    // update the state with the new notes data
    setData(notesData);
  };
console.log("data:",data)
  return (
    <div className="App">
      <NotesForm onSubmit={handleSubmit} />
      <Notes data={data} />
      {data.clinical_history && <JsontoUi data={data}/>}
    </div>
  );
}

export default App;
