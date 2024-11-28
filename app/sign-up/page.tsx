import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Link from "next/link";
import { MdOutlineEmail, MdLockOutline, MdOutlineDateRange  } from "react-icons/md";


const SignUp = () => {
  return (
    <main className="mainWrapper items-center">
      <section className="px-10 pb-20 min-h-screen flex flex-[0.6] justify-end items-center max-md:hidden border-r border-[#2e4052]">
        <div className="flex flex-col">
          <p className="font-black text-6xl tracking-tight text-[#208bfe] text-right max-lg:text-5xl">
            Create Account
          </p>
          <p className="text-lg font-semibold text-[#aebbc9] mt-2 ml-9 text-right">
            Enter your username and password
          </p>
        </div>
      </section>
      <section className="flex flex-1 px-10">
        <div className="flex flex-col flex-[0.75] max-md:flex-1 gap-3">
          <div>
            <p className="text-[#aebbc9] mb-2 text-sm font-semibold">
              Hosting provider
            </p>
            <div>input</div>
          </div>
          <div>
            <p className="text-[#aebbc9] mb-2 text-sm font-semibold">Email</p>
            <Input icon={<MdOutlineEmail />} placeholder="Enter your email address" type="email"/>
          </div>
          <div>
            <p className="text-[#aebbc9] mb-2 text-sm font-semibold">
              Password
            </p>
            <Input icon={<MdLockOutline />} placeholder="Choose your password" type="password"/>
          </div>
          <div>
            <p className="text-[#aebbc9] mb-2 text-sm font-semibold">
              Your birth date
            </p>
            <Input icon={<MdOutlineDateRange />} type="date" customClass="date-input"/>
          </div>
          <p className="text-sm text-[#aebbc9]">
            By creating an account you agree to the{" "}
            <Link href="#" className="link">Terms of Service</Link> and{" "}
            <Link href="#" className="link">Privacy Policy</Link>.
          </p>
          <div className="flex pt-7 pb-4 items-center justify-between">
            <Button title="Back" color="gray" href="/" customClass="px-5 py-3"/>
            <Button title="Next" color="blue" href="/feed" customClass="px-5 py-3"/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
