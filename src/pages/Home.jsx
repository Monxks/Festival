import Card from '../components/Card.jsx'
import items from '../data/items.js'
import { Link } from "react-router";

function Home (){
    return(
        <section className="bg-slate-600 min-h-screen">
            <div id="banner" className="flex flex-col items-center bg-linear-to-t from-slate-600 to-slate-900 w-full h-100">
                <h2 className="text-slate-400 text-2xl font-semibold text-center mt-auto">Toda la música. Todos los festivales.</h2>
                <h1 className="text-slate-50 text-7xl font-black text-center mb-auto">Vive el directo</h1>
            </div>
            <div id="destacados">
                <h3 className="text-slate-100 text-2xl font-bold text-center m-auto mb-5">Los festivales que no te puedes perder</h3>
            <div id="festivales" className="flex justify-around content-evenly">
                <Link to="/festivales">
                <button className="text-white bg-slate-700 border-slate-700 border-10 border-r-25 border-l-25 rounded-lg hover:bg-slate-800 hover:border-slate-800 active:bg-slate-900 active:border-slate-900 font-bold text-2xl">Explora más</button>
                </Link>
            </div>
                <div id="cards" className="flex flex-row flex-wrap justify-around">
            {items.slice(0, 3).map((info) => (
                <Card key={info.id} id={info.id} imagen={info.foto} alt={info.alt} nombre={info.nombre} ubicacion={info.ubicacion} fecha={info.fecha} descripcion={info.descripcion} precio={info.precio} />))}
                </div>
            </div>
        </section>
    );
}

export default Home;