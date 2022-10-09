const api_key = `acc9491f21542d06f5d5d739865e5b55`
async function getWeatherData() {
  try {
    const city = document.getElementById('City_name').value
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acc9491f21542d06f5d5d739865e5b55&units=metric`,
    )
    const Wdata = await res.json()
    console.log(Wdata, 'hihihihi')
    displayWeather(Wdata)
  } catch (err) {
    console.log(err, 'err')
  }
}
// getWeatherData()
function displayWeather(Wdata) {
  document.getElementById('container').innerHTML = ''
  // MAIN BOX
  let main_div = document.createElement('div')
  main_div.setAttribute('id', 'MDIV')
  //   TITLE
  let cityName = document.createElement('h2')
  cityName.innerText = Wdata.name
  cityName.setAttribute('id', 'Name')
  console.log(cityName)
  //   DESCRIPTION

  let des = document.createElement('p')
  des.setAttribute('id', 'des')
  des.innerText = 'Weather :- ' + Wdata.weather[0].description ////
  //   console.log(Wdata.weather[0].description)

  //   Temprature
  let temp = document.createElement('p')
  temp.setAttribute('id', 'temp')
  temp.innerText = 'Temprature :- ' + Wdata.main.temp + '*C'

  //   Pressure

  let pressure = document.createElement('p')
  pressure.setAttribute('id', 'pressure')
  pressure.innerText = 'Pressure :- ' + Wdata.main.pressure + ' m/b '
  // Humidity

  let humidity = document.createElement('p')
  humidity.setAttribute('id', 'humidity')
  humidity.innerText = 'humidity :- ' + Wdata.main.humidity + ' % '

  // WindSpeed

  let wind = document.createElement('p')
  wind.setAttribute('id', 'wind')
  wind.innerText = 'wind :- ' + Wdata.wind.speed + ' m/s '

  main_div.append(cityName, des, temp, pressure, humidity, wind)

  var Map = document.createElement('div')
  Map.setAttribute('id', 'Map')
  let city = Wdata.name
  let map = document.createElement('iframe')
  map.setAttribute('id', 'imgmap')
  map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  Map.append(map)

  document.getElementById('container').append(main_div, Map)
}

function getpos() {
  async function success(pos) {
    const crd = pos.coords

    console.log('Your current position is:')
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${api_key}`,
    )
    const res2 = await res.json()
    appendData(res2)
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  navigator.geolocation.getCurrentPosition(success)
}
getpos()
function appendData(res2) {
  document.getElementById('container').innerHTML = ''
  // MAIN BOX
  let main_div = document.createElement('div')
  main_div.setAttribute('id', 'MDIV')
  //   TITLE
  let cityName = document.createElement('h2')
  cityName.innerText = res2.name
  cityName.setAttribute('id', 'Name')
  console.log(cityName)
  //   DESCRIPTION

  let des = document.createElement('p')
  des.setAttribute('id', 'des')
  des.innerText = 'Weather :- ' + res2.weather[0].description ////
  //   console.log(res2.weather[0].description)

  //   Temprature
  let temp = document.createElement('p')
  temp.setAttribute('id', 'temp')
  temp.innerText = 'Temprature :- ' + res2.main.temp + '*C'

  //   Pressure

  let pressure = document.createElement('p')
  pressure.setAttribute('id', 'pressure')
  pressure.innerText = 'Pressure :- ' + res2.main.pressure + ' m/b '
  // Humidity

  let humidity = document.createElement('p')
  humidity.setAttribute('id', 'humidity')
  humidity.innerText = 'humidity :- ' + res2.main.humidity + ' % '

  // WindSpeed

  let wind = document.createElement('p')
  wind.setAttribute('id', 'wind')
  wind.innerText = 'wind :- ' + res2.wind.speed + ' m/s '

  main_div.append(cityName, des, temp, pressure, humidity, wind)

  var Map = document.createElement('div')
  Map.setAttribute('id', 'Map')
  let city = res2.name
  let map = document.createElement('iframe')
  map.setAttribute('id', 'imgmap')
  map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  Map.append(map)

  document.getElementById('container').append(main_div, Map)
}

function getFore() {
  async function success(pos) {
    const crd = pos.coords

    console.log('Your current position is:')
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${crd.latitude}&lon=${crd.longitude}&cnt=10&appid=${api_key}&units=metric`,
    )

    const response2 = await response.json()
    console.log(response2)
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  navigator.geolocation.getCurrentPosition(success, error)
}
getFore()
