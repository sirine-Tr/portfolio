import React from 'react';
import './languages.css'; 

const Languages = () => {
  return (
    <div id="languages">
    <h1 className='section-title'>Languages</h1>
    <div className="languages">
      
      <div className="language-column">
        <h3 className="language-title">Arabic (Native)</h3>
      </div>
      <div className="language-column">
        <h3 className="language-title">English (B2)</h3>
      </div>
      <div className="language-column">
        <h3 className="language-title">French (B2)</h3>
      </div>
    </div>
    </div>
  );
};

export default Languages;
