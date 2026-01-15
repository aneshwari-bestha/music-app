import { useState } from 'react';
import Home from './Home';
import Welcome from './Welcome';
import Songs from './Songs'; 
import songs1 from './songs1';

function App() {
  const [page, setPage] = useState('home');
  const [userData, setUserData] = useState({ name: '', language: '' });

  return (
    <div>
      {page === 'home' && <Home onNext={() => setPage('welcome')} />}
      {page === 'welcome' && (
        <Welcome
          onNext={(name, language) => {
            setUserData({ name, language });
            setPage('songs');
          }}
        />
      )}
      {page === 'songs' && (<Songs name={userData.name} language={userData.language} />)}
      
    </div>
  );
}

export default App;
