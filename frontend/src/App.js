import {useEffect, useState} from 'react';

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import { fetchData } from './helpers/api-connector';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const data = await fetchData();
      setCountries(data);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  } 

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div className='container py-4'>
        <Header title='Kraje i stolice'/>
        <Jumbotron loadingStatus={loading} countries={countries} error={error} />
      </div>
    </main>
  );
}

export default App;
