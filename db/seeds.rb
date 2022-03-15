
puts "🌱 Seeding data..."

names = ["Vincent", "Pablo", "Paul", "Albrecht", "Andy", "Edgar", "Diego", "Edvard", "Claude", "Francis", "George", "Gustav", "Jackson", "Jasper", "Henri", "Rosa", "Mark", "Marcel", "Pierre", "Piet", "Ray", "Roy", "Salvador", "Wassily", "Barbara", "Diane", "Anne", "Dorothea", "Eva", "Frida", "Georgia", "Sally", "Jan", "Yayoi", "Jeanette"]
passwords = ["cat", "bat", "hat", "mat", "rat", "flat", "gnat", "wat", "tat", "vat", "pat", "sat", "dat"]

## users
User.create(username:'j', first_name:'Jarad', last_name:'Solomon', password: 'j', email:'jaradsolomon@gmail.com', 
    bio:'Interdisciplinary design media artist based in Logan Square Chicago.', street_address:'2239 N Sawyer Ave', city:'Chicago', state:'IL', zip:'60647', website:'www.jaradsolomon.com', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdxrrtycZ8D0kYtXknN1I95jhhC8iHppv9w&usqp=CAU' )
User.create(username:'HalfFull', first_name:'Jeanette', last_name:'Tokarz', password: passwords.sample, email:'tokarzjeanette@gmail.com', 
    bio:'Self-taught folk-artist focused in ceramics and linocut prints.', street_address:'1629 N Sawyer Ave', city:'Chicago', state:'IL', zip:'60647', website:'www.etsy.com/shop/JeanetteTokarz', profile_pic: 'https://media-exp1.licdn.com/dms/image/C4E03AQH20xYulSOLFQ/profile-displayphoto-shrink_200_200/0/1608656775759?e=1649289600&v=beta&t=stqnpgUtsEoKQ6wVOG4DWW2yWATFbq0fcrlcqMO5_hI' )
User.create(username:'DannySpaghetti', first_name:'Danny', last_name:'Alegretti', password: passwords.sample, email:'allegrettiphoto@gmail.com', 
    bio:'Danny Allegretti (pronounced like spaghetti) is a Chicago-based artist and designer.', street_address:'530 W Cordova Rd', city:'Sante Fe', state:'NM', zip:'87505', website:'www.dannyallegretti.com', profile_pic: 'https://media-exp1.licdn.com/dms/image/D5603AQE8l1_9NhxlWw/profile-displayphoto-shrink_200_200/0/1632497059138?e=1648684800&v=beta&t=wCpSRpQmpPt2FF4GxhzInODQZgyaisXk0uUDn_TcknA' )
User.create(username:'LevDesign', first_name:'Daniel', last_name:'Coleman', password: passwords.sample, email:'D.levcoleman@gmail.com', 
    bio:"Hi, I'm Daniel, a multidisciplinary designer from San Francisco.", street_address:'1600 Vine St', city:'Los Angeles', state:'CA', zip:'90028', website:'www.designlev.com', profile_pic: 'https://miro.medium.com/max/3150/1*8gn6y5FYI8p5941YukRhWQ@2x.jpeg' )
User.create(username:'Jamesthe8th', first_name:'James', last_name:'Dawson', password: passwords.sample, email:'jamesthe8th@gmail.com', 
    bio:"Singer songwriter, and artist from the bay area.", street_address:'3909 Hillsboro Pike', city:'Nashville', state:'TN', zip:'37215', website:'www.Jamesthe8th.com', profile_pic: 'https://miro.medium.com/max/1000/1*NwNh770WXL1e_ANWgRpjjw.jpeg' )
User.create(username:'KyleArts', first_name:'Kyle', last_name:'Riley', password: passwords.sample, email:'kyle@gmail.com', 
    bio:"Kyle Riley is a self-taught artist in Chicago, Illinois. He creates self-described folk art-inspired wooden cut out sculptures and larger, pattern oriented, abstract paintings. His subjects include plants, animals, and people. All are one of a kind, and meant to bring joy to the viewer.", 
    street_address:'15391 Bangy Rd', city:'Lake Oswego', state:'OR', zip:'97035', website:'https://www.instagram.com/kylerileysartsandcrafts/?hl=en', profile_pic: 'http://cdn.shopify.com/s/files/1/0445/4282/0511/products/O0837KYL_1_1200x1200.jpg?v=1612478185' )
User.create(username:'VicArt', first_name:'Vic', last_name:'Barquin', password: passwords.sample, email:'vic@gmail.com', 
    bio:"Vic Barquin is an artist, printmaker, and arts administrator from Cranbury, New Jersey. She received a BFA in Printmaking with honors from Massachusetts College of Art and Design in 2016. At graduation she was awarded the Genevieve McMillan-Reba Stewart Traveling Fellowship which funded her residency at the Can Serrat International Art Centre in El Bruc, Catalonia. She then moved to Chicago, Illinois where she facilitated events and exhibitions as part of her studio practice.", 
    street_address:'8928 Holly Ave NE', city:'Albuquerque', state:'NM', zip:'87122', website:'https://www.victoriamariebarquin.com/', profile_pic: 'https://canserrat.org/wp-content/uploads/2017/07/VictoriaMarieBarquin-1-365x365.jpg' )
User.create(username:'PicklemanArt', first_name:'Jason', last_name:'Pickleman', password: passwords.sample, email:'jasonP@gmail.com', 
    bio:"Bridging the gap between fine and commercial art, Jason Pickleman has created a body of work that is both conceptual and popular, applying media as varied as neon, offset printing, silkscreen, collage, photography and commercially available ready-mades. Pickleman's studio, JNL graphic design was begun in 1992 and specializes in the creation of graphic ephemera of unique cultural significance.", 
    street_address:'9205 S Dixie Hwy', city:'Miami', state:'FL', zip:'33156', website:'https://pickleman.art/', profile_pic: 'https://www.chicagotribune.com/resizer/Ny0SnUb64P5VEGuwzeXtnWFEsCk=/415x563/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/PXPBTCZ6P5ELHGTPXQVPHDL5FE.jpg' )


## artworks
Artwork.create(title: 'In-Flight', artist: 'Jarad Solomon', year: 2018, description: 'art book made of algorythmically generated airline safety cards.', 
    size:'8 x 10', tags:'risograph, paper, zine', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/d534fa/2261803069/il_1588xN.2261803069_p7io.jpg')
Artwork.create(title: 'Flower Post Stamp Garden #4', artist: 'Jarad Solomon', year: 2017, description: 'augmented reality risograph poster made from flower post stamps.', 
    size:'11 x 17', tags:'risograph, paper, augmented reality, found object, collage, pattern making', available: false, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/d24f9f/2261903475/il_1588xN.2261903475_fmso.jpg')
Artwork.create(title: 'garden generative drawing series #1', artist: 'Jarad Solomon', year: 2016, description: 'plant doodle with top part drawn by a computer analyzing the bottom part.', 
    size:'10 x 14', tags:'risograph, paper, illustration, computer generated, digital', available: false, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/02fa0e/3323074566/il_1588xN.3323074566_po69.jpg')
Artwork.create(title: 'Worms with Eyes and a Mouth (Volume 2)', artist: 'Jarad Solomon', year: 2014, description: 'zine of worms with eyes and a mouth.', 
    size:'2.75 x 4.25', tags:'paper, illustration, zine, folded', available: false, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/2ded6f/1765005629/il_794xN.1765005629_qw0h.jpg')
Artwork.create(title: 'LOSTCAT (RED BLUE)', artist: 'Jarad Solomon', year: 2020, description: 'drawing of a lost cat. Screen-printed in red, blue, and lighter blue.', 
    size:'10 x 14', tags:'paper, illustration, silkscreen', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/f53b96/1717522970/il_1588xN.1717522970_fzit.jpg')
Artwork.create(title: '2 Livingrooms #7', artist: 'Jarad Solomon', year: 2016, description: '2 color Risograph on archival 80lb french paper', 
    size:'11 x 17', tags:'paper, risograph, print', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/05e356/1211531879/il_1588xN.1211531879_h56f.jpg')
Artwork.create(title: 'In-Flight-Safety brochure', artist: 'Jarad Solomon', year: 2018, description: 'Double-sided 4-color risograph. Made from an algorithmic analysis of collected airline safety cards', 
    size:'10.75 x 16.75', tags:'paper, risograph, print', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/1901b3/2214313486/il_794xN.2214313486_s615.jpg')
Artwork.create(title: 'beware dog doodle stickers', artist: 'Jarad Solomon', year: 2018, description: 'bright red risograph on white sticker paper.', 
    size:'4.25 x 8.5', tags:'paper, risograph, print, sticker', available: false, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/d4013c/3325484396/il_794xN.3325484396_kmko.jpg')
Artwork.create(title: 'Emojiscape #1', artist: 'Jarad Solomon', year: 2015, description: 'Experiment using generative code to abstract emoji faces. 2 color Risograph on archival 80lb french paper.', 
    size:'11 x 14', tags:'paper, risograph, print', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/953e88/1025317835/il_794xN.1025317835_drk0.jpg')
Artwork.create(title: 'Udder Neon', artist: 'Jarad Solomon', year: 2015, description: 'Bright Pinkt cow udder shaped neon sign.', 
    size:'15 x 20 x 5', tags:'neon, sculpture', available: true, user_id: 1, url: 'https://payload.cargocollective.com/1/9/305078/11552344/IMG_9213_670.jpg')
Artwork.create(title: 'Prego Furniture #2', artist: 'Jarad Solomon', year: 2013, description: 'Cube storage furniture peice. Photo paper spray mounted on 3/4in plywood.', 
    size:'15 x 20 x 5', tags:'sculpture, furniture, woodworking', available: true, user_id: 1, url: 'https://payload.cargocollective.com/1/9/305078/7667089/IMG_7323.JPG')
Artwork.create(title: 'Wicker Lounge Chair', artist: 'Jarad Solomon', year: 2013, description: 'Experimental furniture made of tied together wicker baskets', 
    size:'45 x 40 x 32', tags:'sculpture, furniture, wicker, mixed media', available: true, user_id: 1, url: 'https://payload.cargocollective.com/1/9/305078/8609724/IMG_8750.jpg')
Artwork.create(title: 'Averaged Chairs', artist: 'Jarad Solomon', year: 2013, description: 'Two Queen Anne Chairs vertically sliced, offset, and rebuilt as averages of each other.', 
    size:'17 x 15 x 40', tags:'sculpture, furniture, woodworking', available: true, user_id: 1, url: 'https://payload.cargocollective.com/1/9/305078/9279601/finished_670.jpeg')         

Artwork.create(title: 'cosmic snake', artist: 'Jeanette Tokarz', year: 2019, description: 'hand cut lino print of a snake. Oil-Based Relief Ink', 
    size:'8.5 x 11', tags:'linocut, paper, ink', available: true, user_id: 2, url: 'https://i.etsystatic.com/19062942/r/il/c9db32/3324699900/il_1588xN.3324699900_ovzu.jpg')
Artwork.create(title: 'Lady Figure Print in Peach', artist: 'Jeanette Tokarz', year: 2020, description: 'Handmade gradient linocut print, each print has its own unique qualities! This edition will be limited availability only 15 prints made. Peach color was hand mixed to create this beautiful print! Oil-Based Relief Ink', 
    size:'8 x 10', tags:'linocut, paper, ink', available: true, user_id: 2, url: 'https://i.etsystatic.com/19062942/r/il/5d9e8f/3372373527/il_1588xN.3372373527_5kav.jpg')

Artwork.create(title: 'Burn Your Art', artist: 'Danny Alegretti', year: 2020, description: 'match box for burning all that art.', 
    size:'1.25 x 2.5', tags:'cardboard, print', available: true, user_id: 3, url: 'https://images.squarespace-cdn.com/content/v1/5e0a5c3b1d3864051d629ab1/30cd0c8e-32ca-4b86-852f-49f06810eaab/matches2.gif?format=750w')
Artwork.create(title: 'valentinys #1', artist: 'Danny Alegretti', year: 2021, description: 'tear and share valentines cards made in collaboration with OG homies Ginger Gold and risograph printed on fancy GLO-TONE paper by Riso World. each bundle includes one pink sheet and one yellow sheet (12 cards in totaly) with the option to purchase 12 envelopes so you can easily send them to all yer lovers out there.', 
    size:'2.25 x 4', tags:'risograph, print', available: true, user_id: 3, url: 'https://images.squarespace-cdn.com/content/v1/6003328b2f57da1e2e6cdc65/1643071180069-NRRQBOXONE5T1N1WCDFG/valentinys_individualsnow-1.jpg?format=500w')
Artwork.create(title: 'valentinys #2', artist: 'Danny Alegretti', year: 2021, description: 'tear and share valentines cards made in collaboration with OG homies Ginger Gold and risograph printed on fancy GLO-TONE paper by Riso World. each bundle includes one pink sheet and one yellow sheet (12 cards in totaly) with the option to purchase 12 envelopes so you can easily send them to all yer lovers out there.', 
    size:'2.25 x 4', tags:'risograph, print', available: false, user_id: 3, url: 'https://images.squarespace-cdn.com/content/v1/6003328b2f57da1e2e6cdc65/1643071153297-AFUVR0C5L1PZQ0ZH48R4/valentinys_individualsnow-3.jpg?format=500w')
Artwork.create(title: 'The Last Day of February', artist: 'Danny Alegretti', year: 2019, description: 'The Last Day of February is a risograph zine was made in collaboration with graphic designer Elizabeth Vande Griend. The zine investigates themes of seasonal depression, love, and the city of Chicago.', 
    size:'5.5 x 8', tags:'risograph, print', available: false, user_id: 3, url: 'https://images.squarespace-cdn.com/content/v1/5e0a5c3b1d3864051d629ab1/1582764109755-O2BOQEADIQ4MEPHVXQOX/DSC_4506-Edit-Edit.jpg.jpeg?format=1000w')

Artwork.create(title: 'Bay Leaf Bag', artist: 'Daniel Coleman', year: 2015, description: 'Cortland tote bag made using local, sustainable materials and high quality craftsmanship.', 
    size:'20 x 20 x 4', tags:'pattern making, leather working, fiber art, design', available: true, user_id: 4, url: 'https://images.squarespace-cdn.com/content/v1/5339bd96e4b092d3a373b1b7/1429914556063-XMAK1GHY7G2KDRGNLRNM/Cortland_Tote-big.jpg?format=2500w')
Artwork.create(title: 'Lintite Stool', artist: 'Daniel Coleman', year: 2016, description: 'A personal-project called Lintite. It was a new material made from dryer lint (textile waste) and concrete. The goal was made something useful from this massive stream of waste.', 
    size:'12 x 12 x 14', tags:'furniture Design, material innovation', available: true, user_id: 4, url: 'https://images.squarespace-cdn.com/content/v1/5339bd96e4b092d3a373b1b7/1527990001252-NGHX2I5ROE5EFJSDE5RD/Small+Stool.JPG?format=2500w')
Artwork.create(title: 'J-bae in Tenerifaaaeee', artist: 'Daniel Coleman', year: 2016, description: 'colorful computer drawing of bae.', 
    size:'10 x 10', tags:'digital illustration, glycee', available: true, user_id: 4, url: 'https://images.squarespace-cdn.com/content/v1/5339bd96e4b092d3a373b1b7/1535711460810-XP0KNFZEVLQL9UHZEM50/image-asset.jpeg?format=1500w')
Artwork.create(title: "Brunch with Jamie", artist: 'Daniel Coleman', year: 2016, description: 'framed digital print. I made this drawing with a computer mousepad.', 
    size:'16 x 16', tags:'digital illustration, glycee', available: false, user_id: 4, url: 'https://images.squarespace-cdn.com/content/v1/5339bd96e4b092d3a373b1b7/1535711458724-SO7Z8HVYBUH19A9B8ETT/image-asset.jpeg?format=1500w')
Artwork.create(title: "Goat Farming", artist: 'Daniel Coleman', year: 2016, description: 'I think the purpose of art is to get people to see things differently. Most of my work comes from everyday photos shot on my phone. What do you think art is for?', 
    size:'8 x 8', tags:'digital illustration, modern', available: true, user_id: 4, url: 'https://pbs.twimg.com/media/DngycQ1UYAA-2wd?format=jpg&name=large')
Artwork.create(title: "In San Francisco In 2016", artist: 'Daniel Coleman', year: 2017, description: 'Digital artwork I made in Oakland in 2017', 
    size:'10 x 14', tags:'digital illustration, modern', available: true, user_id: 4, url: 'https://pbs.twimg.com/media/Dmxal5IU8AAtb28?format=jpg&name=large')
Artwork.create(title: "Wildebeest", artist: 'Daniel Coleman', year: 2015, description: 'A cat toy inspired by a fish skeleton. ', 
    size:'4 x 16 X 1', tags:'fiber, product Design', available: true, user_id: 4, url: 'https://images.squarespace-cdn.com/content/v1/5339bd96e4b092d3a373b1b7/1443541216789-NN3ZRDX3CANC0L7LKCJA/IMG_4336.jpg?format=1500w')

Artwork.create(title: 'Giraffe', artist: 'Kyle Riley', year: 2022, description: 'Hand-painted, free standing, one-of-a-kind object.', 
    size:'9 x 16 x .5', tags:'painted wood', available: true, user_id: 6, url: 'https://cdn.shopify.com/s/files/1/0445/4282/0511/products/O0843KYL_1_1024x1024.jpg?v=1612479769')
    

Artwork.create(title: 'Handwriting: A Way to Self-Expression', artist: 'Vic Barquin', year: 2018, description: 'Three layer screenprint. Included in Chicago Printmakers Collaborative`s 2018 Calendar.', 
    size:'18 x 24', tags:'screenprint, handwriting', available: true, user_id: 7, url: 'https://payload.cargocollective.com/1/14/454814/14256184/Handwriting_150dpi_1079.jpg')
Artwork.create(title: 'Red Socks', artist: 'Vic Barquin', year: 2021, description: 'The transition from what was an immeasurably tragic year into another offers the promise to begin anew. Without active and deliberate retrospection, this passive consolation fails to account for a year of reckonings that have been incited on a scale of collective and individual necessity; the same convenient conviction that has falsely upheld that the failings, tragedies, and prejudices of the past also remain there. A reckoning in its simplest definition is a settling of accounts. When we attempt to reckon with the events of the past year, four years, or one’s own life, what events or experiences do we account for? This collection of work records the efforts of artists as they confront the collision of intimate, national, or global histories.', 
    size:'10 x 14', tags:'screenprint', available: false, user_id: 7, url: 'https://payload.cargocollective.com/1/14/454814/14256184/RedSocksPink_72dpi_648.jpg')
Artwork.create(title: 'Casa Linda Variation II', artist: 'Vic Barquin', year: 2015, description: 'intaglio and wood grain monotype', 
    size:'18 x 14', tags:'monoprint, intaglio', available: true, user_id: 7, url: 'https://payload.cargocollective.com/1/14/454814/10076224/screen-porch_72res_cropped_670.jpg')
Artwork.create(title: 'Two Fs (San Diego)', artist: 'Vic Barquin', year: 2020, description: 'edition of 20', 
    size:'11 x 8.5', tags:'stone lithography, screenprint', available: true, user_id: 7, url: 'https://payload.cargocollective.com/1/14/454814/13432492/TwoFs_150dpi_web_670.jpg')
Artwork.create(title: 'Cat Clinic', artist: 'Vic Barquin', year: 2020, description: 'edition of 20. Lithography assistance from Eric Wilson', 
    size:'11 x 8.5', tags:'photolithography, screenprint', available: true, user_id: 7, url: 'https://payload.cargocollective.com/1/14/454814/13432492/CatClinic_150dpi_IG_1500.jpg')
     
Artwork.create(title: 'RE:PURPOSE 3', artist: 'Jason Pickleman', year: 2019, description: 're-purposed neon signs.', 
    size:'11 x 23 x 3', tags:'neon', available: true, user_id: 8, url: 'https://images.squarespace-cdn.com/content/v1/5dfbfc83a16ab5503da19f75/1583345370505-CRK2KYIUJG0ZMLYQ1K5S/IMG_0764.JPG?format=2500w')
Artwork.create(title: 'Hearts Divided (pink/red)', artist: 'Jason Pickleman', year: 2019, description: 'edition of 5', 
    size:'68 x 7 x 3', tags:'neon', available: true, user_id: 8, url: 'https://img1.wsimg.com/isteam/ip/651c130a-ac7e-40f9-a8f8-2728979dcc99/hearts%20divided.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800')
Artwork.create(title: 'Open Campfire', artist: 'Jason Pickleman', year: 2018, description: 'I made this sculpture from illuminated LEDs.', 
size:'~20 x 30 x 10', tags:'LED, lights, found object', available: true, user_id: 8, url: 'https://www.chicagomag.com/wp-content/archive/images/2016/0816/C201608-C-Jason-Pickleman-Open-Campfire.jpg')
Artwork.create(title: 'Silver-plated boots', artist: 'Jason Pickleman', year: 1995, description: 'I memorialized my teenage punk years by silver-plating my combat boots.', 
    size:'12 x 10 x 16', tags:'sculpture, metal-working', available: true, user_id: 8, url: 'https://www.chicagomag.com/wp-content/archive/images/2016/0816/C201608-C-Jason-Pickleman-boots.jpg')

# re-posts
Artwork.create(title: 'Flower Post Stamp Garden #4', artist: 'Jarad Solomon', year: 2017, description: 'augmented reality risograph poster made from flower post stamps.', 
    size:'11 x 17', tags:'risograph, paper, augmented reality, found object, collage, pattern making', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/d24f9f/2261903475/il_1588xN.2261903475_fmso.jpg')    
Artwork.create(title: 'Red Socks', artist: 'Vic Barquin', year: 2021, description: 'The transition from what was an immeasurably tragic year into another offers the promise to begin anew. Without active and deliberate retrospection, this passive consolation fails to account for a year of reckonings that have been incited on a scale of collective and individual necessity; the same convenient conviction that has falsely upheld that the failings, tragedies, and prejudices of the past also remain there. A reckoning in its simplest definition is a settling of accounts. When we attempt to reckon with the events of the past year, four years, or one’s own life, what events or experiences do we account for? This collection of work records the efforts of artists as they confront the collision of intimate, national, or global histories.', 
    size:'10 x 14', tags:'screenprint', available: true, user_id: 7, url: 'https://payload.cargocollective.com/1/14/454814/14256184/RedSocksPink_72dpi_648.jpg')
Artwork.create(title: 'Worms with Eyes and a Mouth (Volume 2)', artist: 'Jarad Solomon', year: 2014, description: 'zine of worms with eyes and a mouth.', 
    size:'2.75 x 4.25', tags:'paper, illustration, zine, folded', available: true, user_id: 1, url: 'https://i.etsystatic.com/13059752/r/il/2ded6f/1765005629/il_794xN.1765005629_qw0h.jpg')
Artwork.create(title: 'The Last Day of February', artist: 'Danny Alegretti', year: 2019, description: 'The Last Day of February is a risograph zine was made in collaboration with graphic designer Elizabeth Vande Griend. The zine investigates themes of seasonal depression, love, and the city of Chicago.', 
    size:'5.5 x 8', tags:'risograph, print', available: true, user_id: 3, url: 'https://images.squarespace-cdn.com/content/v1/5e0a5c3b1d3864051d629ab1/1582764109755-O2BOQEADIQ4MEPHVXQOX/DSC_4506-Edit-Edit.jpg.jpeg?format=1000w')
Artwork.create(title: 'valentinys #2', artist: 'Danny Alegretti', year: 2021, description: 'tear and share valentines cards made in collaboration with OG homies Ginger Gold and risograph printed on fancy GLO-TONE paper by Riso World. each bundle includes one pink sheet and one yellow sheet (12 cards in totaly) with the option to purchase 12 envelopes so you can easily send them to all yer lovers out there.', 
    size:'2.25 x 4', tags:'risograph, print', available: true, user_id: 3, url: 'https://images.squarespace-cdn.com/content/v1/6003328b2f57da1e2e6cdc65/1643071153297-AFUVR0C5L1PZQ0ZH48R4/valentinys_individualsnow-3.jpg?format=500w')
    
# more
Artwork.create(title: 'Horse', artist: 'Kyle Riley', year: 2022, description: 'Hand-painted, free standing, one-of-a-kind object.', 
    size:'15 x 12 x .5', tags:'painted wood', available: true, user_id: 6, url: 'https://cdn.shopify.com/s/files/1/0445/4282/0511/products/O0842KYL_2_1024x1024.jpg?v=1612479577')
Artwork.create(title: 'Crying Cowboy', artist: 'Kyle Riley', year: 2022, description: 'Hand-painted one-of-a-kind bust, can hang on the wall or lean on a shelf.', 
    size:'15 x 20 x .5', tags:'painted wood', available: true, user_id: 6, url: 'https://cdn.shopify.com/s/files/1/0445/4282/0511/products/2022-02-21_10of57_1024x1024.jpg?v=1645917254')
Artwork.create(title: 'Tropical Fish', artist: 'Kyle Riley', year: 2022, description: 'Hand-painted one-of-a-kind bust, can hang on the wall or lean on a shelf.', 
    size:'3 x 8 x .5', tags:'painted wood', available: true, user_id: 6, url: 'https://cdn.shopify.com/s/files/1/0445/4282/0511/products/O0844KYL_1024x1024.jpg?v=1612480047')
Artwork.create(title: 'Duck with Ducklings', artist: 'Kyle Riley', year: 2022, description: 'Hand-painted, free standing, wood object.', 
    size:'17 x 6.5 x .5', tags:'painted wood', available: true, user_id: 6, url: 'https://cdn.shopify.com/s/files/1/0445/4282/0511/products/2022-02-21_7of57_1024x1024.jpg?v=1645917093')
    


## trades
# completed examples
Trade.create(trader_id: 4, trader_art_id: 23, trader_note: "I'm very into this style!",
    vendor_id: 1, vendor_art_id: 3, completed: true, completed_date:Date.today-rand(500), offered_date:Date.today-rand(2000) )

Trade.create(trader_id: 3, trader_art_id: 19, trader_note: "Zine trade!",
    vendor_id: 1, vendor_art_id: 4, completed: true, completed_date:Date.today-rand(1000), offered_date:Date.today-rand(4000) )

Trade.create(trader_id: 1, trader_art_id: 8, trader_note: "This is so dope! It's going to be the perfect gift for my partner!",
    vendor_id: 3, vendor_art_id: 18, completed: true, completed_date:Date.today-rand(1500), offered_date:Date.today-rand(5000) )

Trade.create(trader_id: 1, trader_art_id: 2, trader_note: "This work is so cool! Big fan of the use of positive / negative space + color", 
            vendor_id: 7, vendor_art_id: 29, completed: true, completed_date:Date.today-rand(1500), offered_date:Date.today-rand(5000) )


# sent examples
Trade.create(trader_id: 1, trader_art_id: 8, trader_note: "Such a beautiful color and texture!",
            vendor_id: 7, vendor_art_id: 30, completed: false, completed_date: '', offered_date:Date.today-rand(2000) )

Trade.create(trader_id: 1, trader_art_id: 5, trader_note: "Woo cat stuff!",
             vendor_id: 7, vendor_art_id: 32, completed: false, completed_date: '', offered_date:Date.today-rand(2000) )

Trade.create(trader_id: 1, trader_art_id: 13, trader_note: "Chair for chair?",
            vendor_id: 4, vendor_art_id: 21, completed: false, completed_date: '', offered_date:Date.today-rand(3000) )

Trade.create(trader_id: 1, trader_art_id: 1, trader_note: "Love this style!",
            vendor_id: 4, vendor_art_id: 22, completed: false, completed_date: '', offered_date:Date.today-rand(3000) )

Trade.create(trader_id: 1, trader_art_id: 7, trader_note: "Trying to complete my collection!",
            vendor_id: 3, vendor_art_id: 17, completed: false, completed_date: '', offered_date:Date.today-rand(4000) )

Trade.create(trader_id: 1, trader_art_id: 4, trader_note: "maybe this one is incase you didn't like the last so much :)",
            vendor_id: 2, vendor_art_id: 14, completed: false, completed_date: '', offered_date:Date.today-rand(4000) )

Trade.create(trader_id: 1, trader_art_id: 6, trader_note: "Blown away by your work lately :)",
             vendor_id: 2, vendor_art_id: 15, completed: false, completed_date: '', offered_date:Date.today-rand(5000) )

Trade.create(trader_id: 1, trader_art_id: 5, trader_note: "This print is so good! I'm gonna send you a couple offers...",
            vendor_id: 2, vendor_art_id: 14, completed: false, completed_date: '', offered_date:Date.today-rand(5000) )
    

    
# received examples


Trade.create(trader_id: 6, trader_art_id: 27, trader_note: "I dig your process! It's cool to see some other crafty people out there making weird crafty stuff",
           vendor_id: 1, vendor_art_id: 11, completed: false, completed_date: '', offered_date:Date.today-rand(2000) )

Trade.create(trader_id: 4, trader_art_id: 24, trader_note: "Love your art! Trade?",
           vendor_id: 1, vendor_art_id: 39, completed: false, completed_date: '', offered_date:Date.today-rand(2000) )

Trade.create(trader_id: 7, trader_art_id: 28, trader_note: "These seem like they'd be a good trade! What do you think?",
            vendor_id: 1, vendor_art_id: 9, completed: false, completed_date: '', offered_date:Date.today-rand(3000) )

Trade.create(trader_id: 2, trader_art_id: 14, trader_note: "I love this piece! It would go perfect with the rest of my collection... please consider this block print I did this year!",
            vendor_id: 1, vendor_art_id: 37, completed: false, completed_date: '', offered_date:Date.today-rand(3000) )

Trade.create(trader_id: 7, trader_art_id: 31, trader_note: "This one really caught my eye? Interested in a trade?",
            vendor_id: 1, vendor_art_id: 5, completed: false, completed_date: '', offered_date:Date.today-rand(4000) )

Trade.create(trader_id: 2, trader_art_id: 15, trader_note: "Such a cool print. I've always wanted to do something like this. It looks like fun!",
            vendor_id: 1, vendor_art_id: 10, completed: false, completed_date: '', offered_date:Date.today-rand(4000) )

Trade.create(trader_id: 8, trader_art_id: 35, trader_note: "Nice neon! Would you be interested in a sign trade?",
            vendor_id: 1, vendor_art_id: 6, completed: false, completed_date: '', offered_date:Date.today-rand(5000) )









puts "🌱 Done seeding!"