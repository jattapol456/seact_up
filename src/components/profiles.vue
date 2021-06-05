<template>
  <div>
    <br><br><br>
    <div>
      <b-button>แก้ไข</b-button>
      <div class="d-flex" style="padding: 0 100px;">
      <img
        src="https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg"
        alt=""
        style="width: 10%; margin-right: 50px;"/>
    </div>
        
    <br>
      <div class="d-flex" style="padding: 0 100px;">
        <h2>ชื่อ</h2>
        <h2>รหัสนิสิต</h2>
        <h2>ชั้นปี</h2>
        <h2>คณะ</h2>
        <h2>สาขา</h2>
      </div>
    </div>

    <div>
      <h1>ชมรมของฉัน</h1>
      <div class="card-container">
        <b-card
        v-for="i in club" :key="i.id"
        :img-src="i.img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; display: flex: justify-content: space-between;"
        class="mb-2 mx-2">
        <b style="text-indent: 50px" href="#" variant="primary" @click="goto(i.name)">{{i.name}}</b>
        </b-card>
      </div>
    </div>
    <div>
      <h1>ชมรมที่เข้าร่วม</h1>
      <div class="card-container">
        <b-card
        v-for="i in club" :key="i.id"
        :img-src="i.img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; display: flex: justify-content: space-between;"
        class="mb-2 mx-2">
        <b style="text-indent: 50px" href="#" variant="primary" @click="goto(i.name)">{{i.name}}</b>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      club: [
        {
          id: 1, name: "club1", img: "https://picsum.photos/600/300/?image=25"
        },
      ]
      
    }
  },
  methods: {
    goto(i){
      console.log(i);
    }
  },
}
</script>

<style>

</style>