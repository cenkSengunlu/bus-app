import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import homeImage from "../images/img.jpg";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Bus App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full flex justify-center items-center">
        {/* set background img and cover the page images/img  */}
        <div>
          <Image
            src={homeImage}
            alt="Home Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
        </div>
        <div
          className="w-[40%] h-44 flex justify-center items-center flex-col text-xl text-white z-10 rounded-lg select-none"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div>Türkiye'nin En Büyük Otobüs Bileti Sitesi</div>
          <Link href="/buyTicket">
            <div className="mt-5 border-2 border-white py-2 px-4 cursor-pointer transition ease-in-out hover:bg-white hover:text-black duration-500">
              Biletini Al
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
