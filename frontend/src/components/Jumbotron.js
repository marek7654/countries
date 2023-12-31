const Jumbotron = (props) => {
  const { loading, countries, error, onSelectChange } = props;

  const spinner = (
    <div className='spinner-border text-primary' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  );

  const changeHandler = (event) => {
    onSelectChange(event.target.value);
  };

  const select = (
    <select
      className='form-select form-select-lg'
      aria-label='countries list'
      onChange={changeHandler}
    >
      <option defaultValue='0'>Znajdź kraj</option>
      {countries && countries.map((country) => {
        return (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        );
      })}
    </select>
  );

  return (
    <div className='p-4 p-lg-5 mb-4 bg-light rounded-3'>
      <div className='container-fluid py-5'>
        <h1 className='display-5 fw-bold'>Wybierz kraj</h1>
        <p className='col-md-8 fs-4 mb-4'>
          Wybierz kraj, który Cię interesuje, aby dowiedzieć się podstawowych
          informacji na jego temat oraz zlokalizować stolicę.
        </p>
        {loading && spinner}
        {!loading && select}
        {error && <p>Błąd: {error.message}</p>}
      </div>
    </div>
  );
};

export default Jumbotron;
