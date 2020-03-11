<template>
  <div class="layout">
    <el-container>
      <!-- 头部导航 -->
      <el-header>
        <LayoutHeader />
      </el-header>
      <!-- 内容部分 -->
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :router="true"
            :unique-opened="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/home"
                ><i class="el-icon-menu"></i>首页</el-menu-item
              >
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
              </template>
              <el-menu-item index="2-1-1"
                ><i class="el-icon-menu"></i>选项1</el-menu-item
              >
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航三</span>
              </template>
              <el-menu-item index="3-1-1"
                ><i class="el-icon-menu"></i>选项1</el-menu-item
              >
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="4-1-1"
                ><i class="el-icon-menu"></i>选项1</el-menu-item
              >
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航五</span>
              </template>
              <el-menu-item index="5-2-1"
                ><i class="el-icon-menu"></i>选项1</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,index) in breadcrumbList" :key="index">{{item.meta.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LayoutHeader from "./components/LayoutHeader.vue";
@Component({
  components: {
    LayoutHeader
  }
})
export default class layout extends Vue {
  private breadcrumbList:any = [];
  created () {
    this.breadcrumbList= this.$route.matched;
    console.log(this.breadcrumbList)
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-breadcrumb {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  padding: 0 10px;
}
</style>
