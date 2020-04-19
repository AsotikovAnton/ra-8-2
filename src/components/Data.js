import React from 'react';
import useJsonFetch from '../useJsonFetch';

export default function DataComponent(props) {
  const { url } = props;
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <p>Data</p>
      <p>{data}</p>
    </div>
  );
}
