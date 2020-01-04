<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/users-list' }"
        >用户列表</el-breadcrumb-item
      >
    </el-breadcrumb>
    <!-- 卡片视图 -->

    <el-card style="margin-top:15px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" clearable v-model="searchValue">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserList"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="8">
          <el-button type="primary" @click="addUserVisible = true">
            添加用户
          </el-button></el-col
        >
      </el-row>
      <!-- 表格区域 -->
      <el-table
        :data="userlist"
        border
        style="width: 100%;margin-top:15px"
        stripe
      >
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="role_name" label="角色"> </el-table-column>
        <el-table-column prop="my_state" label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.my_state"
              active-color="#13ce66"
              @change="userStateChange()"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" min-width="180">
          <template>
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
            ></el-button>
            <el-tooltip
              effect="dark"
              content="分配角色"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="warning"
                icon="el-icon-setting"
                size="mini"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        style="margin-top: 15px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.currentpage"
        :page-sizes="pageSizes"
        :page-size="params.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 添加用户对话框 -->
    <el-dialog
      title="添加用户"
      :visible.sync="addUserVisible"
      width="30%"
      @close="closeUserDialog"
    >
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="70px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeUserDialog">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkEmail = (rule, value, cb) => {
      // 验证邮箱正则表达式
      const regEmail = /^([A-Za-z0-9_])+@([A-Za-z0-9_-])+\.([A-Za-z]{2,4})$/;
      if (regEmail.test(value)) {
        // 合法邮箱
        return cb();
      }
      cb(new Error("请输入合法邮箱"));
    };
    var checkMobile = (rule, value, cb) => {
      // 验证手机号正则表达式
      const regMobile = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      if (regMobile.test(value)) {
        // 合法手机号
        return cb();
      }
      cb(new Error("请输入合法手机号"));
    };
    return {
      userlist: [],
      total: 0,
      pageSizes: [1, 2, 5, 10],
      params: { pagesize: 5, currentpage: 1 },
      searchValue: "",
      addUserVisible: false,
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      addFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            mesaage: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            mesaage: "长度在 6 到 15 个字符",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            validator: checkEmail,
            trigger: "blur"
          }
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            validator: checkMobile,
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    // 获取用户列表信息
    async getUserList() {
      const { data: res } = await this.$http.get("users", {
        params: this.params
      });
      if (res.meta.status !== 200) {
        return this.$message.error("获取用户列表失败！");
      }
      this.userlist = res.data.users;
      this.total = res.data.total;
      // console.log(res);
    },
    // 监听每页显示条数改变
    handleSizeChange(newPageSize) {
      this.params.pagesize = newPageSize;
      this.getUserList();
    },
    // 监听当前页改变
    handleCurrentChange(newCurrentPage) {
      this.params.currentpage = newCurrentPage;
      this.getUserList();
    },
    // 监听用户状态改变
    userStateChange() {
      this.$message.success("用户状态更新成功");
    },
    // 关闭用户表单
    closeUserDialog() {
      this.addUserVisible = false;
      this.$refs.addFormRef.resetFields();
    }
  }
};
</script>

<style scoped></style>
