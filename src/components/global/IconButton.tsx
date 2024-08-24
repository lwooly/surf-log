import Image from "next/image";

import RemoveIcon from "@/images/icons/remove.svg";

type IconButtonProps = {
  handleClick: () => void;
};

function IconButton({ handleClick }: IconButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    >
      <Image src={RemoveIcon} alt="Remove activity" />
    </button>
  );
}

export default IconButton;
