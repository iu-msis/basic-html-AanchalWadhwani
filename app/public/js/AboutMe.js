var peopleApp = new Vue({
  el: '#peopleApp',
  data: {
    users: [ {
      gender: "",
      name: {
        title: "",
        first: "",
        last: ""
      },
      location : {
        state: ""
      },
      email: "",
      dob: {
        date:"",
        age: 0
      },
      picture: {
        large:""
      },
      nat:""
    }
    ]
    },
  methods: {
    fetchUsers() {
      fetch('https://randomuser.me/api/')
      .then(function(response) {return response.json()})
      .then(json => {peopleApp.users = json.results});
    }
  },
  created() {
    this.fetchUsers();
  }
});
