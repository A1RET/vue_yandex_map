const points = [
  {
    name: 'Офис Екб',
    coordinates: [56.837903, 60.597499],
    country: 'Россия',
    city: 'Екатеринбург',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Екб 2',
    coordinates: [56.843715, 60.652161],
    country: 'Россия',
    city: 'Екатеринбург',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Москва',
    coordinates: [55.753977, 37.620266],
    country: 'Россия',
    city: 'Москва',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Москва 2',
    coordinates: [55.825924, 37.638338],
    country: 'Россия',
    city: 'Москва',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Казань',
    coordinates: [55.797402, 49.10745],
    country: 'Россия',
    city: 'Казань',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Казань 2',
    coordinates: [55.78774, 49.198745],
    country: 'Россия',
    city: 'Казань',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Омск',
    coordinates: [54.971584, 73.357452],
    country: 'Россия',
    city: 'Омск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Омск 2',
    coordinates: [54.935875, 73.418282],
    country: 'Россия',
    city: 'Омск ',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Новосибирск',
    coordinates: [55.029818, 82.922682],
    country: 'Россия',
    city: 'Новосибирск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Новосибирск 2',
    coordinates: [54.97369, 82.940261],
    country: 'Россия',
    city: 'Новосибирск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Минск',
    coordinates: [53.908574, 27.574946],
    country: 'Беларусь',
    city: 'Минск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Минск 2',
    coordinates: [53.935615, 27.480877],
    country: 'Беларусь',
    city: 'Минск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Брест',
    coordinates: [52.082524, 23.657906],
    country: 'Беларусь',
    city: 'Брест',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Брест 2',
    coordinates: [52.103867, 23.757563],
    country: 'Беларусь',
    city: 'Брест',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Гродно',
    coordinates: [53.677342, 23.822953],
    country: 'Беларусь',
    city: 'Гродно',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Гродно 2',
    coordinates: [53.656187, 23.834483],
    country: 'Беларусь',
    city: 'Гродно',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Бобруйск',
    coordinates: [53.137326, 29.212867],
    country: 'Беларусь',
    city: 'Бобруйск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Бобруйск 2',
    coordinates: [53.129457, 29.268147],
    country: 'Беларусь',
    city: 'Бобруйск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Витебск',
    coordinates: [55.186566, 30.200604],
    country: 'Беларусь',
    city: 'Витебск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Витебск 2',
    coordinates: [55.155926, 30.211644],
    country: 'Беларусь',
    city: 'Витебск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  }
]

const getPoints = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(points), 250)
  })
}

const getPointsByCountry = (countryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const country = points.find((country) => country.id == countryId)
      if (country) {
        resolve(country)
      } else {
        reject(new Error('getProduct: Country not found'))
      }
    }, 250)
  })
}

export { getPoints, getPointsByCountry }
