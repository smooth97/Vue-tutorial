new Vue({
  el: "#vue-app",
  data: {
    name: "Smooth",
    job: "developer",
    website: "https://velog.io/@smooth97/Vue.js",
    websiteTag: '<a href="https://velog.io/@smooth97/Vue.js">Blog</a>',
    age: 23
  },
  methods: {
    greet: function(time) {
      return `Good ${time} ${this.name}`;
    },
    add: function() {
      this.age++;
    },
    substract: function() {
      this.age--;
    }
  }
});