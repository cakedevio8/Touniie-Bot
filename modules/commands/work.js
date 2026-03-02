 module.exports.config = {
   name: "work",
   version: "1.0.2",
   hasPermssion: 0,
   credits: "D-Jukie",
   description: "Làm việc để có tiền, có làm thì mới có ăn",
   commandCategory: "Coin",
   cooldowns: 5,
   envConfig: {
     cooldownTime: 10000*60*60*3
   }
 };
 module.exports.languages = {
   "vi": {
     "cooldown": "Bạn đã làm việc rồi\nquay lại sau: %1 phút %2 giây."
   },
   "en": {
     "cooldown": "You're done, come back later: %1 minute(s) %2 second(s)."
   }
 }
 module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
   const { threadID, messageID, senderID } = event;if(handleReply.author!=senderID)return;
   let data = (await Currencies.getData(senderID)).data || {};
   var coin = Math.floor(Math.random() * 1000)
   var rdcn = ['tuyển dụng nhân viên', 'quản trị khách sạn', 'tại nhà máy điện', 'đầu bếp trong nhà hàng', 'công nhân'];
   var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];
   var rddv = ['sửa ống nước', 'sửa điều hòa cho hàng xóm', 'bán hàng đa cấp', 'phát tờ rơi', 'shipper', 'sửa máy vi tính', 'hướng dẫn viên du lịch'];
   var work2 = rddv[Math.floor(Math.random() * rddv.length)];
   var rdmd = ['kiếm được 13 thùng dầu', 'kiếm được 8 thùng', 'kiếm được 9 thùng dầu', 'kiếm được 8 thùng dầu', 'ăn cướp dầu ', 'lấy nước đổ vô dầu rồi bán'];
   var work3 = rdmd[Math.floor(Math.random() * rdmd.length)];
   var rdq = ['quặng sắt', 'quặng vàng', 'quặng than', 'quặng chì', 'quặng đồng ', 'quặng dầu'];
   var work4 = rdq[Math.floor(Math.random() * rdq.length)];
   var rddd = ['kim cương', 'vàng', 'than', 'ngọc lục bảo', 'sắt ', 'đá bình thường', 'lưu ly', 'đá xanh'];
   var work5 = rddd[Math.floor(Math.random() * rddd.length)];
   var rddd1 = ['khách vip', 'khách quen', 'người lạ', 'thằng ngu tầm 23 tuổi', 'anh lạ mặt', 'khách quen', 'đại gia 92 tuổi', 'thằng nhóc 12 tuổi'];
   var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];
   var rddaa = ['sau này chịu khó cần cù thì bù siêng năng chỉ có làm thì mới có ăn còn cái loại không làm mà đòi có ăn thì ăn đb nhá ăn cức'];
   var work7 = rddaa[Math.floor(Math.random() * rddaa.length)];
   var rddbb = ['nhà bạn thân', 'biệt thự', 'chung cư', 'ô tô', 'vàng'];
   var work8 = rddbb[Math.floor(Math.random() * rddbb.length)];
   var rddcc = ['về cho má nấu canh chua', 'cùng ông hàng xóm', 'cùng bố'];
   var work9 = rddcc[Math.floor(Math.random() * rddcc.length)];
   var rddee = ['đứng đường', 'thợ điện', 'ca sĩ', 'trapboiz', 'sờ cam'];
   var work10 = rddee[Math.floor(Math.random() * rddee.length)];
   var rddff = ['cùng thằng nhóc 12 tuổi', 'với bạn thân', 'với thằng lớp trưởng'];
   var work11 = rddff[Math.floor(Math.random() * rddff.length)];
   var rddgg = ['nyc', 'cô chủ nhiệm', 'lớp trưởng', 'qtv'];
   var work12 = rddgg[Math.floor(Math.random() * rddgg.length)];
   var rddhh = ['nyc', 'lớp trưởng', 'admin', 'người lạ'];
   var work13 = rddhh[Math.floor(Math.random() * rddhh.length)];
   var rddii = ['nhà hàng xóm', 'đại gia', 'thằng ăn mày', 'lớp trưởng'];
   var work14 = rddii[Math.floor(Math.random() * rddii.length)];
   var rddjj = ['đã hạ gục Faker', 'đấm to đầu Faker', 'vả vỡ mồm Faker', 'đấm túi bụi'];
   var work15 = rddjj[Math.floor(Math.random() * rddjj.length)];
   var rddkk = ['chó', 'mèo', 'cá sấu', 'rắn', 'cá heo', 'cá mập', 'tắc kè', 'sư tử', 'cọp'];
   var work16 = rddkk[Math.floor(Math.random() * rddkk.length)];
   if (senderID != handleReply.author) {
     api.sendMessage("⚠️",event.threadID)
   }
   try {
     var msg = "";
     switch (handleReply.type) {
       case "choosee": {

         switch (event.body) {
  case "1":
  msg = `Bạn đang làm việc ${work1} ở khu công nghiệp và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "2":
  msg = `Bạn đang làm việc ${work2} ở khu dịch vụ và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "3":
  msg = `Bạn ${work3} tại khu mở dầu và bán được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "4":
  msg = `Bạn đang khai thác ${work4} và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "5":
  msg = `Bạn đào được ${work5} và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "6":
  msg = `Bạn được ${work6} cho ${coin}$ nếu xxx 1 đêm, thế là bạn đồng ý ngay`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "7":
  msg = `Bạn à ${work7} vì vậy số tiền bạn nhận được là ${coin}$`;      
Currencies.increaseMoney(event.senderID, coin);
        break;
  case "8":
  msg = `Bạn bán ${work8} và nhận được số tiền là ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "9":
  msg = `Bạn đi câu cá ${work9} và được cho ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "10":
  msg = `Bạn ${work10} và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "11":
  msg = `Bạn đóng jav ${work11} và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "12":
  msg = `Bạn học hackfb ${work12} và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "13":
  msg = `Bạn gạ đ!t ${work13} và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "14":
  msg = `Bạn đi ăn cướp ${work14} và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "15":
  msg = `Bạn  ${work15} và kiếm được ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
        break;
  case "16":
  msg = `Bạn đã hoàn thành việc chăm sóc con ${work16} và được chủ trả lương tổng là ${coin}$`;
  Currencies.increaseMoney(event.senderID, coin);
       break;
           case "17":
             msg = "Chưa update...!";
             break; //thêm case nếu muốn 
           default:
             break;
         };
         const choose = parseInt(event.body);
         if (isNaN(event.body)) return api.sendMessage("Vui lòng nhập 1 con số!", event.threadID, event.messageID);
         if (choose > 17 || choose < 1) return api.sendMessage("Lựa chọn không nằm trong danh sách!", event.threadID, event.messageID);
         api.unsendMessage(handleReply.messageID);
         if (msg == "Chưa update...!") {
           msg = "Update soon...!";
         };
         return api.sendMessage(`${msg}`, threadID, async () => {
           let dataN = (await Currencies.getData(senderID)).money || 0;
           data.work2Time = Date.now();
           data.money = String(dataN)
           await Currencies.setData(senderID, { data });

         });

       };
     }
   } catch (e) {
     console.log(e)
   }
 }
 module.exports.run = async ({ event, api, handleReply, Currencies, getText }) => {
   const { threadID, messageID, senderID } = event;
   const cooldown = global.configModule[this.config.name].cooldownTime;
   let data = (await Currencies.getData(senderID)).data || {};
   if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {
     var time = cooldown - (Date.now() - data.work2Time),
       minutes = Math.floor(time / 60000),
       seconds = ((time % 60000) / 1000).toFixed(0);
     return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
   }
   else {
     return api.sendMessage(`
1. Khu công nghiệp 🏗️
2. Khu dịch vụ 🏘️
3. Khu mỏ dầu 🏭
4. Khai thác quặng ☣️
5. Đào đá ⛰️
6. Đứng đường 🏪
7. Không làm mà cũng có ăn 🐸
8. Bán hàng đa cấp 🪄
9. Câu cá 🐳
10. ramdom 1 công việc nào đó 🐧
11. đóng phim jav 🌚
12. hack facebook 💢
13. gạ đ!t 1 ai đó 🍑
14. đi cướp 🔥
15. solo với Faker 😏
16. Chăm sóc động vật 🏡
17. Update soon... (không chọn)

Reply (phản hồi) tin nhắn này theo stt để chọn`
       , event.threadID, (error, info) => {
         data.work2Time = Date.now();
         global.client.handleReply.push({
           type: "choosee",
           name: this.config.name,
           author: event.senderID,
           messageID: info.messageID
         })
       })
   }
 }
