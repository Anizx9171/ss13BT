// tạo bảng cho phép người dùng nhập từ cần tra cứu
//tra cứu từ tiếng anh trong mảng 1
//tra cứu từ tiếng việt = từ tiếng anh trong mảng 2
//tìm đc hiẻn thị
//ko tìm đc thông báo ko tìm thấy

let text = prompt('nhập vào từ bạn muốn tra cứu')

let arrEn = ["hello", "good bye", "cat", "dog", "bat"]
let arrVi = ["xin chào", "tạm biệt", "con mèo", "con chó","con dơi"]

let check = false;
for (let i = 0; i < arrEn.length; i++) {
    if (arrEn[i] == text){
       console.log(arrVi[i])
       check= true;
       break;
    }
}

if(!check) {
    console.log("Ko tim thay");
}