import { createApp } from './vue.esm-browser.js'

window.app = createApp({

  data: () => ({

    postsList: [],
    searchValue: '',
  }),


  computed: {


    postSearch() {
      return this.postsList.filter(post => post.title.search('.searchValue') !== -1)
    },
  },

  created() {
    this.loadUsersFromApi()
  },

  methods: {
    loadUsersFromApi() {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(posts => {
            this.postsList = posts
          })
      }
  }
}).mount('#app')