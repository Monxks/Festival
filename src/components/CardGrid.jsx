import { useState, useEffect } from "react";
import { TbHeart } from "react-icons/tb";
import { TbHeartFilled } from "react-icons/tb";
import { Link } from "react-router";

function cortar(texto, limite) {
  if (texto.length <= limite) return texto;
  return texto.slice(0, limite) + "...";
}

const getFavoritos = () => {
  const data = localStorage.getItem("favoritos");
  return data ? JSON.parse(data) : [];
};

const toggleFavorito = (id) => {
  const favs = getFavoritos();
  const existe = favs.includes(id);
  const nuevos = existe ? favs.filter((f) => f !== id) : [...favs, id];
  localStorage.setItem("favoritos", JSON.stringify(nuevos));
  return nuevos;
};

function CardGrid({ id, nombre, descripcion, imagen, precio, ubicacion, fecha }) {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    setFavorito(getFavoritos().includes(id));
  }, [id]);

  const handleFav = () => {
    const nuevos = toggleFavorito(id);
    setFavorito(nuevos.includes(id));
  };

  return (
    <div className="p-5 bg-slate-800  m-4 md:w-1/2 md:m-6 lg:w-1/3 lg:m-8 xl:w-1/4 xl:m-10 rounded-2xl">
      <img src={imagen} className="rounded-xl" />
      <div id="arriba" className="pt-4 pb-2 flex text-white">
        <div id="texto" className="flex-1">
          <p id="nombre" className="font-bold text-xl">{nombre}</p>
          <p id="detalles" className="font-light text-slate-300 text-md italic">
            {ubicacion} · {fecha}
          </p>
          <p id="descripcion">{cortar(descripcion, 100)}</p>
        </div>
        <div
          id="favorito"
          className="self-center text-2xl cursor-pointer ml-2"
          onClick={handleFav}
        >
          {favorito ? <TbHeartFilled /> : <TbHeart />}
        </div>
      </div>
      <div id="abajo" className="flex items-end ">
        <div id="izquierda" className="flex-1 text-slate-100">
          <p id="precio" className="text-xl font-normal pt-1 text-slate-400">
            {precio}€
          </p>
        </div>
        <div id="derecha">
          <Link to={`/detalles/${id}`}>
            <button className="text-white bg-slate-700 border-slate-700 border-7 border-r-10 border-l-10 rounded-lg hover:bg-slate-600 hover:border-slate-600 active:bg-slate-500 active:border-slate-500">
              Más información
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
