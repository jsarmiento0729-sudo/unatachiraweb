<template>
  <div class="full-page">
   <img src="../assets/UNI.png" alt="">
  </div>

  <div class="full-page2">
 <img src="../assets/LOCAL.jpg.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'FullPage',
};
</script>

<style scoped>
.full-page {
  width: 30%;
  height: 150px;
position: fixed;
  top: 1.6em;
  left: 4.5em;
   

   
 
}
.full-page2 {
  width: 60%;
  height: 170px;
position: fixed;
  top:1.5em;
  right: 0;
  left:40%;
 
}

.full-page img{
    height: 140px;
    width: 100%;
  
  
}

.full-page2 img{
    height: 150px;
    width: 100%;
   
  
}
</style>