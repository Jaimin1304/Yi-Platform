<template>
  <el-container style="height: 100%">
    <el-header>
      <CommHeader></CommHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        功能类
        <FunctionalList></FunctionalList>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "../components/Aside";
import CommHeader from "../components/CommHeader";
import FunctionalList from "../components/FunctionalList";

export default {
  name: "Functional",
  components: { Aside, CommHeader, FunctionalList }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #2f4f4f;
  padding: 0px;
}

.el-main {
  background-color: #e0ffff;
  padding: 0px;
}

.el-aside {
  background-color: #20b2aa;
  padding: 0px;
}
</style>
