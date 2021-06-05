<template>
<div>  
  <div class="ml-auto" style="max-width: 25rem; display: flex: justify-content: flex-end;">
    <b-dropdown id="dropdown-1" text="Filter" class="m-md-2">
      <b-dropdown-item>วันที่ลง</b-dropdown-item>
      <b-dropdown-item>ตามตัวอักษร</b-dropdown-item>
      <b-dropdown-item>จำนวนสมาชิก</b-dropdown-item>
    </b-dropdown>
    <input type="search">
    <b-button>ค้นหา</b-button>
  </div>

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

</template>
<script>
export default {
  data() {
    return {
      club: [
        {
          id: 1, name: "ชมรมช่างภาพมหาวิทยาลัยพะเยา", img: "../src/assets/photo.jpg"
        },
        {
          id: 2, name: "club2", img: "https://picsum.photos/600/300/?image=25"
        },
        {
          id: 3, name: "club3", img: "https://picsum.photos/600/300/?image=25"
        },
        {
          id: 4, name: "club4", img: "https://picsum.photos/600/300/?image=25"
        },
        {
          id: 5, name: "club5", img: "https://picsum.photos/600/300/?image=25"
        },
        {
          id: 6, name: "club6", img: "https://picsum.photos/600/300/?image=25"
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

<style scoped>
  .card-container {
    display: grid;
    grid-template-columns: repeat(5, 250px);
  }
</style>