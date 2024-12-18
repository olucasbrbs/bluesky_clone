"use client";

import LinkButton from "@/components/shared/LinkButton";
import React from "react";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";

const SignIn = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Funcionou");
  };

  return (
    <main className="mainWrapper items-center">
      <section className="px-10 pb-20 min-h-screen flex flex-[0.5] justify-end items-center max-md:hidden border-r border-deepBlue">
        <div className="flex flex-col">
          <p className="font-black text-6xl tracking-tight text-lightBlue text-right max-lg:text-5xl">
            Sign in
          </p>
          <p className="text-lg font-semibold text-lightGray mt-2 ml-9 text-right">
            Enter your username and password
          </p>
        </div>
      </section>
      <section className="flex flex-1 px-10">
        <div className="flex flex-col flex-[0.75] max-md:flex-1">
          <div>
            <p className="text-lightGray mb-2 text-sm font-semibold">
              Hosting provider
            </p>
            <p>input</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-2/3 max-md:w-full">
            <div>
              <p className="text-lightGray mb-2 text-sm font-semibold">
                Account
              </p>
              <div className="flex flex-col gap-2">
                <div className="inputDiv">
                  <div className="text-base"><MdAlternateEmail /></div>
                  <input
                    placeholder="Username or email address"
                    className="formInput"
                  />
                </div>
                <div className="inputDiv">
                  <div className="text-base"><MdLockOutline /></div>
                  <input placeholder="Password" className="formInput" />
                </div>
              </div>
            </div>
            <div className="flex pt-3 items-center justify-between">
              <LinkButton
                title="Back"
                color="gray"
                href="/"
                customClass="px-5 py-3"
              />
              <button className="submitButton" type="submit">Next</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
