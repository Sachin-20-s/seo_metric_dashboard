import BusinessForm from './components/BusinessForm'
import DisplayCard from './components/DisplayCard'

function App() {
  return (
    <div className="flex flex-col justify-start p-5 items-center min-h-screen border-4">
      <BusinessForm/>
      <DisplayCard/>
    </div>
  );
}

export default App;
