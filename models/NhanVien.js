function NhanVien(taiKhoan, hoTen, email, pass, ngayLam, luongCB, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.pass = pass;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNV = '';




    this.tinhLuongNV = function () {
        if (this.chucVu == 'Sếp') {
            this.tongLuong = this.luongCB * 3;

        } else if (this.chucVu == 'Trưởng phòng') {
            this.tongLuong = this.luongCB * 2;

        } else {
            this.tongLuong = this.luongCB;

        }
    }


    this.xepLoaiNV = function () {
        if(this.gioLam >= 192){
            this.loaiNV = 'Nhân viên xuất sắc'
        }else if(this.gioLam >= 176){
            this.loaiNV = 'Nhân viên giỏi'
        }else if(this.gioLam >= 160){
            this.loaiNV = 'Nhân viên khá'
        }else if(this.gioLam < 160){
            this.loaiNV = 'Nhân viên trung bình'
        }
    }
};