import { Link } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <h1>My Simple UI Header</h1>
      </header>

      <main style={{ padding: '1rem', minHeight: 'calc(100vh - 130px)' }}>
        <h2>Main Content Area</h2>
        <p>This is where the main content of your application will go.</p>

        <div className='mt-4 flex flex-col space-y-2'>
          <Link
            to='/templates/random-layout'
            className='text-blue-500 hover:underline'
          >
            View Template 02
          </Link>
        </div>
      </main>

      <footer
        style={{
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          textAlign: 'center',
        }}
      >
        <p> 2025 Simple UI Footer</p>
      </footer>
    </>
  );
}

export default App;
