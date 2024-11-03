import React from "react";

const App = () => {
  return (
    <main className="relative bg-gray-800 text-white min-h-screen flex items-center justify-center">
      <h1 className="text-4xl z-10 bg-black bg-opacity-50 p-2 rounded">Hello, World!</h1>
      <canvas
        id="bg"
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>
    </main>
  );
}

export default App;