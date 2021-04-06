const work = [
    {
        title:{
            sv:'3D-modell',
            en:'3D model'
        },
        text:{
            sv:'Presentation av 3D-skannat museiföremål. ' +
               'Byggd med JavaScript-biblioteken THREE.js och TWEEN.js. Modell i format .glTF med en enkel ' +
               'rotationsanimation och en kamera som flyttas till fördefinerade koordinater vid knapptryck.',
            en:'Presentation of a 3D-scanned museum object. ' +
               'Built with the JavaScript libraries THREE.js and TWEEN.js. Model in the .glTF format ' +
               'with a simple rotation animation and a camera that moves to predefined coordinates ' +
               'on button click.'
        },
        links:{
            repo:'https://github.com/d-c-k/ivan_iv',
            page:'https://d-c-k.github.io/ivan_iv_build/'
        },
        image:{
            mob:'',
            desktop:'0'
        }
    },
    {
        title:{
            sv:'Chat-app',
            en:'Chat app'
        },
        text:{
            sv:'En chat-applikation med användar-login. ' +
               'Skapa ett användarkonto och logga in. Se andra användare och vilka av dem som är online,' +
               'chatta privat eller skapa en grupp-kanal med flera användare. All data sparas i en databas ' +
               'som uppdateras kontinuerligt. Byggd i NodeJS och MongoDB med bcrypt, ejs, express, ' +
               'mongoose, passport och socket.io.',
            en:'A chat application with user login. ' +
               'Register a user account and log in. Other users are listed and those who are online ' +
               'highlighted. Send private messages or create a group channel with multiple users. All ' +
               'data is stored in a continuously updating database. Built in NodeJS and MongoDB using ' +
               'bcrypt, ejs, express, mongoose, passport and socket.io.'
        },
        links:{
            repo:'https://github.com/d-c-k/chat-app',
            page:'https://tranquil-peak-98736.herokuapp.com/'
        },
        image:{
            mob:'',
            desktop:'1'
        }
    },
    {
        title:{
            sv:'CRUD-app',
            en:'CRUD app'
        },
        text:{
            sv:'Skapa, läs av, uppdatera och ta bort poster i en lista. ' +
               'Inkluderar även login med JWT-token samt validering av input-formatet ' +
               'i "VAT-Number"-fältet. Byggd i React med styled-components. ' +
               'Lösenord: javascriptoramverk',
            en:'Create, read, update and delete posts in a list. ' +
               'Also includes log in with JWT-token and validation of input format ' +
               'in the "VAT-Number" field. Built in React using styled-components. ' +
               'Password: javascriptoramverk'
        },
        links:{
            repo:'https://github.com/d-c-k/react-crud',
            page:'https://d-c-k.github.io/react-crud/'
        },
        image:{
            mob:'/img/react_crud_screen_mob.jpg',
            desktop:'2'
        }
    },
    {
        title:{
            sv:'Musikspelare',
            en:'Audio player'
        },
        text:{
            sv:'En enkel ljuduppspelnings-app med några förinlagda .mp3-filer ' +
               'som spelas upp med en tillhörande .gif som loopas i bakgrunden. ' +
               'Funktioner inkluderar spela/pausa, nästa/förra spår, repeat, ' +
               'volymkontroll samt en spårlista(endast desktop).',
            en:'A simple audio playback app with a few preloaded .mp3-files and ' +
               'corresponding .gif-images looping in the background. Functions ' +
               'include play/pause, previous and next track selectors, repeat, ' +
               'volume control and a tracklist(desktop only)'
        },
        links:{
            repo:'https://github.com/d-c-k/audioplayer',
            page:'https://d-c-k.github.io/audioplayer/'
        },
        image:{
            mob:'/img/audioplayer_screen_mob.jpg',
            desktop:'3'
        }
    },    
    {
        title:{
            sv:'Quiz-app',
            en:'Quiz app'
        },
        text:{
            sv: 'Ett quiz med frågor hämtade via API. Välj om du ' + 
                'vill besvara mellan 5 och 10 frågor, markera svarsalternativet ' +
                'eller alternativen du tror stämmer och gå vidare till nästa fråga. ' +
                'Om du ångrar ett svar kan du backa så långt du vill innan du väljer ' +
                'att låsa och gå vidare. På resultatsidan visas din totala poäng, ' +
                'varje fråga skrivs ut i en ruta med ditt svar och eventuellt rätt ' +
                'alternativ om det du svarade skulle vara fel.',
            en: 'A quiz with questions fetched via an API. ' +
                'Choose if you want to answer between 5 and 10 questions, select ' +
                'the alternative or alternatives you belive is correct and move ' +
                'on to the next question. If you wish to change an answer on a ' +
                'previous question you may go back as far as you like before ' +
                'locking your solution. On the result screen your total score is ' +
                'shown, every question is printed with your selected answer and ' +
                'possible correct answers if what you chose happend to be incorrect.'
        },
        links:{
            repo:'https://github.com/d-c-k/Quiz',
            page:'https://d-c-k.github.io/Quiz/'
        },
        image:{
            mob:'/img/quiz_screen_mob.jpg',
            desktop:'4',
        }
    }
]

export default work