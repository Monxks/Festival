import Card from "../components/Card.jsx";
import items from "../data/items.js";
import { useState } from "react";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { Link, useParams } from "react-router";

function Detalles() {
  const [favorito, setFavorito] = useState(false);
  const { id } = useParams();
  const item = items.find(i => i.id.toString() === id);
  if (!item) return <p className="text-white text-center">Evento no encontrado</p>;
  return (
    <>
      <section className="bg-linear-to-t from-slate-600 from-75% to-slate-900 min-h-screen">
        <div id="Titulo" className="mb-10">
          <h1 className="text-white text-center font-bold text-4xl">
            Detalles del evento
          </h1>
        </div>

        <div
          id="card"
          className="flex flex-col items-center md:w-1/2 lg:w-1/3 m-auto bg-slate-700 rounded-xl"
        >
          <img
            src={item.foto}
            alt={item.alt}
            className="self-stretch rounded-xl rounded-br-none rounded-bl-none object-cover"
          />

          <div id="info" className="flex items-center">
            <div id="texto" className="flex flex-col text-white m-5">
              <h2 className="font-bold text-xl">{item.nombre}</h2>
              <h3 className="font-light text-slate-300 text-md italic">
                {item.ubicacion} · {item.fecha}
              </h3>
              <p>{item.descripcion}</p>

              <div id="abajo" className="flex items-end justify-between pt-3">
                <p id="precio" className="text-xl text-slate-50">
                  {item.precio}€
                </p>

                <div id="acciones" className="flex items-center gap-3">
                  <div
                    id="favorito"
                    className="text-2xl cursor-pointer"
                    onClick={() => setFavorito(!favorito)}
                  >
                    {favorito ? <TbHeartFilled /> : <TbHeart />}
                  </div>

                  <Link id="link" to={`/detalles/${item.id}`}>
                    <button
                      id="boton"
                      className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-600 active:bg-slate-500"
                    >
                      Comprar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="destacados">
          <h3 className="text-slate-100 text-2xl font-bold text-center m-auto mt-20">
            Más festivales como este
          </h3>

          <div id="cards" className="flex flex-row flex-wrap justify-around">
            {items.slice(0, 3).map(info => (
              <Card
                key={info.id}
                id={info.id}
                imagen={info.foto}
                nombre={info.nombre}
                ubicacion={info.ubicacion}
                fecha={info.fecha}
                descripcion={info.descripcion}
                precio={info.precio}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Detalles;
