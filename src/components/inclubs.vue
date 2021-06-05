<template>
  <div style="padding: 0 40px; padding-bottom: 40px;">
    <br><br>

    <div class="d-flex" style="padding: 0 20px; ">
      <img
        src="../assets/photo.jpg"
        alt=""
        style="width: 20%; margin-right: 50px;"
      />
      <div>
        <div>
          <br><br><br>
          <h2>ชมรมช่างภาพมหาวิทยาลัยพะเยา</h2>
          <h2>50 คน</h2>
          <b-button>ลงทะเบียนเข้าชมรม</b-button>
        </div>
      </div>
    </div>

    <br>

    <div style="background-color: #FFFFFF;">
      <div>
        <h2>รายละเอียดชมรม</h2>
        <h3
          style="text-indent: 50px">
          ชมรมถ่ายภาพมหาวิทยาลัยพะเยา ก่อตั้งขึ้นวันที่ 8มิถุนายน พ.ศ.2562 ชมรมของเรามีวัตถุประสงค์ ที่ว่า 
          เน้นการโดดเด่นในด้านของการถ่ายภาพและการทำสื่อสร้างสรรค์ เช่น งานวีดิโอ งานคอนเทนต์และหนังสั้น 
          โดยชมรมจะผลิตผลงานควบคู่ไปกับมหาวิทยาลัยพะเยา รวมไปถึงระดับชุมชนจังหวัดและระดับประเทศอยากให้มหาวิทยาลัยพะเยาของเรามีสื่อที่สร้างสรรค์ต่างจากที่อื่นๆโดยพวกเราอยากจะสร้างมันขึ้นมาด้วยตนเอง กับ เพื่อนๆ พี่ๆ และน้องๆ ในมหาวิทยาลัยพะเยา จุดประสงค์ของชมรมเพื่อเป็นสื่อกลางแห่งความสร้างสรรค์ของมหาวิทยาลัยพะเยา
          การเข้าชมรมไม่ว่าคุณจะมีกล้องหรือไม่มี ก็สามารถเข้าชมรมได้ 
        </h3>
      </div>
      <div>
        <h2>งานกิจกรรม</h2>
        <div style="display: flex; flex-direction: column;">
          <div style="align-self: center;">
            <img src="../assets/photo even.jpg" />
          </div>
          <br />
          <h2>กิจกรรมที่ทำในปีที่เเล้ว</h2>
          <ul>
            <li style="list-style: none;">กิจกรรมไปถ่ายรูปให้เวียง</li>
            <li style="list-style: none;">กิจกรรมถ่ายรูปงาน UP ambassador</li>
            <li style="list-style: none;">ถ่ายรูปงานรับน้องเข้าหอ</li>
          </ul>
        </div>
      </div>
    </div>

    <br>

    <div style="background-color: #FFFFFF;">
      <h2>รีวิว</h2>
      <div>
        <div style="display: flex; justify-content: space-between;">
          <h4>กิจกรรมสนุก พี่ๆชมรมเป็นกันเองมากครับ</h4>
          <h4>1ปีที่แล้ว</h4>
        </div>
      </div>
    </div>

    <br>

    <div>
      <div>
        <h3>แตะเพื่อจัดอันดับ</h3>
      </div>
    </div>
<div>
<b-container fluid>
  <b-row>
    <b-col sm="5">
      <b-form-textarea
        id="textarea-small"
        size="sm"
        placeholder="ความคิดเห็น"
      ></b-form-textarea>
    </b-col>
  </b-row>
</b-container>
</div>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.hide {
  display: none;
}
</style>