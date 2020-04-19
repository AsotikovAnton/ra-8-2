import React from 'react';
import useJsonFetch from '../useJsonFetch';

export default function ErrorComponent(props) {
  const { url } = props;
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <p>Error</p>
      <p>{error}</p>
    </div>
  );
}
