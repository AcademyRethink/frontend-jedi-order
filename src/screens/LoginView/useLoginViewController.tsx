import { useState } from "react";

const useLoginViewController = () => {
  const [isLoading, setIsLoading] = useState(true);

  return {
    isLoading,
    setIsLoading,
  };
};

export default useLoginViewController;
