import { useEffect, useState } from "react";

function useOutsideAlerter(ref) {
  const [isOutsideClicked, setIsOutsideClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutsideClicked(true);
        return;
      }
      setIsOutsideClicked(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return [isOutsideClicked];
}

export { useOutsideAlerter };
