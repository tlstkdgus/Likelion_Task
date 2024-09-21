import React, { useEffect, useState } from 'react';
import { fetchData } from './SecondTask.request';
import './Task.css'; 

const SecondTask = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchData(1, 10); 
      console.log('API 응답:', result);
      
      if (result && result.body && result.body.items) {
        setData(result.body.items); 
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
      <h1 className="title">환자 성별 및 의료기관 종별 의료용 마약류 처방 현황 서비스</h1>
      <ul className="data-list">
        {data.map((item, index) => (
          <li key={index} className="data-item">
            <span className="enddt">연도: {item.TRMT_YR}</span>
            <span className="location">의료기관 종류: {item.MEDC_INST_CLSFY_NM}</span>
            <span className="rainfall">처방 환자 수: {item.PRSC_PATNT_NUM}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondTask;
