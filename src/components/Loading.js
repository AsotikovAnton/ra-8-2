import React from 'react';
import useJsonFetch from '../useJsonFetch';

export default function LoadingComponent(props) {
  const { url } = props;
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <p>Load</p>
      <p>{loading && 'Loading...'}</p>
    </div>
  );
}
