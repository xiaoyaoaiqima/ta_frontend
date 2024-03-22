import { RouteRecordRaw } from "vue-router";
import DailyCheckView from "@/views/dailyCheck/DailyView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import ClearFlowView from "@/views/dailyCheck/ClearFlowView.vue";
import BackDealView from "@/views/dailyCheck/BackDealView.vue";
import { computed } from "vue";
import checkAccess from "@/access/checkAccess";
import store from "@/store";
import SearchUserView from "@/views/search/SearchUserView.vue";
import SearchDealView from "@/views/search/SearchDealView.vue";
import SearchShareView from "@/views/search/SearchShareView.vue";
import DailyLayout from "@/layouts/DailyLayout.vue";
import AdminUserControlView from "@/views/admin/AdminUserControlView.vue";
import AdminLogSearchView from "@/views/admin/AdminLogSearchView.vue";
import SearchLayout from "@/layouts/SearchLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/daily",
    name: "日常首页",
    component: DailyLayout,
    children: [
      {
        path: "deal",
        name: "日常处理",
        component: DailyCheckView,
      },
      {
        path: "/daily/backDeal",
        name: "回退处理",
        component: BackDealView,
      },
      {
        path: "/daily/clearFlow",
        name: "清算流程",
        component: ClearFlowView,
      },
    ],
    meta: {
      access: ACCESS_ENUM.NOT_LOGIN,
      isParent: true,
    },
  },
  {
    path: "/search",
    name: "查询分析",
    component: SearchLayout,
    children: [
      {
        path: "/search/user",
        name: "账户信息查询",
        component: SearchUserView,
      },
      {
        path: "/search/deal",
        name: "交易信息查询",
        component: SearchDealView,
      },
      {
        path: "/search/clearFlow",
        name: "份额信息查询",
        component: SearchShareView,
      },
    ],
    meta: {
      access: ACCESS_ENUM.NOT_LOGIN,
      isParent: true,
    },
  },

  {
    path: "/Admin",
    name: "系统管理",
    component: AdminLayout,
    children: [
      {
        path: "/Admin/userControl",
        name: "管理员用户管理",
        component: AdminUserControlView,
      },
      {
        path: "/Admin/logSearch",
        name: "操作日志查询",
        component: AdminLogSearchView,
      },
    ],
    meta: {
      access: ACCESS_ENUM.ADMIN,
      isParent: true,
    },
  },
  {
    path: "/noAuth",
    name: "noAuth",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    },
  },
];
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});
const parentRoutes = computed(() => {
  return routes.filter((route) => {
    return route.meta?.isParent;
  });
});
export { visibleRoutes, parentRoutes };
