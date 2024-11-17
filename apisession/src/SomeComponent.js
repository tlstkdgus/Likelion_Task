// SomeComponent.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './requests';

const SomeComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchData(1, 10, 'json');
      if (result && result.data) {
        setData(result.data);
      } else {
        setData([]); // 응답이 없을 때 빈 배열 설정
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!data.length) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
      <h1>API 데이터</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.제작사} - {item.차명} - {item.리콜사유}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SomeComponent;