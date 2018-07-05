<template>
  <transition name="fade" mode="out-in">
    <div id="create-vote">
      <h2>새 투표 생성</h2>
      <form id="create-vote-area" @submit.prevent>
        <div>
          <input type="text" class="input" maxlength="10" placeholder="투표 제목" v-model="title" @keydown="created = false" required>
        </div>
        <div id="vote-description">
          <textarea placeholder="투표 설명" maxlength="100" v-model="description" @keydown="created = false" required></textarea>
        </div>
        <div>
          마감일:
          <input type="date" class="input" placeholder="투표 기간" v-model="date" @keydown="created = false" @click="created = false" required>
        </div>
        <div id="vote-item-area">
          <h3>항목 추가</h3>
          <transition-group name="fade" mode="out-in">
            <div id="item-list" v-for="(item, i) in items" :key=i>
              <input type="text" class="input item-input" maxlength="10" :placeholder="'항목' + (i+1)" @keydown="created = false" required>
            </div>
          </transition-group>
          <button type="button" class="circle-button btn-primary" @click="newItem">+</button>
          <button type="button" class="circle-button btn-primary" @click="removeItem">-</button>
        </div>
        <div>
          <input type="submit" class="button btn-primary" value="확인" @click="onSubmit">
        </div>
        <transition name="fade" mode="out-in">
          <div v-if="created">
            <h3>투표를 생성하시겠습니까?</h3>
            <input type="submit" class="button btn-primary" value="생성" @click="onSend">
          </div>
        </transition>
      </form>
    </div>
  </transition>
</template>

<script>

export default {
  data () {
    return {
      title: '',
      description: '',
      date: '',
      count: 2,
      items: ['', ''],
      created: false,
      dataSet: null
    }
  },
  methods: {
    newItem () {
      if (this.count === 10) {
        this.$emit('modal', {header: '알림', body: '항목은 최대 10개 까지 생성 가능합니다!'})
      } else {
        this.count++
        this.items.push('')
      }
    },
    removeItem () {
      if (this.count === 2) {
        this.$emit('modal', {header: '알림', body: '항목은 최소 2개 이상이어야합니다!'})
      } else {
        this.count--
        this.items.pop()
      }
    },
    onSubmit () {
      let dataSet = {
        title: this.title,
        description: this.description,
        date: this.date,
        items: []
      }

      let d = new Date()
      const month = d.getMonth() + 1
      d.setMonth(month + 1)
      if (dataSet.title || dataSet.description || dataSet.date) {
        if (new Date() > new Date(dataSet.date)) {
          this.$emit('modal', {header: '알림', body: '마감일은 오늘 날짜보다 커야합니다!'})
        } else if (new Date(dataSet.date) > d) {
          this.$emit('modal', {header: '알림', body: '마감일은 다음달 이내로 설정해주세요!'})
        } else {
          const items = document.querySelectorAll('.item-input')
          for (let item of items) {
            dataSet.items.push(item.value)
          }
          this.created = true
          this.dataSet = dataSet
        }
      }
    },
    onSend () {
      if (this.dataSet) {
        this.$http.post('/process/createVote', this.dataSet).then(result => {
          const temp = '3DfvF'
          this.$emit('modal', {header: '성공', body: `투표 참가코드 [${temp}]`})
          this.dataSet = null
        }).catch(e => {
          this.$emit('modal', {header: '오류', body: '투표 생성 실패'})
        })
      } else {
        this.$emit('modal', {header: '오류', body: '확인 버튼을 다시 눌러주세요'})
      }
    }
  }
}
</script>

<style>

#create-vote-area {
  margin: auto;
  padding: 20px;
  width: 50%;
  border: 1px solid #5896ec;
  border-radius: 20px;
}

#vote-description {
  margin-top: 25px;
}

#vote-description textarea {
  resize: vertical;
  width: 50%;
  height: 100px;
  border-radius: 10px;
  padding: 5px;
}

#vote-item-area {
  margin-top: 40px;
  margin-bottom: 40px;
}

#item-list {
  margin: 10px 0;
}

.circle-button {
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

@media (max-width: 768px) {
  #create-vote-area {
    width: 80%;
  }
}

</style>
