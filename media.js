const template = document.querySelector('#post-template')
const container = document.querySelector('.container-api-posts')

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (media) {
  return media.json()
})
.then(function (posts) {

  for (const post of posts) {
    container.innerHTML += template.innerHTML.replaceAll('POST-TITLE', post.title).replaceAll('POST-BODY', post.body)
  }
})


