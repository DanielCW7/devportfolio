(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},35:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(1),s=i.n(n),c=i(20),o=i.n(c),r=(i(27),i(4)),l=i(5),d=i(7),h=i(6),j=(i(28),i(29),i(8)),p=i(9),m=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).remove=e.remove.bind(Object(j.a)(e)),e}return Object(l.a)(i,[{key:"remove",value:function(){document.getElementById("introContainer").style.display="none"}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("div",{id:"introContainer",children:[Object(a.jsxs)("div",{id:"animContainer",children:[Object(a.jsxs)("div",{id:"introName",children:[Object(a.jsx)("h1",{children:" Connor Wilson "}),Object(a.jsx)("h4",{children:" WEB DEVELOPER "})]}),Object(a.jsxs)(p.b,{to:"/Home",children:[Object(a.jsx)("div",{id:"square1"}),Object(a.jsx)("div",{id:"square2"}),Object(a.jsx)("div",{id:"square3"}),Object(a.jsx)("button",{id:"introButton",children:" ENTER "})]})]}),Object(a.jsx)("div",{id:"backgroundStyle1"}),Object(a.jsx)("div",{id:"backgroundStyle2"})]})})}}]),i}(n.Component),b=i.p+"static/media/grass.eb7fafe9.jpg",g=i.p+"static/media/pc.004333f5.jpg",u=i.p+"static/media/light2.1926c478.jpg",x=i.p+"static/media/pc3.7e913781.jpg",f=i.p+"static/media/sky.a59e0443.jpg",O=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsxs)("div",{id:"header",children:[Object(a.jsx)("img",{src:u,alt:"header"}),Object(a.jsxs)("div",{id:"headerText",className:"center",children:[Object(a.jsx)("h1",{style:{color:"white"},children:" Welcome to my portfolio page! "}),Object(a.jsx)("p",{children:" My name is Connor Wilson and I'm a front-end web developer looking for my next big challenge! "})]})]})}),Object(a.jsxs)("div",{id:"homeGridContainer",children:[Object(a.jsxs)("div",{id:"homeGrid",children:[Object(a.jsx)(p.b,{to:"/Project",style:{textDecoration:"none"},children:Object(a.jsxs)("section",{id:"projectHome",className:"homeLeftCard",children:[Object(a.jsx)("h1",{children:" Projects "}),Object(a.jsx)("p",{children:" Here you can see some of my most notable projects. "}),Object(a.jsx)("img",{src:g,alt:"projects"}),Object(a.jsx)("div",{id:"projectHomeText",children:"  Here you can see some of my most notable projects.  "})]})}),Object(a.jsx)(p.b,{to:"/Gallery",style:{textDecoration:"none"},children:Object(a.jsxs)("section",{id:"galleryHome",className:"homeRightCard",children:[Object(a.jsx)("h1",{children:" Gallery "}),Object(a.jsx)("p",{children:" Learn more about me by seeing what I love to spend my time doing when i'm not coding! "}),Object(a.jsx)("div",{id:"galleryHomeText",children:" Learn more about me by seeing what I love to spend my time doing when i'm not coding! "}),Object(a.jsx)("img",{src:b,alt:"gallery"})]})}),Object(a.jsx)(p.b,{to:"/Contact",style:{textDecoration:"none"},children:Object(a.jsxs)("section",{id:"contactHome",className:"homeLeftCard",children:[Object(a.jsx)("h1",{children:" Contact "}),Object(a.jsx)("p",{children:" Download my resume and view my contact information here. "}),Object(a.jsx)("img",{src:x,alt:""}),Object(a.jsx)("div",{id:"contactHomeText",children:"  Download my resume and view my contact information here.  "})]})}),Object(a.jsxs)("section",{id:"aboutHomeLG",children:[Object(a.jsx)("img",{src:f,alt:"about"}),Object(a.jsxs)("div",{id:"aboutText",children:[Object(a.jsx)("h1",{style:{color:"white"},children:" About "}),Object(a.jsx)("p",{children:"I graduated from Middle Tennessee State University with a degree in concrete construction. I started teaching myself to code in late 2019, later enrolling into Treehouse's Front-End web developer techdegree, and finishing in 7 months. They taught me a lot about responsive web design, D.R.Y. coding principles, best practices, etc. Since then, I've built several useful applications like calculators, portfolio pages, and even a simple game!"})]})]})]}),Object(a.jsxs)("section",{id:"aboutHome",children:[Object(a.jsx)("img",{src:f,alt:"about"}),Object(a.jsxs)("div",{id:"aboutText",children:[Object(a.jsx)("h1",{children:" About "}),Object(a.jsx)("p",{children:" I graduated Middle Tennessee State University with a degree in concrete construction. I started teaching myself to code in late 2019, later enrolled into Treehouse's Front-End web developer techdegree, and finishing in 7 months. They taught me a lot about responsive web design, D.R.Y. coding principles, best practices, etc. Since then, I've built several useful applications like calculators, portfolio pages, and even a simple game! "})]})]})]})]})}}]),i}(n.Component),v=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).expand=e.expand.bind(Object(j.a)(e)),e.minimize=e.minimize.bind(Object(j.a)(e)),e.sticky=e.sticky.bind(Object(j.a)(e)),e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.sticky)}},{key:"sticky",value:function(){var e=document.getElementById("mapIcn"),t=e.offsetTop;window.pageYOffset>=t&&window.pageYOffset>=30?(e.classList.add("sticky"),e.classList.remove("centered")):(e.classList.remove("sticky"),e.classList.add("centered"))}},{key:"expand",value:function(){document.getElementById("expandedNav").style.display="block"}},{key:"minimize",value:function(){document.getElementById("expandedNav").style.display="none"}},{key:"render",value:function(){return window.addEventListener("mousemove",(function(e){var t,i,a,n,s,c,o,r=e.x,l=e.y,d=window.innerWidth/2,h=window.innerHeight/2,j=document.getElementById("compass");if(r<window.innerWidth/2&&l<window.innerHeight/2)t=0,i=window.innerHeight/2,a=Math.sqrt(Math.pow(t-d,2)+Math.pow(i-h,2)).toFixed(2),n=Math.sqrt(Math.pow(r-d,2)+Math.pow(l-h,2)).toFixed(2),s=Math.sqrt(Math.pow(r-t,2)+Math.pow(l-i,2)).toFixed(2),c=(Math.pow(a,2)+Math.pow(n,2)-Math.pow(s,2))/(a*n*2),o=(Math.acos(c)*(180/Math.PI)).toFixed(2),j.style.transform=" translateY(-13%) rotate(".concat(o-90,"deg)");else if(r>window.innerWidth/2&&l>window.innerHeight/2)t=window.innerWidth,i=window.innerHeight/2,a=Math.sqrt(Math.pow(t-d,2)+Math.pow(i-h,2)).toFixed(2),n=Math.sqrt(Math.pow(r-d,2)+Math.pow(l-h,2)).toFixed(2),s=Math.sqrt(Math.pow(r-t,2)+Math.pow(l-i,2)).toFixed(2),c=(Math.pow(a,2)+Math.pow(n,2)-Math.pow(s,2))/(a*n*2),o=(Math.acos(c)*(180/Math.PI)).toFixed(2),j.style.transform=" translateY(-13%) rotate(".concat(o-90,"deg)");else if(r<window.innerWidth/2&&l>window.innerHeight/2)t=window.innerWidth/2,i=window.innerHeight,a=Math.sqrt(Math.pow(t-d,2)+Math.pow(i-h,2)).toFixed(2),n=Math.sqrt(Math.pow(r-d,2)+Math.pow(l-h,2)).toFixed(2),s=Math.sqrt(Math.pow(r-t,2)+Math.pow(l-i,2)).toFixed(2),c=(Math.pow(a,2)+Math.pow(n,2)-Math.pow(s,2))/(a*n*2),o=(Math.acos(c)*(180/Math.PI)).toFixed(2),j.style.transform=" translateY(-13%) rotate(".concat(o+90,"deg)");else{if(!(r>window.innerWidth/2&&l<window.innerHeight/2))return;t=window.innerWidth/2,i=0,a=Math.sqrt(Math.pow(t-d,2)+Math.pow(i-h,2)).toFixed(2),n=Math.sqrt(Math.pow(r-d,2)+Math.pow(l-h,2)).toFixed(2),s=Math.sqrt(Math.pow(r-t,2)+Math.pow(l-i,2)).toFixed(2),c=(Math.pow(a,2)+Math.pow(n,2)-Math.pow(s,2))/(a*n*2),o=(Math.acos(c)*(180/Math.PI)).toFixed(2),j.style.transform=" translateY(-13%) rotate(".concat(o,"deg)")}})),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"titleName",children:[Object(a.jsx)("h2",{children:" Connor Wilson "}),Object(a.jsx)("h4",{className:"pullUp",children:" WEB DEV "})]}),Object(a.jsx)("div",{id:"navIconBackground",onClick:this.expand,children:Object(a.jsx)("div",{id:"mobileNavIcon",children:Object(a.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1366 768",enableBackground:"new 0 0 1366 768",children:[Object(a.jsxs)("g",{children:[Object(a.jsx)("path",{fill:"white",d:"M82.5,165.5c-45.21,0-82-36.79-82-82s36.79-82,82-82h1200c45.21,0,82,36.79,82,82s-36.79,82-82,82H82.5z"}),Object(a.jsx)("path",{d:"M1282.5,2c44.94,0,81.5,36.56,81.5,81.5s-36.56,81.5-81.5,81.5H82.5C37.56,165,1,128.44,1,83.5S37.56,2,82.5,2H1282.5\r M1282.5,1H82.5C36.94,1,0,37.94,0,83.5S36.94,166,82.5,166h1200c45.56,0,82.5-36.94,82.5-82.5S1328.06,1,1282.5,1L1282.5,1z"})]}),Object(a.jsxs)("g",{children:[Object(a.jsx)("path",{fill:"white",d:"M83,466.5c-45.21,0-82-36.79-82-82s36.79-82,82-82h1200c45.21,0,82,36.79,82,82s-36.79,82-82,82H83z"}),Object(a.jsx)("path",{d:"M1283,303c44.94,0,81.5,36.56,81.5,81.5c0,44.94-36.56,81.5-81.5,81.5H83c-44.94,0-81.5-36.56-81.5-81.5\r C1.5,339.56,38.06,303,83,303H1283 M1283,302H83c-45.56,0-82.5,36.94-82.5,82.5v0C0.5,430.06,37.44,467,83,467h1200\r c45.56,0,82.5-36.94,82.5-82.5v0C1365.5,338.94,1328.56,302,1283,302L1283,302z"})]}),Object(a.jsxs)("g",{children:[Object(a.jsx)("path",{fill:"white",d:"M83.5,767.5c-45.21,0-82-36.79-82-82s36.79-82,82-82h1200c45.21,0,82,36.79,82,82s-36.79,82-82,82H83.5z"}),Object(a.jsx)("path",{d:"M1283.5,604c44.94,0,81.5,36.56,81.5,81.5s-36.56,81.5-81.5,81.5H83.5C38.56,767,2,730.44,2,685.5S38.56,604,83.5,604\r H1283.5 M1283.5,603H83.5C37.94,603,1,639.94,1,685.5S37.94,768,83.5,768h1200c45.56,0,82.5-36.94,82.5-82.5\r S1329.06,603,1283.5,603L1283.5,603z"})]})]})})}),Object(a.jsx)("div",{id:"mapIcn",className:"centered",onClick:this.expand,onScroll:this.sticky,children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"48",height:"48",viewBox:"0 0 172 172",children:Object(a.jsxs)("g",{fill:"none",fillRule:"nonzero",stroke:"none",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",strokeDasharray:"",strokeDashoffset:"0",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",children:[Object(a.jsx)("path",{d:"M0,172v-172h172v172z",fill:"none"}),Object(a.jsx)("g",{fill:"#2ecc71",children:Object(a.jsx)("path",{d:"M86,14.33333c-27.70633,0 -50.16667,22.46033 -50.16667,50.16667c0,28.423 31.562,70.37667 44.61967,86.50883c2.86667,3.54033 8.22733,3.54033 11.094,0c13.05767,-16.13217 44.61967,-58.08583 44.61967,-86.50883c0,-27.70633 -22.46033,-50.16667 -50.16667,-50.16667zM86,82.41667c-9.89717,0 -17.91667,-8.0195 -17.91667,-17.91667c0,-9.89717 8.0195,-17.91667 17.91667,-17.91667c9.89717,0 17.91667,8.0195 17.91667,17.91667c0,9.89717 -8.0195,17.91667 -17.91667,17.91667z"})})]})})}),Object(a.jsx)("div",{id:"expandedNav",children:Object(a.jsxs)("div",{id:"mobileBackground",children:[Object(a.jsx)(p.b,{to:"/Home",id:"homeNav",onClick:this.minimize,children:Object(a.jsx)("h2",{children:" Home "})}),Object(a.jsx)(p.b,{to:"/Project",id:"projectNav",onClick:this.minimize,children:Object(a.jsx)("h2",{children:" Projects "})}),Object(a.jsx)(p.b,{to:"/Contact",id:"contactNav",onClick:this.minimize,children:Object(a.jsx)("h2",{children:" Contact "})}),Object(a.jsx)(p.b,{to:"/Gallery",id:"galleryNav",onClick:this.minimize,children:Object(a.jsx)("h2",{children:" Gallery "})}),Object(a.jsx)("h2",{id:"navX",onClick:this.minimize,children:" X "}),Object(a.jsx)("div",{id:"compassIcnBG",children:Object(a.jsx)("svg",{id:"compass",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"96",height:"96",viewBox:"0 0 172 172",children:Object(a.jsxs)("g",{fill:"none",fillRule:"nonzero",stroke:"none",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",strokeDasharray:"",strokeDashoffset:"0",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",children:[Object(a.jsx)("path",{d:"M0,172v-172h172v172z",fill:"none"}),Object(a.jsx)("g",{fill:"black",children:Object(a.jsx)("path",{d:"M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM121.23145,46.82129c2.61239,-0.30355 4.86068,2.42849 3.62532,5.08105l-20.9541,45.04362c-1.42617,3.06733 -3.88937,5.53054 -6.9567,6.9567l-45.04362,20.9541c-3.0315,1.41183 -6.17095,-1.72761 -4.75911,-4.75912l20.9541,-45.04362c1.42617,-3.06017 3.88937,-5.53054 6.9567,-6.9567l45.04362,-20.9541c0.37894,-0.17648 0.76059,-0.27858 1.1338,-0.32194zM86,78.11947c-4.37167,0 -7.88053,3.50886 -7.88053,7.88053c0,4.37167 3.50886,7.88053 7.88053,7.88053c4.37167,0 7.88053,-3.50886 7.88053,-7.88053c0,-4.37167 -3.50886,-7.88053 -7.88053,-7.88053z"})})]})})})]})})]})}}]),i}(n.Component),w=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).scroll=e.scroll.bind(Object(j.a)(e)),e}return Object(l.a)(i,[{key:"scroll",value:function(){document.documentElement.scrollTop=0}},{key:"render",value:function(){return Object(a.jsx)("div",{onClick:this.scroll,id:"toTopContainer",children:Object(a.jsx)("div",{id:"toTop",children:"\u2191"})})}}]),i}(s.a.Component),y=i(2),k=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).expand=a.expand.bind(Object(j.a)(a)),a.minimize=a.minimize.bind(Object(j.a)(a)),a}return Object(l.a)(i,[{key:"expand",value:function(e){var t=e.target.nextElementSibling;t.classList.remove("collapsedProject"),t.classList.add("expandedProject")}},{key:"minimize",value:function(e){var t=e.target.offsetParent;t.classList.remove("expandedProject"),t.classList.add("collapsedProject")}},{key:"render",value:function(){var e=this.props.attr.map((function(e){return Object(a.jsxs)("div",{className:"attributes",children:[" ",e.item," "]},e.item)}));return Object(a.jsxs)("div",{className:"center",children:[Object(a.jsxs)("h2",{children:[" ",this.props.name," "]}),Object(a.jsx)("div",{className:"projectCard",children:Object(a.jsx)("img",{src:this.props.image,alt:this.props.name})}),Object(a.jsx)("button",{onClick:this.expand,className:"projectExpandBtn",children:" Info "}),Object(a.jsxs)("div",{className:"collapsedProject",children:[Object(a.jsx)("img",{className:"collapsedProjectImage",src:this.props.image,alt:this.props.name}),Object(a.jsxs)("h1",{children:[" ",this.props.name," "]}),Object(a.jsx)("div",{className:"attrContainer",children:Object(a.jsxs)("div",{children:[" ",e," "]})}),Object(a.jsxs)("div",{className:"projectDesc",children:[" ",this.props.desc," "]}),Object(a.jsxs)("div",{className:"buttonContainer",children:[Object(a.jsx)("a",{href:this.props.demoLink,children:Object(a.jsx)("button",{className:"demoBtn",children:" Demo "})}),Object(a.jsx)("button",{onClick:this.minimize,children:" \u2613 "}),Object(a.jsx)("a",{href:this.props.codeLink,children:Object(a.jsx)("button",{className:"srcBtn",children:" Source "})})]})]})]})}}]),i}(s.a.Component),M=i.p+"static/media/desk3.dfd80248.jpg",L=[{name:"Bootstrap page",desc:"A simple portfolio page built that utilizes Bootstrap. This was the first application I built using this technology, and is one of my personal favorites. I felt that it was easy to comprehend and is a useful addition to my skillset.",image:i.p+"static/media/bootstrap.da126bba.png",demoLink:"https://danielcw7.github.io/portfoliobts/",codeLink:"https://github.com/DanielCW7/portfoliobts.git",attr:[{item:"html"},{item:"css"},{item:"javascript"},{item:"Bootstrap"},{item:"responsive"}]},{name:"Todo app",desc:"The todo app you see here is the first Reactjs app I built myself. It took some time to wrap my head around how to use this new and intimidating technology to make something as simple as a todo app. Regardless, I was able to create a functional application. This is a project I plan on tweaking and polishing in the future!",image:i.p+"static/media/todo.ed0a8e01.png",demoLink:"https://danielcw7.github.io/todo/",codeLink:"https://github.com/DanielCW7/todo.git",attr:[{item:"html"},{item:"css"},{item:"javascript"},{item:"Reactjs"},{item:"responsive"}]},{name:"Github finder",desc:"This was easily my most difficult project. It's an app that searches for users on Github using an API. It's an app that I built alongside a coding instructor to help me better understand Reactjs. I still study how it's built every now and then, to gain a deeper understanding of how Reactjs works.",image:i.p+"static/media/finder.520691df.png",demoLink:"https://danielcw7.github.io/github_finder/",codeLink:"https://github.com/DanielCW7/github_finder.git",attr:[{item:"html"},{item:"css"},{item:"javascript"},{item:"Reactjs"},{item:"responsive"}]},{name:"Tic Tac Toe",desc:'This application is a simple game of "TIC TAC TOE". I originally tried building it with vanilla javascript, but quickly got lost after my code became garbled and hardly readable. So, I started over and thought maybe jQuery would prove useful. It greatly improved my code readability and I learned how to use jQuery in the process! I also used Sass to practice file organization.',image:i.p+"static/media/tic.f5e04a6c.png",demoLink:"https://danielcw7.github.io/tictactoe/",codeLink:"https://github.com/DanielCW7/tictactoe.git",attr:[{item:"html"},{item:"css"},{item:"javascript"},{item:"jQuery"},{item:"Sass"},{item:"responsive"}]},{name:"Guessing game",desc:'This app was designed to mimic the popular game "Wheel of Fortune". It comes ready with some hard-coded phrases and movie quotes. Though far from complete, it\'s still one of my personal favorites as it helped me learn the basics of javascript.',image:i.p+"static/media/guess.90a480ad.png",demoLink:"https://danielcw7.github.io/gameshow/",codeLink:"https://github.com/DanielCW7/gameshow.git",attr:[{item:"html"},{item:"css"},{item:"javascript"}]},{name:"Signup sheet",desc:"The sign up sheet was an earlier project of mine. It's intent is to emulate a form where you would subscribe to a newsletter.",image:i.p+"static/media/signup.74633d11.png",demoLink:"https://danielcw7.github.io/signup/",codeLink:"https://github.com/DanielCW7/signup.git",attr:[{item:"html"},{item:"css"},{item:"responsive"}]},{name:"Dashboard",desc:"The Dashboard app makes use of a plugin for displaying charts, such as the pie chart, bar, and line graph.",image:i.p+"static/media/dash.766333ba.png",demoLink:"https://danielcw7.github.io/dashboard/",codeLink:"https://github.com/DanielCW7/dashboard.git",attr:[{item:"html"},{item:"css"},{item:"javascript"},{item:"responsive"}]},{name:"Sass page",desc:'This application was built with the intent to demonstrate the usefullness of the preprocessor "Sass". It showed me how to keep my files organized, which has helped me tremendously on my coding journey!',image:i.p+"static/media/sass.a7e0058f.png",demoLink:"https://danielcw7.github.io/sass/",codeLink:"https://github.com/DanielCW7/sass.git",attr:[{item:"html"},{item:"css"},{item:"Sass"},{item:"responsive"}]},{name:"Google clone",desc:"This is a simple re-rendering of Google's home page. No other functionality is factored in, as it is only intended to recreate the appearance of the popular search engine.",image:i.p+"static/media/google.380bdd64.png",demoLink:"https://danielcw7.github.io/Google_home/",codeLink:"https://github.com/DanielCW7/Google_home.git",attr:[{item:"html"},{item:"css"}]},{name:"Yield calculator",desc:"The Yield calculator is an incredibly useful application where someone may need to calculate the amount of concrete needed for a job. It uses javascript to figure out the provided measurements and produce two results based on need. The inspiration for this app had to do with my educational background being rooted in concrete construction!",image:i.p+"static/media/concrete.54e7418a.png",demoLink:"https://danielcw7.github.io/yield_calculator/",codeLink:"https://github.com/DanielCW7/yield_calculator.git",attr:[{item:"html"},{item:"css"},{item:"javascript"},{item:"responsive"}]},{name:"Photo gallery",desc:"This application is intended to demonstrate the javascript filter function, where a list of data is filtered to return matching results. This list contains an array of images with descriptons. The filter function loops over every description to compare with the search bar and returns their respective images.",image:i.p+"static/media/photoGallery.7c367655.png",demoLink:"https://danielcw7.github.io/gallery/",codeLink:"https://github.com/DanielCW7/gallery.git",attr:[{item:"html"},{item:"css"},{item:"javascript"},{item:"responsive"}]},{name:"Employee generator",desc:"This application utilizes an API to randomly generate employees in the form of a diectory. It introduced me to APIs and to this day, I consider it a helpful reference.",image:i.p+"static/media/directory.9f1dd863.png",demoLink:"https://danielcw7.github.io/directory/",codeLink:"https://github.com/DanielCW7/directory.git",attr:[{item:"html"},{item:"css"},{item:"javascript"},{item:"responsive"}]}],C=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={projects:L},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.projects.map((function(e){return Object(a.jsx)(k,{name:e.name,desc:e.desc,image:e.image,demoLink:e.demoLink,codeLink:e.codeLink,attr:e.attr},e.name)}));return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"header",style:{marginBottom:"20px"},children:[Object(a.jsx)("img",{src:M,alt:""}),Object(a.jsxs)("div",{id:"headerText",className:"center",children:[Object(a.jsx)("h1",{style:{color:"white"},children:" Projects "}),Object(a.jsx)("p",{children:" Here you'll find a collection of some of my favorite projects. "})]})]}),Object(a.jsx)("div",{className:"projectCardContainer",children:e}),Object(a.jsx)("br",{})]})}}]),i}(n.Component),I=i.p+"static/media/pc4.ba1e41c2.jpg",z=i.p+"static/media/resume.2b8320ba.pdf";var N=function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"header",children:[Object(a.jsx)("img",{src:I,alt:""}),Object(a.jsxs)("div",{id:"headerText",className:"center",children:[Object(a.jsx)("h1",{style:{color:"white"},children:" Contact "}),Object(a.jsx)("p",{children:" Download my resume and let's connect! "})]})]}),Object(a.jsxs)("div",{id:"contactSection",children:[Object(a.jsxs)("div",{className:"center",id:"resume",children:[Object(a.jsx)("span",{className:"decoration",children:"\u2913"}),Object(a.jsxs)("h4",{children:["Preview and download my resume ",Object(a.jsx)("a",{href:z,target:"_blank",rel:"noreferrer",children:" here "})]})]}),Object(a.jsxs)("div",{id:"email",children:[Object(a.jsx)("span",{className:"decoration",children:"\u2709"}),Object(a.jsx)("h4",{children:" Dev.danielcw@gmail.com "})]}),Object(a.jsxs)("div",{id:"phoneNum",children:[Object(a.jsx)("span",{className:"decoration",children:"\u260e"}),Object(a.jsx)("h4",{children:" (615) 796-4896 "})]})]}),Object(a.jsxs)("div",{id:"contactGrid",children:[Object(a.jsx)("a",{href:"https://www.facebook.com/connor.wilson.359",children:Object(a.jsx)("div",{className:"contactItem center",id:"facebook",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"48",height:"48",viewBox:"0 0 172 172",style:{transform:"translateY(30%)"},children:Object(a.jsx)("g",{transform:"",children:Object(a.jsxs)("g",{fill:"none",fillRule:"nonzero",stroke:"none",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",strokeDasharray:"",strokeDashoffset:"0",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",children:[Object(a.jsx)("path",{d:"M0,172v-172h172v172z",fill:"none"}),Object(a.jsx)("path",{d:"",fill:"none"}),Object(a.jsxs)("g",{children:[Object(a.jsx)("path",{d:"M86,17.91667c-37.60139,0 -68.08333,30.48195 -68.08333,68.08333c0,37.60139 30.48195,68.08333 68.08333,68.08333c37.60139,0 68.08333,-30.48195 68.08333,-68.08333c0,-37.60139 -30.48195,-68.08333 -68.08333,-68.08333z",fill:"#039be5"}),Object(a.jsx)("path",{d:"M95.21633,104.04567h17.61925l2.76633,-17.89875h-20.38917v-9.7825c0,-7.43542 2.4295,-14.02875 9.38475,-14.02875h11.17642v-15.61975c-1.96367,-0.26517 -6.11675,-0.84567 -13.96425,-0.84567c-16.38658,0 -25.9935,8.65375 -25.9935,28.36925v11.90742h-16.84525v17.89875h16.84525v49.19558c3.33608,0.50167 6.71517,0.84208 10.18383,0.84208c3.13542,0 6.19558,-0.28667 9.21633,-0.69517z",fill:"#ffffff"})]})]})})})})}),Object(a.jsx)("a",{href:"https://github.com/DanielCW7",children:Object(a.jsx)("div",{className:"contactItem center",id:"github",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50",height:"50",viewBox:"0 0 172 172",style:{transform:"translateY(35%)"},children:Object(a.jsx)("g",{transform:"",children:Object(a.jsxs)("g",{fill:"none",fillRule:"nonzero",stroke:"none",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",strokeDasharray:"",strokeDashoffset:"0",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",children:[Object(a.jsx)("path",{d:"M0,172v-172h172v172z",fill:"none"}),Object(a.jsx)("path",{d:"",fill:"none"}),Object(a.jsx)("path",{d:"",fill:"none"}),Object(a.jsx)("path",{d:"",fill:"none"}),Object(a.jsx)("path",{d:"",fill:"none"}),Object(a.jsx)("path",{d:"",fill:"none"}),Object(a.jsx)("path",{d:"",fill:"none"}),Object(a.jsx)("g",{fill:"#ffffff",children:Object(a.jsx)("path",{d:"M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,32.23853 22.19947,59.21387 52.12747,66.67867c-0.32107,-0.9288 -0.52747,-2.00667 -0.52747,-3.34253v-11.75907c-2.79213,0 -7.47053,0 -8.64587,0c-4.70707,0 -8.8924,-2.02387 -10.922,-5.78493c-2.2532,-4.1796 -2.64307,-10.57227 -8.22733,-14.4824c-1.65693,-1.30147 -0.3956,-2.7864 1.5136,-2.58573c3.526,0.9976 6.45,3.41707 9.202,7.00613c2.74053,3.5948 4.03053,4.40893 9.1504,4.40893c2.48253,0 6.19773,-0.14333 9.69507,-0.69373c1.88053,-4.77587 5.13133,-9.17333 9.10453,-11.2488c-22.9104,-2.3564 -33.84387,-13.75427 -33.84387,-29.22853c0,-6.66213 2.838,-13.1064 7.65973,-18.53587c-1.5824,-5.38933 -3.57187,-16.38013 0.60773,-20.56547c10.30853,0 16.54067,6.68507 18.03707,8.49107c5.13707,-1.76013 10.77867,-2.75773 16.70693,-2.75773c5.93973,0 11.60427,0.9976 16.7528,2.7692c1.4792,-1.79453 7.71707,-8.50253 18.04853,-8.50253c4.1968,4.19107 2.1844,15.22773 0.5848,20.6056c4.79307,5.418 7.61387,11.84507 7.61387,18.49573c0,15.4628 -10.91627,26.85493 -33.79227,29.2228c6.2952,3.2852 10.8876,12.51587 10.8876,19.4704v15.67493c0,0.59627 -0.13187,1.02627 -0.20067,1.53653c26.80907,-9.39693 46.06733,-34.85293 46.06733,-64.87267c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z"})})]})})})})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/daniel-wilson-a67706177/",children:Object(a.jsx)("div",{className:"contactItem center",id:"linkedin",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"90",height:"90",viewBox:"0 0 172 172",style:{transform:"translateY(33%)"},children:Object(a.jsxs)("g",{fill:"none",fillRule:"nonzero",stroke:"none",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",strokeDasharray:"",strokeDashoffset:"0",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",children:[Object(a.jsx)("path",{d:"M0,172v-172h172v172z",fill:"none"}),Object(a.jsx)("path",{d:"M64.844,111.8c-2.56481,0 -4.644,-2.07919 -4.644,-4.644v-42.312c0,-2.56481 2.07919,-4.644 4.644,-4.644h42.312c2.56481,0 4.644,2.07919 4.644,4.644v42.312c0,2.56481 -2.07919,4.644 -4.644,4.644z",fill:"white"}),Object(a.jsx)("g",{fill:"#3498db",children:Object(a.jsx)("path",{d:"M114.09557,51.6h-56.19114c-3.43776,0 -6.30443,2.86667 -6.30443,6.30443v56.19114c0,3.43776 2.86667,6.30443 6.30443,6.30443h56.19114c3.43776,0 6.30443,-2.86667 6.30443,-6.30443v-56.19114c0,-3.43776 -2.86667,-6.30443 -6.30443,-6.30443zM71.66667,108.93333h-11.46667v-31.53333h11.46667zM65.93333,73.67109c-3.43776,0 -5.73333,-2.29557 -5.73333,-5.16224c0,-3.14662 2.29557,-5.44219 5.73333,-5.44219c3.43776,0 5.73333,2.29557 5.73333,5.16224c0,3.14662 -2.29557,5.44219 -5.73333,5.44219zM111.8,108.93333h-11.46667v-17.2c0,-4.59114 -3.15781,-5.73333 -4.00885,-5.73333c-0.86224,0 -4.59115,0.57109 -4.59115,5.73333c0,0.57109 0,17.2 0,17.2h-11.46667v-31.53333h11.46667v4.59115c1.72448,-2.58672 4.59115,-4.59115 10.03333,-4.59115c5.44219,0 10.03333,4.3 10.03333,14.33333z"})})]})})})})]})]})},T=i.p+"static/media/light.7c6c08ac.jpg",H=i.p+"static/media/cedar.d1a4e4f7.jpg",D=i.p+"static/media/floor.158e577a.jpg",W=i.p+"static/media/grass.eb7fafe9.jpg",P=i.p+"static/media/grass2.0cf2453a.jpg",F=i.p+"static/media/grass3.310e9517.jpg",B=i.p+"static/media/leaf.b0937ae2.jpg",E=i.p+"static/media/leaf2.f634e48c.jpg",S=i.p+"static/media/leaf3.ccf596af.jpg",G=i.p+"static/media/plant.61399987.jpg",q=i.p+"static/media/plant2.62fb8799.jpg",R=i.p+"static/media/tree.9a0a523c.jpg",A=i.p+"static/media/tree2.b1bcde60.jpg",Y=i.p+"static/media/tree3.502cdcdf.jpg",X=i.p+"static/media/tree4.1da9cd74.jpg",_=i.p+"static/media/post.d9a8123d.jpg",U=i.p+"static/media/horse.5d9fbb5f.jpg",Q=i.p+"static/media/horse2.3e20f65d.jpg",J=i.p+"static/media/horse3.f158eee0.jpg",V=i.p+"static/media/horse4.4a0c2cc4.jpg",K=i.p+"static/media/horse5.fec6fda1.jpg",Z=i.p+"static/media/horse6.eb4bb362.jpg",$=i.p+"static/media/horse7.d3b31c47.jpg",ee=i.p+"static/media/horse8.6e9d7305.jpg",te=i.p+"static/media/horse9.60d1a886.jpg",ie=i.p+"static/media/horse10.27c61655.jpg",ae=i.p+"static/media/horse11.c1432a61.jpg",ne=i.p+"static/media/horse12.7b8479da.jpg",se=i.p+"static/media/dog.a2ad04ed.jpg",ce=i.p+"static/media/cap.fed9563a.jpg",oe=i.p+"static/media/cap2.55a3217f.jpg",re=i.p+"static/media/eye.3aa507f4.jpg",le=i.p+"static/media/gal.19016c14.jpg",de=i.p+"static/media/chief.3936b6a1.jpg",he=i.p+"static/media/robert.0ca3f377.jpg",je=[{alt:"Cedar",land:H},{alt:"Floor",land:D},{alt:"Grass",land:W},{alt:"Grass2",land:P},{alt:"Grass3",land:F},{alt:"Leaf",land:B},{alt:"Leaf2",land:E},{alt:"Leaf3",land:S},{alt:"Plant",land:G},{alt:"Plant2",land:q},{alt:"Tree",land:R},{alt:"Tree2",land:A},{alt:"Tree3",land:Y},{alt:"Tree4",land:X},{alt:"Post",land:_},{alt:"Light",land:T},{alt:"Light2",land:u},{alt:"Horse",animal:U},{alt:"Horse2",animal:Q},{alt:"Horse3",animal:J},{alt:"Horse4",animal:V},{alt:"Horse5",animal:K},{alt:"Horse6",animal:Z},{alt:"Horse7",animal:$},{alt:"Horse8",animal:ee},{alt:"Horse9",animal:te},{alt:"Horse10",animal:ie},{alt:"Horse11",animal:ae},{alt:"Horse12",animal:ne},{alt:"Dog",animal:se},{alt:"Robert Pattinson drawing",drawing:he},{alt:"Gal Gadot drawing",drawing:le},{alt:"Chris Evans drawing",drawing:ce},{alt:"Chris Evans drawing 2",drawing:oe},{alt:"Master Chief drawing",drawing:de},{alt:"Eye drawing",drawing:re}],pe=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={photos:je},e.selection=e.selection.bind(Object(j.a)(e)),e.expand=e.expand.bind(Object(j.a)(e)),e.minimize=e.minimize.bind(Object(j.a)(e)),e}return Object(l.a)(i,[{key:"expand",value:function(e){var t=e.target.offsetParent,i=e.target.nextSibling;t.classList.remove("photo"),t.classList.add("expandedPhoto"),i.style.display="block"}},{key:"minimize",value:function(e){var t=e.target.offsetParent;e.target.style.display="none",t.classList.remove("expandedPhoto"),t.classList.add("photo")}},{key:"selection",value:function(e){var t=e.target.id,i=document.getElementById("land"),a=document.getElementById("drawing"),n=document.getElementById("animals");if("drawingLabel"===t)a.style.display="",i.style.display="none",n.style.display="none";else if("landLabel"===t)i.style.display="",a.style.display="none",n.style.display="none";else if("animalsLabel"===t)n.style.display="",a.style.display="none",i.style.display="none";else{if("all"!==t)return null;a.style.display="",i.style.display="",n.style.display=""}}},{key:"render",value:function(){var e=this,t=this.state.photos.map((function(t){return!0===t.hasOwnProperty("land")?Object(a.jsxs)("div",{className:"photo",children:[Object(a.jsx)("img",{src:t.land,alt:t.alt,onClick:e.expand},t.land),Object(a.jsx)("h2",{className:"photoX",onClick:e.minimize,style:{display:"none"},children:" X "})]}):null})),i=this.state.photos.map((function(t){return!0===t.hasOwnProperty("drawing")?Object(a.jsxs)("div",{className:"photo",children:[Object(a.jsx)("img",{src:t.drawing,alt:t.alt,onClick:e.expand},t.drawing),Object(a.jsx)("h2",{className:"photoX",onClick:e.minimize,style:{display:"none"},children:" X "})]}):null})),n=this.state.photos.map((function(t){return!0===t.hasOwnProperty("animal")?Object(a.jsxs)("div",{className:"photo",children:[Object(a.jsx)("img",{src:t.animal,alt:t.alt,onClick:e.expand},t.animal),Object(a.jsx)("h2",{className:"photoX",onClick:e.minimize,style:{display:"none"},children:" X "})]}):null}));return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"header",children:[Object(a.jsx)("img",{src:T,alt:""}),Object(a.jsxs)("div",{id:"headerText",className:"center",children:[Object(a.jsx)("h1",{style:{color:"white"},children:" Gallery "}),Object(a.jsx)("p",{children:" Welcome to the gallery! All art and pictures taken were done by me. Life is short, so why not capture every moment? "})]})]}),Object(a.jsxs)("div",{id:"radioBtns",children:[Object(a.jsx)("input",{type:"radio",id:"all",name:"photo",htmlFor:"all",value:"all",onChange:this.selection}),Object(a.jsx)("label",{htmlFor:"all",children:" All "}),Object(a.jsx)("input",{type:"radio",id:"landLabel",name:"photo",htmlFor:"land",value:"land",onChange:this.selection}),Object(a.jsx)("label",{htmlFor:"landLabel",children:" Landscapes "}),Object(a.jsx)("input",{type:"radio",id:"drawingLabel",name:"photo",htmlFor:"drawing",value:"drawing",onChange:this.selection}),Object(a.jsx)("label",{htmlFor:"drawingLabel",children:" Art "}),Object(a.jsx)("input",{type:"radio",id:"animalsLabel",name:"photo",htmlFor:"animals",value:"animals",onChange:this.selection}),Object(a.jsx)("label",{htmlFor:"animalsLabel",children:" Animals "})]}),Object(a.jsxs)("div",{className:"photoGrid",id:"land",children:[" ",t," "]}),Object(a.jsxs)("div",{className:"photoGrid",id:"drawing",children:[" ",i," "]}),Object(a.jsxs)("div",{className:"photoGrid",id:"animals",children:[" ",n," "]})]})}}]),i}(n.Component),me=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),i}(s.a.Component),be=Object(y.f)(me),ge=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsx)(p.a,{basename:"/",children:Object(a.jsx)(be,{children:Object(a.jsxs)("div",{id:"body",children:[Object(a.jsx)(v,{}),Object(a.jsxs)(y.c,{children:[Object(a.jsx)(y.a,{path:"/",exact:!0,component:m}),Object(a.jsx)(y.a,{path:"/Home",component:O}),Object(a.jsx)(y.a,{path:"/Project",component:C}),Object(a.jsx)(y.a,{path:"/Contact",component:N}),Object(a.jsx)(y.a,{path:"/Gallery",component:pe})]}),Object(a.jsx)(w,{})]})})})}}]),i}(s.a.Component);o.a.render(Object(a.jsx)(ge,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e02f6aca.chunk.js.map