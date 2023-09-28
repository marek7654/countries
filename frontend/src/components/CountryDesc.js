const CountryDesc = ({ data }) => {
  const population = (number) => {
    if (number > 1000000) {
      return parseFloat(number / 1000000).toFixed(2) + ' mln.';
    }
    if (number > 1000) {
      return parseFloat(number / 1000).toFixed(2) + ' tys.';
    }
    return number;
  };

  return (
    <div className='h-100 p-4 p-lg-5 text-white bg-dark rounded-3'>
      <h2 className='mb-3'>Kraj: {data.country_name}</h2>
      <p className='mb-1'>
        <b>Powierzchnia kraju:</b> {parseInt(data.area_km2)} km<sup>2</sup>
      </p>
      <p className='mb-1'>
        <b>Liczba ludności:</b> {population(data.population)}
      </p>
      <p className='mb-1'>
        <b>Stolica:</b> <span className='text-info'>{data.capital_name}</span>
      </p>
    </div>
  );
};

export default CountryDesc;
