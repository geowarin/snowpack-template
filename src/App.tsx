import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import logo from './logo.png';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-blue-100">
      <div className="flex-1 p-4 mx-auto">
        <h1 className="hero">
          Snowpack + Preact + Tailwind
        </h1>

        <div className="flex flex-col items-center p-4">
          <div>
            <img className="w-56 md:w-40" src={logo} alt="preact" />
          </div>
          <p>
            Edit{' '}
            <code className="bg-gradient-to-r bg-red-600 bg-clip-text text-transparent">
              src/App.jsx
            </code>{' '}
            and save to reload.
          </p>
          <p>
            Page has been open for <code>{count}</code> seconds.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <button class="btn">My Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
