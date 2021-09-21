<template>
  <!--所有的元素不能直接在根节点下面-->
  <div>
    <h1>个人信息页面</h1>
    <!--{{$route.params.id}}-->
    {{id}}
  </div>
</template>

<script>
export default {
  props:['id'],
  name: "UserProfile",
  // 钩子函数  ，相当于拦截器
  beforeRouteEnter:(to, from, next)=>{
     console.log("进入路由之前！");
     // 加载数据
    next(
      vm => {
        vm.getData();  //进入路由之前执行获取数据方法
      }
    );
  },
  beforeRouteLeave:(to,from,next)=>{
    console.log("进入路由之后！");
    next();
  },
  methods:{
    getData:function (){
      this.axios({
        method:'get',
        url:'http://localhost:8080/static/mock/data.json',
      }).then(function (response){
        console.log(response);
      })
    }
  }
}
</script>

<style scoped>

</style>
