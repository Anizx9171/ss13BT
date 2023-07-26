const bakery = ["socola", "chuoi", "cam", "tao", "xoai"];
const cart = []
console.log(bakery);
while (traLoi != "no") {
    let sanPham = prompt("Nhap vao san pham ban muon")

    if (bakery.includes(sanPham)) {
        let check = false
        let vitri
        for (let i = 0; i < cart.length; i++) {
            if (sanPham == cart[i][0]) {
                check = true
                vitri = i
            }
        }
        if (check == false) {
            cart.push([sanPham, 1])
        } else {
            cart[vitri][1] += 1
        }
        console.log(cart);
        do {
            traLoi = prompt("Ban co muon mua nua khong")
        } while (traLoi != "yes" && traLoi != "no")
        if (traLoi == "yes") {
            continue
        } else {
            break;
        }
    } else {
        console.log("Cua hang ko co san pham nay");
    }
}