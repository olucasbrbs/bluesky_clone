import Image from "next/image";
import React from "react";
import { homeFooterLinks } from "@/constants";
import Link from "next/link";
import Button from "@/components/shared/Button";

const Home = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-darkGrayishBlue justify-center">
      <Link href='/feed' className="absolute flex items-center justify-center bg-white rounded-full top-5 right-10 p-3 w-8 h-8 font-bold max-sm:right-5">
      X
      </Link>
      <section className="flex flex-col items-center gap-10 pb-10 flex-1 justify-center">
        <div className="flex flex-col items-center">
          <Image
            alt="Logo"
            src="/assets/bluesky_logo.png"
            width={92}
            height={81}
          />
          <div className="flex flex-col items-center">
            <p className="text-white text-5xl pt-10 pb-2 font-bold tracking-tighter">
              Bluesky
            </p>
            <p className="text-lightGray font-bold">What&apos;s up?</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 px-5 pb-6">
          <Button title="Create account" color="blue" href="/sign-up" fullWidth/>
          <Button title="Sign in" color="gray" href="/sign-in" fullWidth/>
        </div>
      </section>
      <footer className="absolute bottom-0 p-5 border-t border-t-coalBlue flex flex-1 gap-60 items-center flex-wrap justify-between max-sm:gap-20 max-[400px]:gap-10">
        <div className="flex gap-5">
          {homeFooterLinks.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="text-lightBlue border-b border-b-transparent transition hover:border-b-lightBlue text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          Dropdown
        </div>
      </footer>
    </main>
  );
};

export default Home;