<template>
    <div style="padding: 0 80px; padding-bottom: 40px;">
        <br><br>
        <div>
            <h4>คำร้องทั้งหมด</h4>
        </div>
        <br><br>
        <div>
            <b-table striped hover :items="items"></b-table>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { ชื่อชมรม: 'Gaming', ประธานชมรม: 'นายปะกร ส่องแสงตอนเช้า', วันที่: '20/08/2563', สถานะ: '' },
          { ชื่อชมรม: 'ยามเช้า', ประธานชมรม: 'นางสาวพีระดา สุขใจ', วันที่: '18/08/2563', สถานะ: '' },
          { ชื่อชมรม: 'ดอกไม้ไฟ', ประธานชมรม: 'นายสิงหา คม', วันที่: '18/08/2563', สถานะ: '' },
        ]
      }
    }
  }
</script>

<style>

</style>