const API_KEY = 'AIzaSyDlTCUtjl-IdvJVxYe7NNw9IylSowEKopI'
const api =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2000&q=surfing&key=[YOUR_API_KEY]'
trending()

document.getElementById('searchBtn').addEventListener('click', getData)

async function getData() {
  event.preventDefault()
  let name = document.getElementById('searchInput').value
  try {
    const val = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${name}&key=${API_KEY}`,
    )
    const result = await val.json()
    displayData(result.items)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

function displayData(data) {
  document.getElementById('contentBox').innerText = ''
  data.map((elem) => {
    let div = document.createElement('div')
    div.id = 'videoCard'
    div.style.boxShadow = 'box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;'
    let btn = document.createElement('button')
    btn.id = 'modalBtn'
    let img = document.createElement('img')
    img.id = 'thumbnail'
    btn.append(img)
    let title = document.createElement('p')
    title.id = 'title'
    img.src = elem.snippet.thumbnails.medium.url
    title.innerText = elem.snippet.title
    title.style.width = '90%'
    title.style.textAlign = 'center'
    div.append(btn, title)
    document.getElementById('contentBox').append(div)
    btn.addEventListener('click', () => {
      modalOpen(elem)
    })
  })
}

function modalOpen(elem) {
  let modalbg = document.createElement('div')
  modalbg.id = 'modalBg'
  let div = document.createElement('div')
  div.id = 'modalBox'

  let iframe = `<button id="closeBtn">X</button><iframe width="560" height="315" src="https://www.youtube.com/embed/${elem.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  div.innerHTML = iframe

  modalbg.append(div)
  document.getElementById('contentBox').append(modalbg)
  document.querySelector('body').style.overflow = 'hidden'
  document.getElementById('closeBtn').addEventListener('click', removeModal)
}

function removeModal() {
  event.target.parentNode.parentNode.remove()
  document.querySelector('body').style.overflow = 'visible'
}

async function trending() {
  try {
    const val = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=200&chart=mostPopular&regionCode=IN&key=${API_KEY}`,
    )
    const data = await val.json()
    displayData(data.items)

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
function handleType(data) {
  let val = document.getElementById('filter-by-type').value
  if (val == 'video') {
    let newArr = data.filter((elem) => {
      return elem.id.kind == 'youtube#video'
    })

    console.log(newArr)
    displayData(newArr)
  } else if (val == 'channel') {
    let newArr = data.filter((elem) => {
      return elem.id.kind == 'youtube#channel'
    })

    console.log(newArr)
    displayData(newArr)
  } else if (val == 'movie') {
    let newArr = data.filter((elem) => {
      return elem.id.kind == 'youtube#movie'
    })

    console.log(newArr)
    displayData(newArr)
  } else if (val == 'playlist') {
    let newArr = data.filter((elem) => {
      return elem.id.kind == 'youtube#playlist'
    })

    console.log(newArr)
    displayData(newArr)
  } else {
    displayData(data)
  }
}
function handleDate(data) {
  let val = document.getElementById('filter-by-time').value
  let currentDate = new Date()

  if (val == 'hour') {
    let newArr = data.filter((elem) => {
      let date = new Date(elem.snippet.publishTime)

      return (
        parseInt(currentDate.getTime()) - parseInt(date.getTime()) <= 3600000
      )
    })

    console.log(newArr)
    displayData(newArr)
  } else if (val == 'week') {
    let newArr = data.filter((elem) => {
      let date = new Date(elem.snippet.publishTime)
      return (
        parseInt(currentDate.getTime()) - parseInt(date.getTime()) <= 604800000
      )
    })

    console.log(newArr)
    displayData(newArr)
  } else if (val == 'month') {
    let newArr = data.filter((elem) => {
      let date = new Date(elem.snippet.publishTime)
      return (
        parseInt(currentDate.getTime()) - parseInt(date.getTime()) <= 2628003600
      )
    })

    console.log(newArr)
    displayData(newArr)
  } else if (val == 'year') {
    let newArr = data.filter((elem) => {
      let date = new Date(elem.snippet.publishTime)
      return (
        parseInt(currentDate.getTime()) - parseInt(date.getTime()) <=
        2628003600 * 12
      )
    })

    console.log(newArr)
    displayData(newArr)
  } else {
    displayData(data)
  }
}
 