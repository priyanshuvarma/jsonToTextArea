import React from 'react';

function Notes({ data }) {
  return (
    <div>
      <h2>Notes in Json format</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Notes;
