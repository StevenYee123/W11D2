# json.extract! guest, @guest
json.partial! 'api/guests/guest', guest: @guest
json.gifts @guest.gifts, :title, :description

# json.extract! quack, :id, :body, :author_id
# json.partial! 'api/quacks/quack', quack: @quack