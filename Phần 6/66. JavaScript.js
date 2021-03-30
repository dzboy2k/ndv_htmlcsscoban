// Hàm 1: In ra màn hình
// console.log("nội dung cần in ra");
// Mở chrom - ấn f12 - chọn cửa sổ console
console.log("Hello");
x = "troi dep";
console.log("xin chao ban, hom nay "+x)

// Hàm 2: Click vào nút
// - Gọi tên nút
x/*biến*/=document.querySelector('.n');
// Hàm click - gắn sự kiện
x.addEventListener('click',function/*Hàm*/(){
    console.log("Ban vua click vao toi");
    // document.querySelector('.anh').classList.add('sangphai'); //Hàm 3 - thêm
    document.querySelector('.anh').classList.toggle('sangphai'); //Hàm 3 - bật tắt
})

n2=document.querySelector('.n2');
n2.addEventListener('click',function(){
    console.log("Click vao N2 nhe");
})

// Hàm 3: classList.add('tintuc')
// - Thêm class vào trong thẻ html
