
puts "🌱 Seeding data..."

names = ["Vincent", "Pablo", "Paul", "Albrecht", "Andy", "Edgar", "Diego", "Edvard", "Claude", "Francis", "George", "Gustav", "Jackson", "Jasper", "Henri", "Rosa", "Mark", "Marcel", "Pierre", "Piet", "Ray", "Roy", "Salvador", "Wassily", "Barbara", "Diane", "Anne", "Dorothea", "Eva", "Frida", "Georgia", "Sally", "Jan", "Yayoi", "Jeanette"]
passwords = ["cat", "bat", "hat", "mat", "rat", "flat", "gnat", "wat", "tat", "vat", "pat", "sat", "dat"]
cities = ['Oakland', 'Los Angeles', 'Chicago', 'Denver', 'Berkeley', 'Austin', 'Sante Fe', 'New York', 'St. Louis', 'Miami', 'Portland', 'Seattle', 'Omaha']


User.create(username:'JSpress', first_name:'Jarad', last_name:'Solomon', password_digest: passwords.sample, email:'jaradsolomon@gmail.com', bio:'Interdisciplinary design media artist based in Logan Square Chicago.', street_address:'2239 N Sawyer Ave', city:'Chicago', state:'IL', zip:'60647', website:'www.jaradsolomon.com' )
User.create(username:'HalfFull', first_name:'Jeanette', last_name:'Tokarz', password_digest: passwords.sample, email:'tokarzjeanette@gmail.com', bio:'Maker of slug mugs and wormies.', street_address:'1629 N Sawyer Ave', city:'Chicago', state:'IL', zip:'60647', website:'www.etsy.com/shop/JeanetteTokarz' )
User.create(username:'DannySpaghetti', first_name:'Danny', last_name:'Alegretti', password_digest: passwords.sample, email:'allegrettiphoto@gmail.com', bio:'Danny Allegretti (pronounced like spaghetti) is a Chicago-based artist and designer. You can find him on the West-side of Chicago 8 times out of 10 — the other 2 times, he is most likely camping in the Southwest.', street_address:'530 W Cordova Rd', city:'Sante Fe', state:'NM', zip:'87505', website:'www.dannyallegretti.com' )

Artwork.create(title: 'worm #1', artist: 'Jeanette Tokarz', year: 2019, description: 'the first worm I ever made!', size:'8.5 x 11', tags:'illustration, paper, ink', available: true, user_id: 2, url: 'https://i.etsystatic.com/19062942/r/il/c9db32/3324699900/il_1588xN.3324699900_ovzu.jpg')
Artwork.create(title: 'In-Flight', artist: 'Jarad Solomon', year: 2018, description: 'art book made of algorythmically generated airline safety cards.', size:'8 x 10', tags:'risograph, paper, zine', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/d534fa/2261803069/il_1588xN.2261803069_p7io.jpg')
Artwork.create(title: 'Burn Your Art', artist: 'Danny Alegretti', year: 2020, description: 'match box for burning all that art.', size:'1.25 x 2.5', tags:'cardboard, print', available: true, user_id: 3, url: 'https://images.squarespace-cdn.com/content/v1/5e0a5c3b1d3864051d629ab1/30cd0c8e-32ca-4b86-852f-49f06810eaab/matches2.gif?format=750w')


# Trade.create()













puts "🌱 Done seeding!"