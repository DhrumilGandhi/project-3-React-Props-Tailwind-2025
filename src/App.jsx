import './App.css';
import Card from './components/Card';

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 mb-4'>Tailwind Test</h1>
      <Card username="Test User" btnText="Click Me"/>
      <Card btnText="Visit Me"/>
    </>
  )
}

export default App
