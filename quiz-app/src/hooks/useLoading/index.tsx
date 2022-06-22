import Loading from 'components/Loading';
import React, { useState } from 'react';
function useLoading() {
  const [isVisible, setIsVisible] = useState(false);

  return [isVisible ? <Loading /> : false, () => setIsVisible(false), () => setIsVisible(true)];
}

export default useLoading;
