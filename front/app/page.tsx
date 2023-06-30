import Image from "next/image";
import Image1 from "../public/uic_2012 (1).jpg";
import Menu from "./components/Menu/Menu";
import Table from "./components/Table/Table";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-500 content-center">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={Image1}
            alt="eiffel tower"
            className="max-w-sm rounded-lg shadow-2xl"
            width="4368"
            height="2912"
          />
          <div>
            <h1 className="text-5xl font-bold">Bienvenue !</h1>
            <p className="py-6">
              Voici la nouvelle interface pour les formulaires de demande.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
