json.pokemon do
  json.partial! 'api/pokemon/pokemon', pokemon: @pokemon
  json.extract! @pokemon, :attack, :defense, :poke_type, :moves
end
json.items @pokemon.items do |item|
  json.partial! 'api/item/item', item: item
end
