<center>
  <h1>YWC Queueing System</h1>

  <p>Queueing System for Young Webmaster Camp with remote control</p>

  <p>https://kykungz.github.io/ywc-queue</p>
</center>

## Features
- Home
  - ดูคิวปัจจุบันของแต่ละสาขา
  - อัพเดทแบบ Realtime
  - แสดง Animation เตือนเมื่อมีการเปลี่ยนแปลงคิว
- Remote
  - เข้าได้เฉพาะ Admin
  - แก้ไขคิว
  - Regular Queue (คิวทั่วไป)
  - Custom Queue (ข้อความแบบกำหนดเอง)
- QR Code เพื่อเข้าใน Mobile

## Instructions
- กดที่สัญลักษณ์ <img height="40" src="./images/logo.svg"> หรือ คำว่า **ตรวจสอบคิวได้ที่นี่** ค้างไว้ 2 วินาที เพื่อลงชื่อเข้าใช้เป็น Admin
- เมื่อได้สิทธิ์ Admin แล้ว จรึงสามารถคลิกที่ Card ประจำสาขาเพื่อเข้าสู่หน้า `admin` (รีโมทควบคุม)
- ระบบเรียกคิวประกอบด้วย 2 รูปแบบ
  - **Regular Queue (คิวทั่วไป)**

      รันคิวตามเลขประจำสาขา (`C`, `P`, `D`, `M`) ด้วยปุ่ม `+`, `-` และ `PUBLISH`
  
  - **Custom Queue (ข้อความแบบกำหนดเอง)**

      แสดงผลตามข้อความที่ใส่ ไว้ใช้เมื่อต้องการแสดงข้อความอื่นๆ เช่น `พักเบรค` `พักเที่ยง` `สวัสดี`
