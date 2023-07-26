// Tạo  1 mảng chứa các công việc
// Tạo 1 thông báo cho người dùng nhập vào
//// C == tạo ra 1 công việc mới
// ---> hiện prompt cho người dùng nhập vào công việc mới
// ---> push công việc mới vào trong mảng
////U == sửa công việc
// ---> hiện prompt công việc bạn muốn thay thế
// ---> hiện prompt cho người dùng nhập vào công việc muốn sửa
// ---> push công việc mới vào trong vị trí muốn thay thế
////D == xóa
// ---> prompt bạn muốn xóa xông việc số mấy
// ---> xóa công việc vị trí đó
////R == hiển thị
//---> log ra mảng chứa các công việc
//cho lập lại
let arrJob = []
let a;
while (true) {
    a = prompt("Nhập (C\/ U\/ D\/ R) và nhập Exit để thoát")
    if (a == "C") {
        let job = prompt("Nhập công việc bạn muốn thêm")
        arrJob.push(job)
    }
    else if (a == "U") {
        let stt = prompt(`Nhập vị trí công việc bạn muốn sửa (0 - ${arrJob.length -1})`)
        let job = prompt("Nhập công việc bạn muốn thay thế")
        arrJob[stt] = job
    }
    else if (a == "D") {
        let job = prompt(`Nhập vị trí bạn muốn xóa (0 - ${arrJob.length -1})`)
        arrJob.splice(job, 1)
    }
    else if (a == "R") {
        console.log(arrJob);
    }
    else if (a == "Exit") {
        break;
    }
    else {
        alert("Nhập sai nhập lại")
    }

}