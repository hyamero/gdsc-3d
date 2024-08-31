import CountdownTimer from "./components/CountDownTimer";
import Scene from "./components/Scene";

export default function App() {
  return (
    <div className="h-full font-inter">
      <div className="absolute left-0 top-0 h-full w-full z-20 flex justify-between flex-col items-center pt-8 md:pt-10 pb-5 pointer-events-none">
        <div className="text-center">
          <div className="text-4xl font-extrabold bg-gradient-to-b from-orange-600 to-orange-950 opacity-80 text-transparent bg-clip-text uppercase tracking-tighter rounded-2xl overflow-hidden">
            <h2>District 3</h2>
          </div>

          <h1 className="font-semibold text-neutral-600 opacity-75 text-sm">
            Google Developer Student Clubs USLS
          </h1>
        </div>
        <div>
          <CountdownTimer />
          <p className="text-center text-neutral-700 text-sm mt-2 font-semibold tracking-tight">
            Developed by{" "}
            <a
              href="https://github.com/hyamero"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer pointer-events-auto text-neutral-600"
            >
              Joseph Dale Bañares
            </a>
          </p>
        </div>
      </div>
      <Scene />
    </div>
  );
}
