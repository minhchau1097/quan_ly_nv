function domId(id) {
    return document.getElementById(id);
};
function quyDoi(id) {
    var quyDoi = new Intl.NumberFormat('vn-VN');
    return quyDoi.format(id);

}
var validation = new Validation();

var dsnv = new DanhSachNV();

getLocal();

function layThongTinNV(add) {
    var taiKhoan = domId('tknv').value;
    var hoTen = domId('name').value;
    var email = domId('email').value;
    var pass = domId('password').value;
    var ngayLam = domId('datepicker').value;
    var luongCB = +domId('luongCB').value;
    var chucVu = domId('chucvu').value;
    var gioLam = domId('gioLam').value;
    // validation


    var isValid = true
    // tai khoản
    if (add) {

        isValid &= validation.kiemTraKiTu(taiKhoan, 'tbTKNV', ' Tài khoản tối đa 4 - 6 ký số, không để trống', 4, 6) && validation.kiemTraTonTai(taiKhoan, 'tbTKNV', dsnv.arr, 'Tài khoản đã tồn tại');
    }
    // tên nhân viên
    isValid &= validation.kiemTraChu(hoTen, 'tbTen', "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", 'Tên nhân viên phải là chữ, không để trống')
    // email
    isValid &= validation.kiemTraChu(email, 'tbEmail', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email phải đúng định dạng, không để trống')
    isValid &= validation.kiemTraChu(pass, 'tbMatKhau', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/, 'Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống')
    isValid &= validation.kiemTraChu(ngayLam, 'tbNgay', /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/, 'Ngày làm không để trống')
    isValid &= validation.kiemTraLuong(luongCB, 'tbLuongCB', 'Lương cơ bản 1 000 000 - 20 000 000, không để trống')
    isValid &= validation.kiemTraChucVu('chucvu', 'tbChucVu', 'Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)')
    isValid &= validation.kiemTraGioLam(gioLam, 'tbGiolam', 'Số giờ làm trong tháng 80 - 200 giờ, không để trống')






    if (!isValid) return null;


    var nhanVien = new NhanVien(taiKhoan, hoTen, email, pass, ngayLam, luongCB, chucVu, gioLam);

    nhanVien.tinhLuongNV();

    nhanVien.xepLoaiNV();


    return nhanVien;



}

function renderTable(data) {
    var content = '';
    for (var i = 0; i < data.length; i++) {
        var nv = data[i]

        content += `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${quyDoi(nv.tongLuong)}</td>
        <td>${nv.loaiNV}</td>
        <td>
        <button class = 'btn btn-warning' onclick = 'btnDelete("${nv.taiKhoan}")'>Delete</button>
        
        <button class = 'btn btn-success ' data-target="#myModal" data-toggle="modal" onclick = 'btnEdit("${nv.taiKhoan}")'>Edit</button>
        
        
        </td>
        
        
        </tr>
        
        `;

    }
    domId('tableDanhSach').innerHTML = content;
}
function btnEdit(taiKhoan) {
    domId('btnThemNV').style.display = 'none';
    domId('btnCapNhat').style.display = 'inline-block';
    var nv = dsnv.layThongTinNV(taiKhoan);
    if (nv) {
        domId('tknv').disabled = true;
        domId('tknv').value = nv.taiKhoan;


        domId('name').value = nv.hoTen;
        domId('email').value = nv.email;
        domId('password').value = nv.pass;
        domId('datepicker').value = nv.ngayLam;
        domId('luongCB').value = nv.luongCB;
        domId('chucvu').value = nv.chucVu;
        domId('gioLam').value = nv.gioLam;
    }
}

function btnDelete(taiKhoan) {
    dsnv.xoaNV(taiKhoan);
    renderTable(dsnv.arr);
    setLocal();
}
domId('btnThem').addEventListener('click', function () {
    domId('tknv').disabled = false;
    domId('btnThemNV').style.display = 'inline-block';
    domId('btnCapNhat').style.display = 'none';
    domId('tknv').value = '';


    domId('name').value = '';
    domId('email').value = '';
    domId('password').value = '';
    domId('datepicker').value = '';
    domId('luongCB').value = '';
    domId('chucvu').value ='Chọn chức vụ';
    domId('gioLam').value = '';
});

domId('searchName').addEventListener('keyup', function () {
    var keyW = domId('searchName').value;
    var timKiem = dsnv.timNV(keyW);
    renderTable(timKiem);
});

domId('btnCapNhat').addEventListener('click', function () {
    var nhanVien = layThongTinNV(false);


    dsnv.capNhatNV(nhanVien);


    renderTable(dsnv.arr);
    setLocal();

});
domId('btnThemNV').addEventListener('click', function () {

    var nhanVien = layThongTinNV(true);


    dsnv.themNV(nhanVien);

    renderTable(dsnv.arr);
    setLocal();


});


function setLocal() {
    //convert từ JSON sang string
    var dataString = JSON.stringify(dsnv.arr);

    localStorage.setItem('DSNV', dataString);
}


function getLocal() {
    if (localStorage.getItem('DSNV')) {


        var dataString = localStorage.getItem('DSNV');

        dsnv.arr = JSON.parse(dataString);
        renderTable(dsnv.arr);
    }
}