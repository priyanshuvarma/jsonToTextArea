import React, { useState, useEffect } from 'react';

function JsontoUi({ data }) {
    const [clinicalHistory, setClinicalHistory] = useState('');
    const [macroscopicDescription, setMacroscopicDescription] = useState('');

    useEffect(() => {
        const jsonData=data
        setClinicalHistory(jsonData.clinical_history);
        setMacroscopicDescription(jsonData.macroscopic_description);
      }, []);

  return (
    
         <div className="jsontoui">
            {/* <p>clinical History</p> */}
            <label className='label-style'>
            clinical History:
      <textarea
        value={clinicalHistory}
        // value={clinicalHistory.replace(/\n/g, '\n')}
        onChange={(e) => setClinicalHistory(e.target.value)}
        style={{width:"fit-content", marginBottom:"20px"}}
      />
      </label>
            {/* <p>macroscopic Description</p> */}
        <label className='label-style'>
        macroscopic Description:
      <textarea
        value={macroscopicDescription.replace(/\n/g, '\n')}
        onChange={(e) => setMacroscopicDescription(e.target.value)}
        style={{width:"fit-content"}}

      />
      </label>
    </div>
  );
}

export default JsontoUi;
