<template>
  <div class="wrap">
    <el-container style="height:600px">
      <el-header class="header">
        <span class="logo">芒果社区</span>
        <el-button @click="dialogFormVisible = true" class="login-btn">登录</el-button>
      </el-header>
      <el-main class="main">
        <el-dialog title="登录" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="form.password" auto-complete="off" type="password"></el-input>
            </el-form-item>
            <span v-if="error" class="error">用户名或密码错误，请重新输入</span>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="login">确 定</el-button>
          </div>
        </el-dialog>
      </el-main>
      <el-footer class="footer">copyright &copy; Gabby Liu 2018</el-footer>
    </el-container>


  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      error: false,
      form: {
          name: '',
          password: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    }
  },
  methods: {
    login() {
      if(this.form.name === 'admin' && this.form.password === '123'){
        this.dialogFormVisible = true;
        this.$router.push('index');
      }else {
        this.error = true;
      }
    }
  }
}
</script>

<style lang="css">
  .header{
    box-shadow: 0px 2px 10px #ccc;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header .logo{
    font-weight: bold;
    font-size: 24px;
    color: #9682da;
  }
  .main{
    background-color: #f3f2f5;
    position: absolute;
    top: 70px;
    left: 10px;
    right: 10px;
    bottom: 70px;
    border-radius: 6px;
  }
  .footer{
    background: #323133;
    color: #ccc;
    line-height: 60px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .error{
    color: red;
    font-size: 12px;
  }
</style>
