import useAuth from "@/hooks/useAuth";
import React from "react";

const AccountMenu = () => {
  const { logout } = useAuth();


  return (
    <div className="lg:mt-2 hover:underline w-[150px] absolute top-14 right-0 flex-col border-2 border-gray-800 flex mr-2 rounded">
      <div className="flex flex-col">
        <div
          onClick={logout}
          className="text-center w-full px-1 text-white text-sm pb-5 pt-4 bg-black hover:bg-zinc-900"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
}

export default AccountMenu;
