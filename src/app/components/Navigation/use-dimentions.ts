import { useEffect, useRef } from "react";

export const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    };

    // Attach resize or window listener here if needed
    updateDimensions();

    // Cleanup function if necessary

    return () => {
      // Cleanup function logic if needed
    };
  }, [ref]); // Include 'ref' in the dependency array

  return dimensions.current;
};
