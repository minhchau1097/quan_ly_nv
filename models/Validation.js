function Validation() {
    this.kiemTraRong = function (value, errorId, mess) {
        if (value === "" || value <= 0) {
          //Sai
          domId(errorId).style.display = "block";
          domId(errorId).innerHTML = mess;
          return false;
        }
    
        //Dung
        domId(errorId).style.display = "none";
        domId(errorId).innerHTML = "";
        return true;
    }
    this.kiemTraKiTu = function (value, errorId, mess, min, max) {
        if (value.length >= min && value.length <= max) {
            domId(errorId).innerHTML = ''
            domId(errorId).style.display = 'none'
            return true;
        }
        domId(errorId).innerHTML = mess
        domId(errorId).style.display = 'block'
        return false;


    }
    this.kiemTraChu = function (value, errorId, letter, mess) {
        if (value.match(letter)) {
            domId(errorId).innerHTML = ''
            domId(errorId).style.display = 'none'
            return true;
        }
        domId(errorId).innerHTML = mess
        domId(errorId).style.display = 'block'
        return false;


    }
    this.kiemTraLuong = function (value, errorId, mess) {
        if (value >= 1000000 && value <= 20000000) {
            domId(errorId).innerHTML = ''
            domId(errorId).style.display = 'none'
            return true;
        }
        domId(errorId).innerHTML = mess
        domId(errorId).style.display = 'block'
        return false;


    }
    this.kiemTraChucVu = function (idSelect, errorId, mess) {
        if (domId(idSelect).selectedIndex !== 0) {
            domId(errorId).innerHTML = ''
            domId(errorId).style.display = 'none'
            return true;
        }
        domId(errorId).innerHTML = mess
        domId(errorId).style.display = 'block'
        return false;


    }
    this.kiemTraGioLam = function (value, errorId, mess) {
        if (value >= 80 && value <= 200) {
            domId(errorId).innerHTML = ''
            domId(errorId).style.display = 'none'
            return true;
        }
        domId(errorId).innerHTML = mess
        domId(errorId).style.display = 'block'
        return false;


    }
    this.kiemTraTonTai = function (value, errorId, arr, mess) {
        var result = false;
        for (var i = 0; i < arr.length; i++) {
            var nv = arr[i]
            if(nv.taiKhoan === value){
                result = true;
                break;
            }
        }
        if(result){
            domId(errorId).innerHTML = mess
            domId(errorId).style.display = 'block'
            return false;
        }
        domId(errorId).innerHTML = ''
        domId(errorId).style.display = 'none'
        return true;
    }
}