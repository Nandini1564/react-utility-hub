import { useState, useEffect, useCallback } from "react";
import { generateRandomString } from "../utils/generateRandomString";

function useRandomString() {
  const [randomString, setRandomString] = useState("");

  const createString = useCallback(() => {
    setRandomString(generateRandomString(12));
  }, []);

  useEffect(() => {
    createString();
  }, [createString]);

  return { randomString, createString };
}

export default useRandomString;