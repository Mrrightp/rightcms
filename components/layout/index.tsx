import LeftSideBarComponent from "../sidebar/leftSideBarComponent";
import RightSideBarComponent from "../sidebar/rightSideBarComponent";
import MainHeader from "./mainHeader";

export default function Layout({ children }) {
  return (
    <>
      <div className="hidden md:flex px-2">
        <LeftSideBarComponent />
        <main className="w-full ">{children}</main>
        <RightSideBarComponent />
      </div>
      <div className="flex px-2 flex-col md:hidden ">
        <MainHeader />
        <main className="w-full ">{children}</main>
      </div>
    </>
  );
}
