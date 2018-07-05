<template>
  <transition name="fade" mode="out-in">
    <div id="main-content">
      <div class="content-area" @click="$emit('create')">
        <h2>투표 만들기</h2>
        <img src="../assets/add.png">
        <h4>새로운 투표를 생성합니다</h4>
      </div>
      <div class="content-area" @click="$emit('history')">
        <h2>투표 기록</h2>
        <img src="../assets/history.png">
        <h4>투표 참여 기록, 결과를 확인합니다</h4>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style>

#main-content {
  margin-top: 100px;
  width: 100%;
  display: inline-block;
}

.content-area {
  width: 50%;
  float: left;
}

.content-area {
  cursor: pointer;
  display: inline-block;
  transition: 1s;
}

.content-area:hover {
  transform: scale(1.1);
  color: #5896ec;
}

#search-button:hover {
  background-color: #3b6299;
  color: #fff;
}

@media (max-width: 768px) {
  #main-content {
    margin-top: 30px;
  }

  .content-area {
    width: 90%;
    margin: 30px 5%;
  }
}

</style>
