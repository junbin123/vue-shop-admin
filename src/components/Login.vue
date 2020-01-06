<template>
  <div id="login-container">
    <div id="login-box">
      <!-- 头像 -->
      <img src="../assets/avatar.jpg" alt="logo" id="avatar" />
      <!-- 表单 -->
      <el-form
        class="login-form"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model="loginForm.username">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="form-btn">
          <el-button @click="login" type="primary">登录</el-button>
          <el-button @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据绑定
      loginForm: {
        username: "admin",
        password: "123456"
      },
      // 表单数据验证规则
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 表单重置
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 验证登录信息
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        try {
          if (!valid) return;
          this.$http
            .post("login", this.loginForm, {
              headers: { "Content-Type": "application/x-www-form-urlencoded" }
            })
            .then(response => {
              const res = response.data;
              console.log(res);
              if (res.code !== 200) {
                return this.$message.error("登录失败！");
              }
              this.$message.success("登录成功！");
              // 1. 登录成功后保存 token 到 sessionStorage
              // 2. 跳转到 Home 页面
              window.sessionStorage.setItem("token", res.data.token);
              // window.sessionStorage.setItem("token", "dsafkjhdfkshj");
              this.$router.push("/home");
            });
        } catch (error) {
          console.log(error.message);
          this.$message.error("接口请求错误，稍后再试");
        }
      });
    }
  }
};
</script>

<style scoped>
#login-container {
  background: #2b4b6b;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#login-box {
  background: #fff;
  width: 450px;
  height: 300px;
  border-radius: 5px;
}

#avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  margin-top: -50px;
  margin-left: -50px;
  left: 50%;
  padding: 10px;
  border: 1px solid #ececec;
  background: #fff;
}

.login-form {
  margin: 20px;
}
.form-btn {
  float: right;
}
</style>
