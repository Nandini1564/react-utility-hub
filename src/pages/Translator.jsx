import { useState } from "react";
import { translateText } from "../services/translatorApi";

function Translator() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleTranslate = async () => {
    if (!text) return;

    const result = await translateText(text, "te");
    setOutput(result);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-4">
        Text Translator
      </h1>

      <textarea
        className="w-full border p-3 rounded"
        rows="4"
        placeholder="Enter English text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleTranslate}
        className="bg-green-600 text-white px-5 py-2 rounded mt-4"
      >
        Translate
      </button>

      {output && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Output:</h3>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}

export default Translator;