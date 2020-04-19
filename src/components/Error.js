import React from 'react';
import useJsonFetch from '../useJsonFetch';

export default function ErrorComponent(props) {
  const { url } = props;
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <p>Error</p>
      <p>{error}</p>
    </div>
  );
}
