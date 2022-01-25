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
        娱乐类
        <EntertainmentList></EntertainmentList>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '../components/Aside'
import CommHeader from '../components/CommHeader'
import EntertainmentList from '../components/EntertainmentList'

export default {
  name: 'Entertainment',
  components: { Aside, CommHeader, EntertainmentList }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #2F4F4F;
  padding: 0px;
}

.el-main {
  background-color: #E0FFFF;
  padding: 0px;
}

.el-aside {
  background-color: #20B2AA;
  padding: 0px;
}
</style>
