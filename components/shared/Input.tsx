interface InputProps {
  icon: JSX.Element;
  placeholder?: string;
  type: string;
  customClass?: string;
}

const Input = ({ icon, placeholder, type, customClass }: InputProps) => {
  return (
    <div className="border-2 border-transparent flex gap-2 items-center text-[#6d8197] bg-[#1e2936] rounded-lg px-3 py-1 hover:border-[#2e4052] hover:text-[#f1f3f5]">
      <div className="text-base">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`my-[2px] bg-transparent border-none w-full outline-none text-[#6d8197] placeholder:text-[#6d8197] ${customClass}`}
      />
    </div>
  );
};

export default Input;
