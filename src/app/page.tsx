import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
<div className="m-7">
  <h1 className="bg-emerald-600 text-white font-extrabold text-4x1 p-3 flex item-center justify-center">class assigment</h1>
  <br />
  <h1 className="bg-emerald-700 text-white font-extrabold text-4x1 p-3 flex item-center justify-center">class 2</h1>
  <h2 className="text-emerald-900"> I create the component</h2>
  
<Header/>
<About/>
   </div>
  );
}  