import { useState } from 'react';
function Welcome({ onNext }) {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const languages = ['telugu', 'hindi', 'english', 'tamil'];
return (
<div>
      <h2>Welcome! Feel the rhythm of South Indian melodies..!</h2>
      <input className='five'
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
  <div>
      {languages.map((lang) => (
      <div key={lang}>
        <input
              type="radio"
              id={lang}
              name="language"
              value={lang}
              checked={language === lang}
              onChange={(e) => setLanguage(e.target.value)} />
            <label htmlFor={lang}>{lang}</label>
      </div>   ))}
  </div>
      <button className="two" onClick={() => {
          if (name && language) onNext(name, language);
          else alert('Please enter name and select language');
        }}
      >
        Next
      </button>
</div>
  );
}

export default Welcome;
