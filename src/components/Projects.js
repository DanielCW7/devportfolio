import Bootstrap from '../images/bootstrap.jpg';
import Todo from '../images/todo.png';
import Finder from '../images/finder.png';
import Tictac from '../images/tic.png';
import Guess from '../images/guess.png';
import Signup from '../images/signup.png';
import Dash from '../images/dash.png';
import Sass from '../images/sass.png';
import Google from '../images/google.png';
import Concrete from '../images/concrete.png';
import Gallery from '../images/photoGallery.png';
import Directory from '../images/directory.png'


   const projects =  [ {
        name: 'Bootstrap page',
        desc: 'A simple portfolio page built that utilizes Bootstrap. This was the first application I built using this technology, and is one of my personal favorites. I felt that it was easy to comprehend and is a useful addition to my skillset.',
        image: Bootstrap,
        demoLink: 'https://danielcw7.github.io/portfoliobts/',
        codeLink: 'https://github.com/DanielCW7/portfoliobts.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'javascript'},
          {item: 'Bootstrap'},
          {item: 'responsive'}
        ]  
      },
      {
        name: 'Todo app',
        desc: 'The todo app you see here is the first Reactjs app I built myself. It took some time to wrap my head around how to use this new and intimidating technology to make something as simple as a todo app. Regardless, I was able to create a functional application. This is a project I plan on tweaking and polishing in the future!',
        image: Todo,
        demoLink: 'https://danielcw7.github.io/todo/',
        codeLink: 'https://github.com/DanielCW7/todo.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'javascript'},
          {item: 'Reactjs'},
          {item: 'responsive'}
        ]
      },
      {
        name: 'Github finder',
        desc: 'This was easily my most difficult project. It\'s an app that searches for users on Github using an API. It\'s an app that I built alongside a coding instructor to help me better understand Reactjs. I still study how it\'s built every now and then, to gain a deeper understanding of how Reactjs works.',
        image: Finder,
        demoLink: 'https://danielcw7.github.io/github_finder/',
        codeLink: 'https://github.com/DanielCW7/github_finder.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'javascript'},
          {item: 'Reactjs'},
          {item: 'responsive'}
          
        ]
      },
      {
        name: 'Tic Tac Toe',
        desc: 'This application is a simple game of "TIC TAC TOE". I originally tried building it with vanilla javascript, but quickly got lost after my code became garbled and hardly readable. So, I started over and thought maybe jQuery would prove useful. It greatly improved my code readability and I learned how to use jQuery in the process! I also used Sass to practice file organization.',
        image: Tictac,
        demoLink: 'https://danielcw7.github.io/tictactoe/',
        codeLink: 'https://github.com/DanielCW7/tictactoe.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'javascript'},
          {item: 'jQuery'},
          {item: 'Sass'},
          {item: 'responsive'}
        ]
      },
      {
        name: 'Guessing game',
        desc: 'This app was designed to mimic the popular game "Wheel of Fortune". It comes ready with some hard-coded phrases and movie quotes. Though far from complete, it\'s still one of my personal favorites as it helped me learn the basics of javascript.',
        image: Guess,
        demoLink: 'https://danielcw7.github.io/gameshow/',
        codeLink: 'https://github.com/DanielCW7/gameshow.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'javascript'}
        ]
      },
      {
        name: 'Signup sheet',
        desc: 'The sign up sheet was an earlier project of mine. It\'s intent is to emulate a form where you would subscribe to a newsletter.',
        image: Signup,
        demoLink: 'https://danielcw7.github.io/signup/',
        codeLink: 'https://github.com/DanielCW7/signup.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'responsive'}
        ]
      },
      {
        name: 'Dashboard',
        desc: 'The Dashboard app makes use of a plugin for displaying charts, such as the pie chart, bar, and line graph.',
        image: Dash,
        demoLink: 'https://danielcw7.github.io/dashboard/',
        codeLink: 'https://github.com/DanielCW7/dashboard.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'javascript'},
          {item: 'responsive'}

        ]
      },
      {
        name: 'Sass page',
        desc: 'This application was built with the intent to demonstrate the usefullness of the preprocessor "Sass". It showed me how to keep my files organized, which has helped me tremendously on my coding journey!',
        image: Sass,
        demoLink: 'https://danielcw7.github.io/sass/',
        codeLink: 'https://github.com/DanielCW7/sass.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'Sass'},
          {item: 'responsive'}
        ]
      },
      {
        name: 'Google clone',
        desc: 'This is a simple re-rendering of Google\'s home page. No other functionality is factored in, as it is only intended to recreate the appearance of the popular search engine.',
        image: Google,
        demoLink: 'https://danielcw7.github.io/Google_home/',
        codeLink: 'https://github.com/DanielCW7/Google_home.git',
        attr: [
          {item: 'html'},
          {item: 'css'}
        ]
      },
      {
        name: 'Yield calculator',
        desc: 'The Yield calculator is an incredibly useful application where someone may need to calculate the amount of concrete needed for a job. It uses javascript to figure out the provided measurements and produce two results based on need. The inspiration for this app had to do with my educational background being rooted in concrete construction!',
        image: Concrete,
        demoLink: 'https://danielcw7.github.io/yield_calculator/',
        codeLink: 'https://github.com/DanielCW7/yield_calculator.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'javascript'},
          {item: 'responsive'}
        ]
      },
      {
        name: 'Photo gallery',
        desc: 'This application is intended to demonstrate the javascript filter function, where a list of data is filtered to return matching results. This list contains an array of images with descriptons. The filter function loops over every description to compare with the search bar and returns their respective images.',
        image: Gallery,
        demoLink: 'https://danielcw7.github.io/gallery/',
        codeLink: 'https://github.com/DanielCW7/gallery.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'javascript'},
          {item: 'responsive'}          
        ]
      },
      {
        name: 'Employee generator',
        desc: 'This application utilizes an API to randomly generate employees in the form of a diectory. It introduced me to APIs and to this day, I consider it a helpful reference.',
        image: Directory,
        demoLink: 'https://danielcw7.github.io/directory/',
        codeLink: 'https://github.com/DanielCW7/directory.git',
        attr: [
          {item: 'html'},
          {item: 'css'},
          {item: 'javascript'},
          {item: 'responsive'}
        ]
      }
    ]

    export default projects