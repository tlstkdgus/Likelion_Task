import React, { useEffect, useState } from 'react';
import { fetchData } from './FirstTask_requests';
import './Task.css'

const FirstTask = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchData(12, 10, 'json');
      console.log('API 응답:', result);
      
      if (result && result.response && result.response.body && result.response.body.items && result.response.body.items.item) {
        setData(result.response.body.items.item);
      } else {
        setData([]);
      }
      
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  if (!data.length) {
    return <div className="no-data">데이터가 없습니다.</div>;
  }

  return (
    <div className="container">
      <h1 className="title">조선시대 측우기 정보</h1>
      <ul className="data-list">
        {data.map((item, index) => (
          <li key={index} className="data-item">
            <span className="enddt">날짜: {item.enddt}</span>
            <span className="location">위치: {item.location}</span>
            <span className="rainfall">강수량: {item.rainfall}mm</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstTask;