import { useEffect, useState } from 'react';

import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import { fetchData } from './helpers/api-connector';
import Footer from './components/Footer';
import CountryDesc from './components/CountryDesc';
import MapWrapper from './components/MapWrapper';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null);

  const getData = async (id = false) => {
    try {
      const data = await fetchData(id);
      if (id) {
        setCountryDetails(data);
      } else {
        setCountries(data);
      }
    } catch (err) {
      setError(err);
    } finally {
      if (!id) setLoading(false);
    }
  };

  const selectHandler = (countryId) => {
    getData(countryId);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div className='container py-4'>
        <Header title='Kraje i stolice' />
        <Jumbotron
          loadingStatus={loading}
          countries={countries}
          error={error}
          onSelectChange={selectHandler}
        />
        <div className='row align-items-md-stretch'>
          <div className='col-md-6'>
            {countryDetails && <CountryDesc data={countryDetails} />}
          </div>
          <div className='col-md-6'>
            {countryDetails && (
              <MapWrapper
                coordinates={[
                  countryDetails.latitude,
                  countryDetails.longitude,
                ]}
                zoom='7'
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
