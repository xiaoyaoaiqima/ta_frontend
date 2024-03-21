import { StoreOptions } from "vuex";
import { type UserInter } from "@/types";

const defaultLoginUser: UserInter = {
  userName: "未登录",
  userRole: "notLogin",
};

export default {
  namespaced: true,
  state: () => ({
    defaultLoginUser,
  }),
  actions: {
    getLoginUser({ commit, state }, payload: UserInter) {
      const { userName, userRole } = payload;
      commit("updateUser", { userName, userRole });
    },
  },
  mutations: {
    updateUser(state, payload: UserInter) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
