import { LuKeyboardMusic } from "react-icons/lu";
import { Link, NavLink } from "react-router";
import './header.css'

function Header() {
    return (
        <div className="sticky top-0 flex p-6 items-center bg-slate-900 w-full text-white font-bold">
            <Link to="/"><LuKeyboardMusic className="size-10"/></Link>
            <div className="ml-auto">
            <NavLink to="/" className="p-3">Inicio</NavLink>
            <NavLink to="/festivales" className="p-3">Festivales</NavLink>
            <NavLink to="/favoritos" className="p-3">Favoritos</NavLink>
            </div>
        </div>
    );
}

export default Header;