import BackIcon from "../icons/BackIcon";
const NavButton = ({backStep}) => {
    return (
        <nav className="pb-10">
            <button onClick={backStep} className=" rounded-md p-2 hover:bg-slate-100 flex flex-row items-center justify-center text-center"> <BackIcon/> <p className="pl-1">Back</p></button>
        </nav>
    )
}

export default NavButton;