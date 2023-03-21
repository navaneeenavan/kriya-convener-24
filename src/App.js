import "./styles/tailwind.output.css";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen overflow-x-hidden min-h-screen bg-slate-300 space-y-12">
      <p className="text-5xl font-bold text-center py-6 px-12">TailwindCSS-React Boilerplate</p>
      <div className="flex flex-col lg:flex-row w-full px-6 lg:px-40 space-y-6 lg:space-y-0 lg:space-x-12 font-mono">
        <div className="flex-1 px-12 py-6 border-black border-2 rounded-xl shadow-lg">
          <p className=" text-xl">
            A custom Create-react-app boilerplate with TailwindCSS and PostCSS.
          </p>
          <p className="font-semibold text-2xl">Happy Coding ! 👋</p>
        </div>
        <div className="px-12 py-6 border-black border-2 rounded-xl shadow-lg">
          <p className="text-xl ">
            Author:
            <a
              href="https://github.com/tgashwinkumar"
              className="text-blue-600 font-semibold"
            >
              tgashwinkumar
            </a>
          </p>
          <p className="text-xl">Version: 1.0.0</p>
          <p className="text-xl">
            Repository:
            <a
              href="https://github.com/tgashwinkumar/cra-template-tailwindcss-react"
              className="text-blue-600 font-semibold"
            >
              cra-template-tailwindcss-react
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto w-1/2 h-1 bg-slate-600 "></div>
      <div className="">
        <p className="text-3xl font-semibold text-center mb-4">Scripts to know</p>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 px-6 lg:px-36 py-6">
          <div className="shadow-lg border-2 border-black rounded-xl px-12 py-6 space-y-2">
            <p className="font-mono bg-slate-400 text-xl w-fit">yarn start</p>
            <p className="text-lg text-slate-600">
              Runs the app in the development mode. Open http://localhost:3000
              to view it in your browser, by default.
            </p>
          </div>
          <div className="shadow-lg border-2 border-black rounded-xl px-12 py-6 space-y-2">
            <p className="font-mono text-xl bg-slate-400 w-fit">yarn run watch-tw</p>
            <p className="text-lg text-slate-600">
              The output CSS is generated in the /src/styles folder, under the
              name 'tailwind.output.css'.
            </p>
          </div>
          <div className="shadow-lg border-2 border-black rounded-xl px-12 py-6 space-y-2">
            <p className="font-mono text-xl bg-slate-400 w-fit"> yarn run start-tw</p>
            <p className="text-lg text-slate-600">
              Developers can also run the tailwind watch (yarn run watch-tw)and
              react start (yarn start) scripts concurrently. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
