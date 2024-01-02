import React, { useEffect, useState } from 'react';

import './styles.css';

const url = 'https://jsonplaceholder.typicode.com/';

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url + 'users');
      const newDate = await response.json();

      setData(newDate);
      setLoading(false);
    };

    if (!data.length) {
      setLoading(true);
      fetchData();
    }
  }, [data]);

  return (
    <div>
      <section>
        <ul>
          {!data && loading ? (
            <li>loading...</li>
          ) : (
            data.map(item => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.email}</p>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};
