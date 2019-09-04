@pokemon.each do |pokemon|
  json.set! pokemon.id do
    # json.set! :id, pokemon.id
    # json.set! :name, pokemon.name
    # json.set! :image_url, pokemon.image_url
    json.extract! pokemon, :id, :name
    json.image_url asset_path(pokemon.image_url)
  end
end