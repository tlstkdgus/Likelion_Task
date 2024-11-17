const BASE_URL = process.env.REACT_APP_SECOND_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchData = async (page = 1, perPage = 10) => {
    try {
      const endpoint = '/getNarkMedcInstYrInfo'; // 엔드포인트 추가
      
      // 요청 URL을 출력
      console.log(`${BASE_URL}${endpoint}이다${page}페이지이다${perPage}퍼페이지이다`);
      
      const url = `${BASE_URL}${endpoint}?serviceKey=${API_KEY}&pageNo=${page}&numOfRows=${perPage}&type=json`;

      console.log('요청 URL:', url);
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };