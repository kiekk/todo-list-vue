import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: [
            { id: 1, todo: '영화보기', done: false},
            { id: 2, todo: '산책하기', done: true},
            { id: 3, todo: '밥먹기', done: false},
            { id: 4, todo: '야구경기보기', done: false}
        ]
    },
    getters: {
        todoList: (state) => state.todoList
    },
    mutations: {
        doneToggle: (state, index) => state.todoList[index].done = !state.todoList[index].done,
        deleteTodo: (state, index) => state.todoList.splice(index, 1),
        addTodo: (state, item) => state.todoList.push(item),
    },
    actions: {
        findIndexById({ getters }, id) {
            return getters.todoList.findIndex(function (item) {
                return item.id === id;
            })
        },
        async doneToggle({ commit, dispatch }, id ) {
            const index = await dispatch('findIndexById', id)
            commit('doneToggle', index)
        },
        async deleteTodo({ commit, dispatch }, id) {
            const index = await dispatch('findIndexById', id)
            commit('deleteTodo', index)
        },
        addTodo({ commit }, todo) {
            commit('addTodo', {
                id: new Date().getTime(),
                todo,
                done: false,
            })
        }
    }
})