const points = [
  {
    name: 'Офис Екб',
    coordinates: [60.597499, 56.837903],
    country: 'Россия',
    city: 'Екатеринбург',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Екб 2',
    coordinates: [60.652161, 56.843715],
    country: 'Россия',
    city: 'Екатеринбург',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Москва',
    coordinates: [37.620266, 55.753977],
    country: 'Россия',
    city: 'Москва',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Москва 2',
    coordinates: [37.638338, 55.825924],
    country: 'Россия',
    city: 'Москва',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Казань',
    coordinates: [49.10745, 55.797402],
    country: 'Россия',
    city: 'Казань',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Казань 2',
    coordinates: [49.198745, 55.78774],
    country: 'Россия',
    city: 'Казань',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Омск',
    coordinates: [73.357452, 54.971584],
    country: 'Россия',
    city: 'Омск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Омск 2',
    coordinates: [73.418282, 54.935875],
    country: 'Россия',
    city: 'Омск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Новосибирск',
    coordinates: [82.922682, 55.029818],
    country: 'Россия',
    city: 'Новосибирск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Новосибирск 2',
    coordinates: [82.940261, 54.97369],
    country: 'Россия',
    city: 'Новосибирск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Минск',
    coordinates: [27.574946, 53.908574],
    country: 'Беларусь',
    city: 'Минск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Минск 2',
    coordinates: [27.480877, 53.935615],
    country: 'Беларусь',
    city: 'Минск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Брест',
    coordinates: [23.657906, 52.082524],
    country: 'Беларусь',
    city: 'Брест',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Брест 2',
    coordinates: [23.757563, 52.103867],
    country: 'Беларусь',
    city: 'Брест',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Гродно',
    coordinates: [23.822953, 53.677342],
    country: 'Беларусь',
    city: 'Гродно',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Гродно 2',
    coordinates: [23.834483, 53.656187],
    country: 'Беларусь',
    city: 'Гродно',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Бобруйск',
    coordinates: [29.212867, 53.137326],
    country: 'Беларусь',
    city: 'Бобруйск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Бобруйск 2',
    coordinates: [29.268147, 53.129457],
    country: 'Беларусь',
    city: 'Бобруйск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Витебск',
    coordinates: [30.200604, 55.186566],
    country: 'Беларусь',
    city: 'Витебск',
    director: 'Лягушкин Иван Сергеевич',
    phones: ['+7(999 222-22-22', '+7(999 222-22-22'],
    email: 'username@flagstudio.ru'
  },
  {
    name: 'Офис Витебск 2',
    coordinates: [30.211644, 55.155926],
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

export { getPoints }
