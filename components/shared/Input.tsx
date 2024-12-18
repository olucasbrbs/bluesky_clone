interface InputProps {
  icon: JSX.Element;
  placeholder?: string;
  type: string;
  customClass?: string;
}

const Input = ({ icon, placeholder, type, customClass }: InputProps) => {
  return (
    <div className="border-2 border-transparent flex gap-2 items-center text-darkGray bg-mediumGrayishBlue rounded-lg px-3 py-1 hover:border-deepBlue hover:text-white">
      <div className="text-base">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`my-[2px] bg-transparent border-none w-full outline-none text-darkGray placeholder:text-darkGray focus:text-white ${customClass}`}
      />
    </div>
  );
};

export default Input;
