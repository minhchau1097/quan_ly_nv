function DanhSachNV() {
    this.arr = [];

    this.themNV = function (nv) {
        this.arr.push(nv);
    };

    this.xoaNV = function (taiKhoan) {
        var index = this.timViTri(taiKhoan);
        if (index !== -1) {

            this.arr.splice(index, 1);
        }
    }
    this.capNhatNV = function (nv) {
        var index = this.timViTri(nv.taiKhoan);
        if(index !== -1){
            this.arr[index] = nv;
        }
     }
    this.timNV = function (keyW) {
        var timKiem = [];
        for (var i = 0; i < this.arr.length; i++) {
            var nv = this.arr[i];
            keyW = keyW.toLowerCase();
            nv.loaiNV = nv.loaiNV.toLowerCase();
            if (nv.loaiNV.indexOf(keyW) !== -1) {
                timKiem.push(nv)
            }
        }
        return timKiem;


    }
    this.timViTri = function (taiKhoan) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var nv = this.arr[i];
            if (nv.taiKhoan === taiKhoan) {
                index = i;
                break;
            }
        }
        return index;
    }
    this.layThongTinNV = function (taiKhoan) {
        var index = this.timViTri(taiKhoan);
    
        if (index !== -1) {
          return this.arr[index];
        }
    
        return null;
      };
    
}