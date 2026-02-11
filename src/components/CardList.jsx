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

function CardList({ id, nombre, descripcion, imagen, precio, ubicacion, fecha }) {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    setFavorito(getFavoritos().includes(id));
  }, [id]);

  const handleFav = () => {
    const nuevos = toggleFavorito(id);
    setFavorito(nuevos.includes(id));
  };

  return (
    <div className="p-5 bg-slate-800 m-4 w-11/12 rounded-2xl flex">
      <img src={imagen} className="rounded-xl w-40 mr-4" />
      <div className="flex-1 text-white">
        <p className="font-bold text-xl">{nombre}</p>
        <p className="font-light text-slate-300 text-md italic">
          {ubicacion} · {fecha}
        </p>
        <p>{cortar(descripcion, 150)}</p>
        <p className="text-xl font-normal pt-1 text-slate-400">{precio}€</p>
      </div>

      <div className="flex flex-col justify-between items-end">
        <div
          className="text-2xl cursor-pointer"
          onClick={handleFav}
        >
          {favorito ? <TbHeartFilled /> : <TbHeart />}
        </div>

        <Link to={`/detalles/${id}`}>
          <button className="text-white bg-slate-700 border-slate-700 border-7 border-r-10 border-l-10 rounded-lg hover:bg-slate-600 hover:border-slate-600 active:bg-slate-500 active:border-slate-500">
            Más información
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardList;
