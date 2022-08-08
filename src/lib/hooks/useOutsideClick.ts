import React from "react";

const useOutsideClick = (callback: any) => {
  const ref: any = React.useRef();

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};

export { useOutsideClick };
