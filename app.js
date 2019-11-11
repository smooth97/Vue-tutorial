new Vue({
  el: "#vue-app",
  data: {
    name: "smooth",
    characters: ["Mario", "Luigi", "Yoshi", "Bowser"],
    users: [
      { name: "Ryu", age: 25 },
      { name: "Yoshi", age: 35 },
      { name: "Ken", age: 55 }
    ]
  },
  methods: {}
});

// new Vue({
//   el: "#vue-app",
//   data: {
//     name: "Smooth",
//     job: "developer",
//     website: "https://velog.io/@smooth97/Vue.js",
//     websiteTag: '<a href="https://velog.io/@smooth97/Vue.js">Blog</a>',
//     age: 23,
//     x: 0,
//     y: 0
//   },
//   methods: {
//     greet: function(time) {
//       return `Good ${time} ${this.name}`;
//     },
//     add: function() {
//       this.age++;
//     },
//     substract: function() {
//       this.age--;
//     },
//     updateXY: function(event) {
//       this.x = event.offsetX;
//       this.y = event.offsetY;
//     },
//     logName: function(e) {
//       console.log(e.target.value);
//     },
//     logAge: function(e) {
//       console.log(e.target.value);
//     }
//   },
// computed: {
//   compClasses: function(){
//     return {
//       available: this.available,
//       nearby: this.nearby
//     }
//   }
// }
// });
