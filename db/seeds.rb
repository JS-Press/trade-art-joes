
puts "🌱 Seeding data..."

names = ["Vincent", "Pablo", "Paul", "Albrecht", "Andy", "Edgar", "Diego", "Edvard", "Claude", "Francis", "George", "Gustav", "Jackson", "Jasper", "Henri", "Rosa", "Mark", "Marcel", "Pierre", "Piet", "Ray", "Roy", "Salvador", "Wassily", "Barbara", "Diane", "Anne", "Dorothea", "Eva", "Frida", "Georgia", "Sally", "Jan", "Yayoi", "Jeanette"]
passwords = ["cat", "bat", "hat", "mat", "rat", "flat", "gnat", "wat", "tat", "vat", "pat", "sat", "dat"]
cities = ['Oakland', 'Los Angeles', 'Chicago', 'Denver', 'Berkeley', 'Austin', 'Sante Fe', 'New York', 'St. Louis', 'Miami', 'Portland', 'Seattle', 'Omaha']


User.create(username:'JaradS', first_name:'Jarad', last_name:'Solomon', password_digest: passwords.sample, email:'jaradsolomon@gmail.com', bio:'Interdisciplinary design media artist based in Logan Square Chicago.', street_address:'2239 N Sawyer Ave', city:'Chicago', state:'IL', zip:'60647', website:'jaradsolomon.com' )
User.create(username:'HalfFull', first_name:'Jeanette', last_name:'Tokarz', password_digest: passwords.sample, email:'tokarzjeanette@gmail.com', bio:'Maker of slug mugs and wormies.', street_address:'1629 N Sawyer Ave', city:'Chicago', state:'IL', zip:'60647', website:'jeanettetokarz.com' )

# Artwork.create()

# Trade.create()













puts "🌱 Done seeding!"