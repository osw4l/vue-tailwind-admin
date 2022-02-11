import axios from "axios";

const token = localStorage.getItem('token');

const state = {
    user: null,
    posts: null,
    token: token,
};

const getters = {
    isAuthenticated: (state) => !!state.token,
    StatePosts: (state) => state.posts,
    StateUser: (state) => state.user,
};

const actions = {
    async Register({dispatch}, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
    },

    async LogIn({commit}, user) {
        console.log(user);
        localStorage.setItem('token', 'xxx');
        await axios.post("login", user);
        await commit("setUser", user.get("username"));
    },

    async CreatePost({ dispatch }, post) {
        await axios.post("post", post);
        return await dispatch("GetPosts");
    },

    async GetPosts({ commit }) {
        let response = await axios.get("posts");
        commit("setPosts", response.data);
    },

    async LogOut({ commit }) {
        commit("logout", null);
    },
};

const mutations = {
    setUser(state, username) {
        state.user = username;
    },

    setPosts(state, posts) {
        state.posts = posts;
    },
    logout(state, value) {
        state.token = value;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
