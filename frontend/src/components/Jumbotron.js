const Jumbotron = () => {
  return (
    <div className='p-5 mb-4 bg-light rounded-3'>
      <div className='container-fluid py-5'>
        <h1 className='display-5 fw-bold'>Wybierz kraj</h1>
        <p className='col-md-8 fs-4 mb-4'>
          Wybierz kraj, który Cię interesuje, aby dowiedzieć się podstawowych
          informacji na jego temat oraz zlokalizować stolicę.
        </p>
        <select
          className='form-select form-select-lg'
          aria-label='.form-select-lg example'
        >
          <option selected>Znajdź kraj</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </select>
      </div>
    </div>
  );
};

export default Jumbotron;
