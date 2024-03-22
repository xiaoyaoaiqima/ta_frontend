import { StoreOptions } from "vuex";
import { type UserInter } from "@/types";
import { UserControllerService } from "../../generated";
import ACCESS_ENUM from "@/access/accessEnum";

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
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: ACCESS_ENUM.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateUser(state, payload: UserInter) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
