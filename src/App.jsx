import React, { useEffect, useState } from 'react';
import { Routing } from './router';

const App = () => {

  const [isWelcome, setIsWelcome] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsWelcome(false);
      clearTimeout(timeout);
    }, 3000)
  }, [])


  return (
    <div>
      {
        isWelcome ? <h1 className="welcome">Василянский Валентин</h1> : <Routing />
      }
    </div>
  )
}



export default App;


