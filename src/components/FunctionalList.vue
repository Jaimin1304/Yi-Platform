<template>
  <el-row :gutter="15">
    <el-col :span="4">
      <a href="http://localhost:8081/">
        <el-card shadow="hover">爆运抽签</el-card>
      </a>
    </el-col>
    <el-col :span="4">
      <el-card shadow="hover">开发中</el-card>
    </el-col>
    <el-col :span="4">
      <el-card shadow="hover">开发中</el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "FunctionalList",
  data() {
    return {
      //
    };
  },
  methods: {
    lotting() {
      console.log("lotting!");
    }
  }
};
</script>

<style>
a {
  color: black;
  text-decoration: none;
}
</style>