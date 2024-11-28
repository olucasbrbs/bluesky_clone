import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import React from "react";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";

const SignIn = () => {
  return (
    <main className="mainWrapper items-center">
      <section className="px-10 pb-20 min-h-screen flex flex-[0.5] justify-end items-center max-md:hidden border-r border-[#2e4052]">
        <div className="flex flex-col">
          <p className="font-black text-6xl tracking-tight text-[#208bfe] text-right max-lg:text-5xl">
            Sign in
          </p>
          <p className="text-lg font-semibold text-[#aebbc9] mt-2 ml-9 text-right">
            Enter your username and password
          </p>
        </div>
      </section>
      <section className="flex flex-1 px-10">
        <div className="flex flex-col flex-[0.75] max-md:flex-1">
          <div>
            <p className="text-[#aebbc9] mb-2 text-sm font-semibold">
              Hosting provider
            </p>
            <p>input</p>
          </div>
          <div>
            <p className="text-[#aebbc9] mb-2 text-sm font-semibold">Account</p>
            <div className="flex flex-col gap-2">
              <Input
                icon={<MdAlternateEmail />}
                placeholder="Username or email address"
                type="email"
              />
              <Input
                icon={<MdLockOutline />}
                placeholder="Password"
                type="password"
              />
            </div>
          </div>
          <div className="flex pt-3 items-center justify-between">
            <Button
              title="Back"
              color="gray"
              href="/"
              customClass="px-5 py-3"
            />
            <Button
              title="Next"
              color="blue"
              href="/feed"
              customClass="px-5 py-3"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
