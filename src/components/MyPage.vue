<template>
  <transition name="fade" mode="out-in">
    <div id="my-page">
      <div id="my-info-area">
        <h1>내 정보</h1>
        <div>아이디: {{ this.$store.state.id }}</div>
        <div>이름: {{ this.$store.state.name }}</div>
        <div>나이: {{ this.$store.state.age }}</div>
        <div>성별: {{ this.$store.state.gender == 0 ? '남성':'여성' }}</div>
        <input type="button" class="button btn-primary" value="확인" @click="onClick">
        <input type="button" class="button btn-primary" value="저장" @click="onSave">
        <h4>정보를 수정하시려면 항목을 눌러주세요</h4>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MyPage',
  data () {
    return {
      changed: false
    }
  },
  methods: {
    onClick () {
      this.$router.push({name: 'Main'})
    },
    onSave () {
      console.log('save')
      if (!this.changed) {
        this.$emit('modal', {header: '알림', body: '각 항목을 클릭하여 수정 가능합니다!'})
      }
    }
  }
}
</script>

<style>

#my-page {
  width: 100%;
  background-color: #5896ec;
  color: #fff;
  text-align: center;
}

#my-info-area {
  position: absolute;
  background-color: #5896ec;
  border-radius: 10px;
  border: 1px solid #fff;
  width: 30%;
  padding: 20px;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
}

#my-info-area div {
  cursor: pointer;
  margin-top: 10px;
  transition: 1s;
}

#my-info-area div:hover {
  background-color: #fff;
  color: #5896ec;
}

#my-info-area input {
  margin-top: 40px;
}

@media (max-width: 768px) {
  #my-info-area {
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

</style>
