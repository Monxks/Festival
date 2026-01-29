import { Link } from "react-router";

function NotFound() {
    return (
        <>
        <div id="banner" className="flex flex-col items-center bg-linear-to-t from-slate-600 to-slate-900 w-full min-h-screen">
            <h2 className="text-slate-500 text-2xl font-semibold text-center mt-70">Ups. Algo salió mal.</h2>
            <h1 className="text-slate-50 text-5xl font-black text-center">Página no encontrada</h1>
            <h3 className="text-slate-400 text-lg font-semibold text-center mt-5">Es posible que la página que estás buscando haya sido eliminada,<br />haya cambiado de nombre o no esté disponible temporalmente.</h3>
                <Link to="/">
                <button className="text-white bg-slate-800 border-slate-800 border-10 border-r-10 border-l-15 rounded-lg hover:bg-slate-700 hover:border-slate-700 active:bg-slate-600 active:border-slate-600 font-bold text-xl mt-5">Vuelve al inicio</button>
                </Link>
        </div>
        </>
    )
}

export default NotFound