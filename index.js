const particlejs = {
    "particles": {
       "number": {
          "value": 58,
          "density": {
             "enable": true,
             "value_area": 400.8530152163807
          }
       },
       "color": {
          "value": "#FFFFFF"
       },
       "shape": {
          "type": "circle",
          "stroke": {
             "width": 0,
             "color": "#FFFFFF"
          },
          "polygon": {
             "nb_sides": 3
          },
          "image": {
             "src": "img/github.",
             "width": 100,
             "height": 100
          }
       },
       "opacity": {
          "value": 1,
          "random": true,
          "anim": {
             "enable": false,
             "speed": 1,
             "opacity_min": 0.1,
             "sync": false
          }
       },
       "size": {
          "value": 3,
          "random": true,
          "anim": {
             "enable": false,
             "speed": 40,
             "size_min": 0.1,
             "sync": false
          }
       },
       "line_linked": {
          "enable": false,
          "distance": 2000,
          "color": "#FFFFFF",
          "opacity": 1,
          "width": 20
       },
       "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
             "enable": false,
             "rotateX": 600,
             "rotateY": 1200
          }
       }
    },
    "interactivity": {
       "detect_on": "window",
       "events": {
          "onhover": {
             "enable": false,
             "mode": "repulse"
          },
          "onclick": {
             "enable": true,
             "mode": "push"
          },
          "resize": true
       },
       "modes": {
          "grab": {
             "distance": 400,
             "line_linked": {
                "opacity": 1
             }
          },
          "bubble": {
             "distance": 400,
             "size": 40,
             "duration": 2,
             "opacity": 8,
             "speed": 3
          },
          "repulse": {
             "distance": 200,
             "duration": 0.4
          },
          "push": {
             "particles_nb": 4
          },
          "remove": {
             "particles_nb": 2
          }
       }
    },
    "retina_detect": true
}

particlesJS("particles-js", particlejs);

return particlejs;