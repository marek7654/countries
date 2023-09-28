const ENDPOINT = 'http://localhost:8000/api/countries';

export const fetchData = async (id = false) => {
  const url = id ? `${ENDPOINT}/${id}` : ENDPOINT;
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Nieudane zapytanie do API. Kod statusu: ${response.status}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Wystąpił błąd podczas pobierania danych z API:', error);
  }
};
