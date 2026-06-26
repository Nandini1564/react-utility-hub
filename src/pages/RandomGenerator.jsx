import useRandomString from "../hooks/useRandomString";

function RandomGenerator() {
  const { randomString, createString } = useRandomString();

  return (
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">
        Random String Generator
      </h1>

      <div className="bg-white shadow-lg p-6 rounded-lg">
        <p className="text-xl mb-4 break-all">
          {randomString}
        </p>

        <button
          onClick={createString}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Generate New String
        </button>
      </div>
    </div>
  );
}

export default RandomGenerator;