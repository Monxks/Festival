export const getFavoritos = () => {
  const data = localStorage.getItem("favoritos");
  return data ? JSON.parse(data) : [];
};

export const toggleFavorito = (id) => {
  const favs = getFavoritos();
  const existe = favs.includes(id);

  const nuevos = existe ? favs.filter((f) => f !== id) : [...favs, id];

  localStorage.setItem("favoritos", JSON.stringify(nuevos));
  return nuevos;
};
