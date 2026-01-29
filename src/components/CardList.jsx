import { useState } from "react";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { Link } from "react-router";

function cortar(texto, limite) {
    if (texto.length <= limite) return texto;
    return texto.slice(0, limite) + "...";
}

function CardList({id, nombre, descripcion, imagen, precio, ubicacion, fecha }) {
    const [favorito, setFavorito] = useState(false);
    return (
        <div id="contenedor" className="flex flex-col items-center m-5">
            <div id="card" className="w-full max-w-3xl p-4 bg-slate-800 m-4 rounded-2xl text-white flex gap-4">
                <img src={imagen} className="w-36 self-stretch object-cover rounded-xl"/>
                <div id="derecha" className="flex flex-col flex-1">
                    <div id="arriba" className="flex-1">
                        <p id="titulo" className="font-bold text-xl">{nombre}</p>
                        <p id="detalles" className="font-light text-slate-300 italic">{ubicacion} · {fecha}</p>
                        <p id="descripcion" className="pt-1">{cortar(descripcion, 120)}</p>
                    </div>
                    <div id="abajo" className="flex items-end justify-between pt-3">
                        <p id="precio" className="text-xl text-slate-400">{precio}€</p>
                        <div id="acciones" className="flex items-center gap-3">
                            <div id="favorito" className="text-2xl cursor-pointer" onClick={() => setFavorito(!favorito)}>
                                {favorito ? <TbHeartFilled /> : <TbHeart />}
                            </div>
                            <Link id="link" to={`/detalles/${id}`}>
                                <button id="boton" className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 active:bg-slate-500">Más información</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardList;
