<template>
    <div class="layout">
        <Layout>
             <Affix :offset-top="0">
                <Header>
                    <Menu mode="horizontal" theme="dark" active-name="1">
                        <div class="layout-logo"></div>
                        <div class="layout-nav">
                            <MenuItem name="1">
                                <Icon type="md-person" />
                                登录
                            </MenuItem>
                            <MenuItem name="1">
                                <Icon type="md-power" />
                                退出登录
                            </MenuItem>
                        </div>
                    </Menu>
                </Header>
            </Affix>
            <Layout>
                <Sider hide-trigger :style="{backgroud: '#fff'}">
                    <Menu theme="light" width="auto" active-name="1-1" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                Item1
                            </template>
                            <MenuItem name="1-1">option1</MenuItem>
                            <MenuItem name="1-2">option2</MenuItem>
                            <MenuItem name="1-3">option3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                Item2
                            </template>
                            <MenuItem name="2-1">option1</MenuItem>
                            <MenuItem name="2-2">option2</MenuItem>
                            <MenuItem name="2-3">option3</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                Item3
                            </template>
                            <MenuGroup title="流程">
                                <MenuItem name="3-1">option1</MenuItem>
                                <MenuItem name="3-2">option2</MenuItem>
                            </MenuGroup>
                            <MenuGroup title="使用">
                                <MenuItem name="3-4">option1</MenuItem>
                                <MenuItem name="3-5">option2</MenuItem>
                            </MenuGroup>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '980px', background: '#fff'}">
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
