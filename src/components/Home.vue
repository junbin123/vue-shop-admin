<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="header-title">电商后台管理系统</div>

      <el-dropdown style="float:right">
        <span>
          <img src="../assets/avatar.jpg" alt="logo" class="header-logo" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <!-- 边栏区域 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <i
          :class="isCollapse ? 'el-icon-caret-right' : 'el-icon-caret-left'"
          style="color:#fff;width:100%;line-height:30px;text-align:center"
          @click="toggleCollapse"
        ></i>
        <el-menu
          text-color="#fff"
          background-color="#333744"
          active-text-color="#ffd04b"
          :unique-opened="true"
          style="border-right:none"
          :collapse="isCollapse"
          :router="true"
          :default-active="activePath"
        >
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <!-- 一级菜单 -->
            <template slot="title">
              <i :class="menuIcon[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span> {{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      menuIcon: {
        "101": "el-icon-s-goods",
        "102": "el-icon-s-order",
        "103": "el-icon-s-promotion",
        "104": "el-icon-user-solid",
        "105": "el-icon-s-data"
      },
      // 是否折叠菜单
      isCollapse: false,
      // 保存当前激活菜单的index值
      activePath: ""
    };
  },
  created() {
    this.getMenuList();
    this.activePath = window.sessionStorage.getItem("activePath");
  },

  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 获取所有菜单
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200)
        return this.$message.error("菜单列表获取失败");
      this.menuList = res.data;
    },
    // 折叠展开菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    // 保存当前激活菜单的index值
    saveNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    }
  }
};
</script>

<style scoped>
.home-container {
  height: 100%;
}
.el-header {
  background: #373d41;
}
.header-title {
  float: left;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
}
.header-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 10px;
  float: right;
}

.logout-btn {
  float: right;
  margin-top: 10px;
}
.el-aside {
  background: #4e5961;
}
.el-main {
  background: #eaedf1;
}
</style>
