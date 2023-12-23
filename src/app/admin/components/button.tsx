type Props = {
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export const Button = ({ children, icon }: Props) => {
  return (
    <button className="flex gap-2 items-center rounded px-2 py-1 transition ease-in-out delay-150 w-full hover:bg-violet-600 hover:text-violet-200">
      {icon}
      {children}
    </button>
  );
};
