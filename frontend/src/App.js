import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <main>
      <div className='container py-4'>
        <Header title='Kraje i stolice'/>
        <Jumbotron/>
      </div>
    </main>
  );
}

export default App;
