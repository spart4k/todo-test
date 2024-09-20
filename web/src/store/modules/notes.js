import { set } from 'vue'

const findNote = (state, id) => state.data.findIndex((el) => el.id === id)

export default {
  namespaced: true,
  state: {
    data: [
      {
        id: 'c9e1074c5b3f5e9c9f3a5a3c1e9b0d4',
        title: 'Список покупок',
        color: '#FF5733',
        todos: [
          {
            id: 'c9e1074c5b3f5e9c9f3a5a3c1e9b0d4',
            text: 'Купить молоко',
            completed: false,
          },
          {
            id: 'd3cbbcb3c83b4bfc89a1fc2359ee6a5',
            text: 'Купить хлеб',
            completed: false,
          },
          {
            id: 'f0e85c418d4a4802952f7648cf6aade',
            text: 'Купить яйца',
            completed: false,
          },
          {
            id: '8f8e5d7c63aa48b284f597f2fba2cbd',
            text: 'Купить зеленый чай',
            completed: false,
          },
          {
            id: '7e4f1defd205450183537e52d83a309',
            text: 'Купить кофе',
            completed: false,
          },
          {
            id: 'ba75b434bff543e6b2721a9cf9ff6b0',
            text: 'Купить сахар',
            completed: false,
          },
          {
            id: 'f8c3b8c4567d4c04bf0f052abda4f016',
            text: 'Купить печенье',
            completed: false,
          },
          {
            id: '1e98281e19b54ef84125fec5bc5d610',
            text: 'Купить фрукты',
            completed: false,
          },
          {
            id: '7fd8c30b12df4296ba7ad43f73161a76',
            text: 'Купить овощи',
            completed: false,
          },
          {
            id: 'f35e52c0db424b5a8ee58cda1d5b5add',
            text: 'Купить специи',
            completed: false,
          },
        ],
      },
      {
        id: '5f3b6be42c384d89a60c7fc3e0f4ce9',
        title: 'Рабочие задачи',
        color: '#33FF57',
        todos: [
          {
            id: '5f3b6be42c384d89a60c7fc3e0f4ce9',
            text: 'Завершить отчет',
            completed: false,
          },
          {
            id: '0c5189eb69f8478dbff7d928c8c60e0',
            text: 'Подготовить презентацию',
            completed: false,
          },
          {
            id: '4e4a6c12c8f24dc49df514dbeb8cd8bf',
            text: 'Провести собрание',
            completed: false,
          },
          {
            id: '2a81aabe64dd467f80529d727493f7fa',
            text: 'Отправить отчеты клиентам',
            completed: false,
          },
          {
            id: '68ef96256c054152b159ca732f349964',
            text: 'Обновить базу данных',
            completed: false,
          },
          {
            id: '29aadf19985741c6884dab2b2ee67d96',
            text: 'Написать письмо руководству',
            completed: false,
          },
          {
            id: '2eef1785395f48dfb08383ff060c2d47',
            text: 'Собрать команду для проекта',
            completed: false,
          },
          {
            id: '3f26fb94d1c149348772f97b76830e44',
            text: 'Создать план проекта',
            completed: false,
          },
          {
            id: 'c4c4b8cf76a14c6da9df220c86d535b4',
            text: 'Провести анализ данных',
            completed: false,
          },
          {
            id: 'ad3ea406ccf84e29b524d431bfa87a7f',
            text: 'Обсудить результаты',
            completed: false,
          },
        ],
      },
      {
        id: 'ffccccccc3a24c0d89727d64b873da38',
        title: 'Здоровье и фитнес',
        color: '#3357FF',
        todos: [
          {
            id: 'ffccccccc3a24c0d89727d64b873da38',
            text: 'Упражняться 30 минут',
            completed: false,
          },
          {
            id: 'fe2a14daa3f148d98b5cfe8a0be3c03c',
            text: 'Сходить в спортзал',
            completed: false,
          },
          {
            id: 'ecc2881f5aae421da080a3c8a8d42dc7',
            text: 'Пробежать 5 км',
            completed: false,
          },
          {
            id: '9a9285424f0643ec85055f1d02c50eeb',
            text: 'Приготовить здоровый ужин',
            completed: false,
          },
          {
            id: '81d14de0daba4fce93bc7046ca99b3f5',
            text: 'Сделать растяжку',
            completed: false,
          },
          {
            id: '7d5930f8ba454c48b38c24cb45ba0cb4',
            text: 'Пройти 10 000 шагов',
            completed: false,
          },
          {
            id: 'ede41a8b869741af97e17dcb031dbb00',
            text: 'Пить 2 литра воды',
            completed: false,
          },
          {
            id: 'c041f0f8519b46549be4623b42897da5',
            text: 'Сходить на йогу',
            completed: false,
          },
          {
            id: '1a2fbc5b6fba4b158861614b53c96191',
            text: 'Отдохнуть и расслабиться',
            completed: false,
          },
          {
            id: '65f16131139446858c4cbf49ad8e6036',
            text: 'Заняться медитацией',
            completed: false,
          },
        ],
      },
      {
        id: '1202a888cd7a43a5b2331f86ffb6a80b',
        title: 'Книги и фильмы',
        color: '#FF33A1',
        todos: [
          {
            id: '1202a888cd7a43a5b2331f86ffb6a80b',
            text: 'Прочитать новую книгу',
            completed: false,
          },
          {
            id: '12d4380489e14e2396d3cd0e82a6e7b',
            text: 'Посмотреть новый фильм',
            completed: false,
          },
          {
            id: 'c18698c05d704df4b49ffcc1d6ff534d',
            text: 'Записаться на курс',
            completed: false,
          },
          {
            id: '65a71db049e64dbb864db83986b87fc6',
            text: 'Посетить книжный магазин',
            completed: false,
          },
          {
            id: '43e628d159e9462494f04e46bcd98df4',
            text: 'Посмотреть выставку',
            completed: false,
          },
          {
            id: '1fcafbf1508f4fb8b0976f88fbeed06d',
            text: 'Прочитать статью',
            completed: false,
          },
          {
            id: '84eade494e9d4b949100dcb5c99c1b6c',
            text: 'Подписаться на журнал',
            completed: false,
          },
          {
            id: 'd1383e9cf39a4935a5e10b8beb90d846',
            text: 'Сходить в библиотеку',
            completed: false,
          },
          {
            id: 'c7cb19e2a5034c3bbc7437c3b78f0a5e',
            text: 'Посмотреть документальный фильм',
            completed: false,
          },
          {
            id: '0f383027544e4865a339892c474c0b9d',
            text: 'Составить список книг',
            completed: false,
          },
        ],
      },
      {
        id: 'fa139b93868b4f5483b63f60b84c886a',
        title: 'Досуг и развлечение',
        color: '#FFC300',
        todos: [
          {
            id: 'fa139b93868b4f5483b63f60b84c886a',
            text: 'Сходить на концерт',
            completed: false,
          },
          {
            id: 'cb7258256c3d4e71aa0172de783a8e9e',
            text: 'Поиграть в видеоигры',
            completed: false,
          },
          {
            id: 'ff2c28087a0f46949fafc417bb15cbfe',
            text: 'Сделать пикник',
            completed: false,
          },
          {
            id: '478fb6b1c12e482484c320916446d045',
            text: 'Сходить в кафе',
            completed: false,
          },
          {
            id: '82ebd818993941539ff4db611769c474',
            text: 'Написать о своих впечатлениях',
            completed: false,
          },
        ],
      },
    ],
  },
  mutations: {
    setNote(state, { note }) {
      let noteIndex = findNote(state, note.id)
      set(state.data, noteIndex, note)
    },
    addNote(state, { id, note }) {
      console.log(note)
      state.data.push(note)
    },
    removeNote(state, id) {
      let noteIndex = findNote(state, id)
      state.data.splice(noteIndex, 1)
    },
  },
  actions: {
    async saveNote({ commit }, { note }) {
      commit('notes/setNote', { note }, { root: true })
    },
    async addNote({ commit }, { note }) {
      commit('notes/addNote', { note }, { root: true })
    },
    async removeNote({ commit }, id) {
      console.log('remove', id)
      commit('notes/removeNote', id, { root: true })
    },
  },
}
