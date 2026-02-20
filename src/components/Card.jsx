import { Link } from "react-router";

function cortar(texto, limite) {
  if (texto.length <= limite) return texto;
  return texto.slice(0, limite) + "...";
}

function Card({ id, nombre, descripcion, imagen, alt, precio, ubicacion, fecha }) {
  return (
    <div className="p-5 bg-slate-800 m-4 md:w-1/2 md:m-6 lg:w-1/3 lg:m-8 xl:w-1/4 xl:m-10 rounded-2xl">
      <img src={imagen} alt={alt} className="rounded-xl" />

      <div id="arriba" className="pt-4 pb-2 flex text-white">
        <div id="texto" className="flex-1">
          <p id="nombre" className="font-bold text-xl">
            {nombre}
          </p>
          <p id="detalles" className="font-light text-slate-300 text-md italic">
            {ubicacion} · {fecha}
          </p>
          <p id="descripcion">{cortar(descripcion, 100)}</p>
        </div>
      </div>

      <div id="abajo" className="flex items-end">
        <div id="izquierda" className="flex-1 text-slate-100">
          <p id="precio" className="text-xl font-normal pt-1 text-slate-400">
            {precio}€
          </p>
        </div>

        <div id="derecha">
          <Link to={`/detalles/${id}`}>
            <button className="text-white font-bold bg-slate-600 border-slate-600 border-7 border-r-10 border-l-10 rounded-lg hover:bg-slate-700 hover:border-slate-700 active:bg-slate-500 active:border-slate-500">
              Más información
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
