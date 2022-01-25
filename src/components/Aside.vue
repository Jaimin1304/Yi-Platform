<template>
  <el-menu
    active-text-color='#ffd04b'
    background-color='#008B8B'
    class='el-menu-vertical-demo'
    default-active='1'
    text-color='#fff'
  >
    <el-menu-item 
      :index='i.id' 
      v-for='i in menu' 
      :key='i.path'
      @click="clickMenu(i)"
    >
      <span>{{i.label}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      menu: [
        {
          path: '/Functional',
          name: 'Functional',
          label: '功能类',
          id: '1'
        },
        {
          path: '/Entertainment',
          name: 'Entertainment',
          label: '娱乐类',
          id: '2'
        }
      ]
    }
  },
  methods: {
    // handleOpen (key, keyPath) {
    //   console.log(key, keyPath)
    // },
    // handleClose (key, keyPath) {
    //   console.log(key, keyPath)
    // },
    clickMenu (i) {
      console.log('click menu')
      this.$router.push({name: i.name})
    }
  }
}
</script>
