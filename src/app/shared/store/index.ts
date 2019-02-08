import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const API = `https://api.fuitpop.com`;

export const store = new Vuex.Store({

    state: {
        lastRace: null,
        daily: null,
        championship: null,
    },

    mutations: {

        updateLastRace(state, payload) {
            state.lastRace = payload;
        },

        updateDaily(state, payload) {
            state.daily = payload;
        },

        updateChampionship(state, payload) {
            state.championship = payload;
        },

    },

    actions: {

        async refreshLastRace(context) {
            try {
                const response = await Axios.get(`${API}/last-race`);

                context.commit('updateLastRace', response.data);
                return response.data;
            } catch (error) {
                return error;
            }
        },

        async refreshDaily(context) {
            try {
                const response = await Axios.get(`${API}/daily`);

                context.commit('updateDaily', response.data);
                return response.data;
            } catch (error) {
                return error;
            }
        },

        async refreshChampionship(context) {
            try {
                const response = await Axios.get(`${API}/championship`);

                context.commit('updateChampionship', response.data);
                return response.data;
            } catch (error) {
                return error;
            }
        }

    }

});
