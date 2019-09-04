export const fetchAllPokemon = () => (
  $.ajax({
    url: '/api/pokemon',
    method: 'get'
  })
);

export const fetchAPokemon = (id) => (
  $.ajax({
    url: `/api/pokemon/${id}`,
    method: 'get'
  })
);

