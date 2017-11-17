json.pokemon do
  # json.partial! 'api/pokemon/pokemon', pokemon: @pokemon
  # json.extract! @pokemon, :attack, :defense, :poke_type, :moves
  json.extract! @pokemon, :attack, :defense, :poke_type, :moves, :id, :name
  json.image_url asset_path(@pokemon.image_url)

end
json.items @pokemon.items do |item|
  json.partial! 'api/item/item', item: item
end
