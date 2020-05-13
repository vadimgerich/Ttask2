import Vuex from 'vuex';
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        messages: [],
        newss: [],
        formVisible: false,
        formNews: {},
        formNewMode: true
    },
    getters: {
        firstMessage(state) {
            return state.messages[0];
        },
        areSomeMessages(state) {
            return state.messages.length > 0;
        },
        messagesCount(state) {
            return state.messages.length
        },
        filtredNewss(state) {
            let result = state.newss;
            if (state.searchString)
                result = result.filter(news =>
                    news.pib.toLowerCase().includes(state.searchString.toLowerCase())
                );
            return result;
        },

    },
    mutations: {
        showForm(state) {
            state.formVisible = true;
        }
    },
    actions: {
        async getNewss(context) {
            try {
                let resp = await axios.get("http://localhost:5000/news");
                context.commit("setNewss", resp.data);
                await context.dispatch("showMessageForTime", { message: "Новини завантажено", delay: 500 });
            }
            catch (e) {
                await context.dispatch("showMessageForTime", { message: e, delay: 5000 });
            }
        }
    }
});
export default store;
