import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  useEffect(()=>{
    // @ts-ignore
    // @ts-ignore
    window.ga?.('send', {
      hitType: 'timing',
      timingCategory: 'React Rendered',
      timingVar: 'load',
      timingValue: performance.now()
    });
    const timer = setTimeout(() => {
      // @ts-ignore
      window.ga?.('send', {
        hitType: 'timing',
        timingCategory: 'JS Dependencies',
        timingVar: 'load',
        timingValue: 3549
      });

      // @ts-ignore
      window.ga?.('send', {
        hitType: 'timing',
        timingCategory: 'Random network call',
        timingVar: 'load',
        timingValue: Math.floor(Math.random()*1000+1000)
      });
    }, 1000);
    return () => clearTimeout(timer);

    // @ts-ignore
  }, [window.ga])
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thanks for visiting! This should be all set now.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  );
}

export default App;
