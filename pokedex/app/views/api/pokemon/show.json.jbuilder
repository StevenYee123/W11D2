json.pokemon do 
    json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url
end