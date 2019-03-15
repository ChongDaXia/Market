<template>
    <div class="login" @keyup.enter="handleSubmit('loginForm')">
        <div class="login-box">
            <div class="title">登录</div>
            <Form ref="loginForm" :model="loginForm" :rules="loginFormRule" :label-width="80">
                <FormItem class="form-item" label="用户名" prop="account">
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.login {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.login-box {
    width: 400px;
    position: fixed;
    right: 15%;
    z-index: 20;
    background: #ffffff;
    box-shadow: 0 4px 100px rgba(80, 80, 80,0.15);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20 40px;
}
.title {
    width: 100%;
    position: relative;
    margin: 30px 0 60px 0;
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    color: #000;
}
</style>
