"use client";

import LinkButton from "@/components/shared/LinkButton";
import Link from "next/link";
import {
  MdOutlineEmail,
  MdLockOutline,
  MdOutlineDateRange,
} from "react-icons/md";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    console.log(`${email} \n ${password}`)
    setEmail("")
    setPassword("")
  }

  return (
    <main className="mainWrapper items-center">
      <section className="px-10 pb-20 min-h-screen flex flex-[0.6] justify-end items-center max-md:hidden border-r border-deepBlue">
        <div className="flex flex-col">
          <p className="font-black text-6xl tracking-tight text-lightBlue text-right max-lg:text-5xl">
            Create Account
          </p>
          <p className="text-lg font-semibold text-lightGray mt-2 ml-9 text-right">
            Enter your username and password
          </p>
        </div>
      </section>

      <section className="flex flex-1 px-10">
        <div className="flex flex-col flex-[0.75] max-md:flex-1 gap-3">
          <div>
            <p className="text-lightGray mb-2 text-sm font-semibold">
              Hosting provider
            </p>
            <div>input</div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-md:w-full gap-2"
          >
            <div>
              <div className="flex flex-col gap-2">
                <p className="text-lightGray mb-2 text-sm font-semibold">
                  Email
                </p>
                <div className="inputDiv">
                  <div className="text-base">
                    <MdOutlineEmail />
                  </div>
                  <input
                    placeholder="Enter your email address"
                    className="formInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className="text-lightGray mb-2 text-sm font-semibold">
                  Password
                </p>
                <div className="inputDiv">
                  <div className="text-base">
                    <MdLockOutline />
                  </div>
                  <input
                    placeholder="Choose your password"
                    className="formInput"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="text-lightGray mb-2 text-sm font-semibold">
                  Your birth date
                </p>
                <div className="inputDiv">
                  <div className="text-base">
                    <MdOutlineDateRange />
                  </div>
                  <input
                    type="date"
                    className="formInput"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-lightGray">
              By creating an account you agree to the{" "}
              <Link href="#" className="link">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="link">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex pt-3 items-center justify-between">
              <LinkButton
                title="Back"
                color="gray"
                href="/"
                customClass="px-5 py-3"
              />
              <button className="submitButton" type="submit">
                Next
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
