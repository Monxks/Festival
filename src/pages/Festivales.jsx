import { useState } from "react";
import CardList from "../components/CardList.jsx";
import CardGrid from "../components/CardGrid.jsx";
import items from "../data/items.js";

const getFavoritos = () => {
  const data = localStorage.getItem("favoritos");
  return data ? JSON.parse(data) : [];
};

function Festivales() {
  const [filtro, setFiltro] = useState("todos");
  const [vista, setVista] = useState("grid");
  const [orden, setOrden] = useState("recomendados");
  const [soloFavs, setSoloFavs] = useState(false);
  const favoritos = getFavoritos();
  const itemsFiltrados = items.filter((item) => {
    const coincideUbicacion =
      filtro === "todos" || item.ubicacion.includes(filtro);
    const coincideFav = soloFavs ? favoritos.includes(item.id) : true;
    return coincideUbicacion && coincideFav;
  });
  const itemsOrdenados = [...itemsFiltrados].sort((a, b) => {
    if (orden === "menor") return a.precio - b.precio;
    if (orden === "mayor") return b.precio - a.precio;
    if (orden === "az") return a.nombre.localeCompare(b.nombre);
    if (orden === "za") return b.nombre.localeCompare(a.nombre);
    return 0;
  });
  
  return (
    <section className="bg-linear-to-t from-slate-600 from-75% to-slate-900 min-h-screen">
      <div id="arriba" className="flex w-full h-20 mb-5">
        <h1 id="titulo" className="flex-1 font-bold text-3xl text-white m-auto ml-15">Los imprescindibles del año.</h1>
        <div id="separardor" className="w-0.5 bg-slate-1'0 h-1/2 self-center m-4"></div>
        <div className="flex flex-wrap justify-end items-center gap-3 m-auto mr-10">
          <div className="flex items-center bg-slate-600 rounded-lg overflow-hidden">
            <button onClick={() => setVista("grid")} className={`p-2 text-white font-semibold hover:bg-slate-700 ${ vista === "grid" ? "bg-slate-700" : ""}`}>Grid</button>
            <button onClick={() => setVista("list")} className={`p-2 text-white font-semibold hover:bg-slate-700 ${ vista === "list" ? "bg-slate-700" : "" }`}>Lista</button>
          </div>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)} className="bg-slate-600 text-white font-semibold p-2.5 rounded-lg hover:bg-slate-700">
            <option value="todos">Todas las ubicaciones</option>
            <option value="España">España</option>
            <option value="Alemania">Alemania</option>
            <option value="Reino Unido">Reino Unido</option>
          </select>
          <select value={orden} onChange={(e) => setOrden(e.target.value)} className="bg-slate-600 text-white font-semibold p-2.5 rounded-lg hover:bg-slate-700">
            <option value="recomendados">Recomendados</option>
            <option value="menor">Precio: menor a mayor</option>
            <option value="mayor">Precio: mayor a menor</option>
            <option value="az">Nombre: A → Z</option>
            <option value="za">Nombre: Z → A</option>
          </select>
          <button onClick={() => setSoloFavs(!soloFavs)} className={`p-2 text-white font-semibold rounded-lg ${ soloFavs ? "bg-slate-700" : "bg-slate-600 hover:bg-slate-700"}`}> {soloFavs ? "Mostrar todos" : "Solo favoritos"} </button>
        </div>
      </div>
      <div id="cards" className={ vista === "list" ? "flex flex-col items-center" : "flex flex-wrap justify-around content-evenly"}> {itemsOrdenados.map((info) => vista === "grid" ? ( <CardGrid key={info.id} id={info.id} imagen={info.foto} alt={info.alt} nombre={info.nombre} ubicacion={info.ubicacion} fecha={info.fecha} descripcion={info.descripcion} precio={info.precio}/>) : (<CardList key={info.id} id={info.id} imagen={info.foto} alt={info.alt} nombre={info.nombre} ubicacion={info.ubicacion} fecha={info.fecha} descripcion={info.descripcion} precio={info.precio} />))}</div>
    </section>
  );
}

export default Festivales;
