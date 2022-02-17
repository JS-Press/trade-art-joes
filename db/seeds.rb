
puts "🌱 Seeding data..."

names = ["Vincent", "Pablo", "Paul", "Albrecht", "Andy", "Edgar", "Diego", "Edvard", "Claude", "Francis", "George", "Gustav", "Jackson", "Jasper", "Henri", "Rosa", "Mark", "Marcel", "Pierre", "Piet", "Ray", "Roy", "Salvador", "Wassily", "Barbara", "Diane", "Anne", "Dorothea", "Eva", "Frida", "Georgia", "Sally", "Jan", "Yayoi", "Jeanette"]
passwords = ["cat", "bat", "hat", "mat", "rat", "flat", "gnat", "wat", "tat", "vat", "pat", "sat", "dat"]
cities = ['Oakland', 'Los Angeles', 'Chicago', 'Denver', 'Berkeley', 'Austin', 'Sante Fe', 'New York', 'St. Louis', 'Miami', 'Portland', 'Seattle', 'Omaha']


User.create(username:'JSpress', first_name:'Jarad', last_name:'Solomon', password_digest: passwords.sample, email:'jaradsolomon@gmail.com', 
    bio:'Interdisciplinary design media artist based in Logan Square Chicago.', street_address:'2239 N Sawyer Ave', city:'Chicago', state:'IL', zip:'60647', website:'www.jaradsolomon.com' )
User.create(username:'HalfFull', first_name:'Jeanette', last_name:'Tokarz', password_digest: passwords.sample, email:'tokarzjeanette@gmail.com', 
    bio:'Self-taught folk-artist focused in ceramics and linocut prints.', street_address:'1629 N Sawyer Ave', city:'Chicago', state:'IL', zip:'60647', website:'www.etsy.com/shop/JeanetteTokarz' )
User.create(username:'DannySpaghetti', first_name:'Danny', last_name:'Alegretti', password_digest: passwords.sample, email:'allegrettiphoto@gmail.com', 
    bio:'Danny Allegretti (pronounced like spaghetti) is a Chicago-based artist and designer.', street_address:'530 W Cordova Rd', city:'Sante Fe', state:'NM', zip:'87505', website:'www.dannyallegretti.com' )
User.create(username:'LevDesign', first_name:'Daniel', last_name:'Coleman', password_digest: passwords.sample, email:'D.levcoleman@gmail.com', 
    bio:"Hi, I'm Daniel, a multidisciplinary designer from San Francisco.", street_address:'1600 Vine St', city:'Los Angeles', state:'CA', zip:'90028', website:'www.designlev.com' )
User.create(username:'Jamesthe8th', first_name:'James', last_name:'Dawson', password_digest: passwords.sample, email:'jamesthe8th@gmail.com', 
    bio:"Singer songwriter, and artist from the bay area.", street_address:'3909 Hillsboro Pike', city:'Nashville', state:'TN', zip:'37215', website:'www.Jamesthe8th.com' )




Artwork.create(title: 'In-Flight', artist: 'Jarad Solomon', year: 2018, description: 'art book made of algorythmically generated airline safety cards.', 
    size:'8 x 10', tags:'risograph, paper, zine', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/d534fa/2261803069/il_1588xN.2261803069_p7io.jpg')
Artwork.create(title: 'Flower Post Stamp Garden #4', artist: 'Jarad Solomon', year: 2017, description: 'augmented reality risograph poster made from flower post stamps.', 
    size:'11 x 17', tags:'risograph, paper, augmented reality, found object, collage, pattern making', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/d24f9f/2261903475/il_1588xN.2261903475_fmso.jpg')
Artwork.create(title: 'garden generative drawing series #1', artist: 'Jarad Solomon', year: 2016, description: 'plant doodle with top part drawn by a computer analyzing the bottom part.', 
    size:'10 x 14', tags:'risograph, paper, illustration, computer generated, digital', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/02fa0e/3323074566/il_1588xN.3323074566_po69.jpg')
Artwork.create(title: 'Worms with Eyes and a Mouth (Volume 2)', artist: 'Jarad Solomon', year: 2014, description: 'zine of worms with eyes and a mouth.', 
    size:'2.75 x 4.25', tags:'paper, illustration, zine, folded', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/2ded6f/1765005629/il_794xN.1765005629_qw0h.jpg')
Artwork.create(title: 'LOSTCAT (RED BLUE)', artist: 'Jarad Solomon', year: 2020, description: 'drawing of a lost cat. Screen-printed in red, blue, and lighter blue.', 
    size:'10 x 14', tags:'paper, illustration, silkscreen', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/f53b96/1717522970/il_1588xN.1717522970_fzit.jpg')

Artwork.create(title: 'worm #1', artist: 'Jeanette Tokarz', year: 2019, description: 'the first worm I ever made!', 
    size:'8.5 x 11', tags:'illustration, paper, ink', available: true, user_id: 2, url: 'https://i.etsystatic.com/19062942/r/il/c9db32/3324699900/il_1588xN.3324699900_ovzu.jpg')
Artwork.create(title: 'Lady Figure Print in Peach', artist: 'Jeanette Tokarz', year: 2020, description: 'Handmade linocut print, each print has its own unique qualities! This edition will be limited availability only 15 prints made. Peach color was hand mixed to create this beautiful print!', 
    size:'8 x 10', tags:'linocut, paper', available: true, user_id: 2, url: 'https://i.etsystatic.com/19062942/r/il/5d9e8f/3372373527/il_1588xN.3372373527_5kav.jpg')

Artwork.create(title: 'Burn Your Art', artist: 'Danny Alegretti', year: 2020, description: 'match box for burning all that art.', 
    size:'1.25 x 2.5', tags:'cardboard, print', available: true, user_id: 3, url: 'https://images.squarespace-cdn.com/content/v1/5e0a5c3b1d3864051d629ab1/30cd0c8e-32ca-4b86-852f-49f06810eaab/matches2.gif?format=750w')

Artwork.create(title: 'Bay Leaf Bag', artist: 'Daniel Coleman', year: 2015, description: 'Cortland tote bag made using local, sustainable materials and high quality craftsmanship.', 
    size:'20 x 20 x 4', tags:'pattern making, leather working, fiber art, design', available: true, user_id: 4, url: 'https://images.squarespace-cdn.com/content/v1/5339bd96e4b092d3a373b1b7/1429914556063-XMAK1GHY7G2KDRGNLRNM/Cortland_Tote-big.jpg?format=2500w')
Artwork.create(title: 'Lintite Stool', artist: 'Daniel Coleman', year: 2016, description: 'A personal-project called Lintite. It was a new material made from dryer lint (textile waste) and concrete. The goal was made something useful from this massive stream of waste.', 
    size:'12 x 12 x 14', tags:'furniture Design, material innovation', available: true, user_id: 4, url: 'https://images.squarespace-cdn.com/content/v1/5339bd96e4b092d3a373b1b7/1527990001252-NGHX2I5ROE5EFJSDE5RD/Small+Stool.JPG?format=2500w')
Artwork.create(title: 'J-bae in Tenerifaaaeee', artist: 'Daniel Coleman', year: 2016, description: 'colorful computer drawing of bae.', 
    size:'10 x 10', tags:'digital illustration, glycee', available: true, user_id: 4, url: 'https://images.squarespace-cdn.com/content/v1/5339bd96e4b092d3a373b1b7/1535711460810-XP0KNFZEVLQL9UHZEM50/image-asset.jpeg?format=1500w')
Artwork.create(title: "Brunch at Jamie's", artist: 'Daniel Coleman', year: 2016, description: 'framed digital print. I made this drawing with a computer mousepad.', 
    size:'16 x 16', tags:'digital illustration, glycee', available: true, user_id: 4, url: 'hthttps://images.squarespace-cdn.com/content/v1/5339bd96e4b092d3a373b1b7/1535711458724-SO7Z8HVYBUH19A9B8ETT/image-asset.jpeg?format=1500w')
    
Artwork.create(title: 'hand', artist: 'James Dawson', year: 2021, description: 'pen drawing of my hand.', 
    size:'6 x 10', tags:'pen, paper', available: true, user_id: 5, url: 'https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/272132515_2290432351098409_6171715577324902631_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=93EwQ49dKWQAX_rpjCg&_nc_ht=scontent-ort2-2.xx&oh=00_AT-QcR-Pcf6YhtuZPtFtT2HH8tiH8SbAfAyPwmDuSgxarg&oe=620B7F26')
Artwork.create(title: 'BB and Lucille', artist: 'James Dawson', year: 2021, description: 'a drawing of one of my idols.', 
    size:'6 x 10', tags:'pen, paper, portrait', available: true, user_id: 5, url: 'https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/272123967_2290432357765075_1913419949804577425_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=66erMMbl9LUAX_Hqn8s&_nc_ht=scontent-ort2-2.xx&oh=00_AT9Fcq2anrYmVsPJe6CpcjA1P5xphrMV3psQvKOrdAleHA&oe=620BFD9F')
Artwork.create(title: 'BB and Lucille', artist: 'James Dawson', year: 2021, description: 'a drawing I made of Jimi Hendrix.', 
    size:'6 x 10', tags:'pen, paper, portrait', available: true, user_id: 5, url: 'https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/272160367_2290432364431741_6936449882475929096_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=FjZkqYFgR38AX-FSRyr&_nc_ht=scontent-ort2-2.xx&oh=00_AT-ZJMUZPI_NjfsyylzDZaMtAHh80l0bcs226Fy_CY5Fhg&oe=620C73A3')



# Trade.create()













puts "🌱 Done seeding!"