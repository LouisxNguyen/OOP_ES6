import ListPerson from "./models/listPerson.js";

import Student from "./models/students.js";
import Employee from "./models/employee.js";
import Customer from "./models/customers.js";
//GLOBAL
const domID = (id) => document.getElementById(id);

const resetThongTin = () => {
    domID("idCode").value = "";
    domID("name").value = "";
    domID("address").value = "";
    domID("email").value = "";
    // domID("diemToan").value = "";
    // domID("diemLy").value = "";
    // domID("diemHoa").value = "";
    // domID("luongCB").value = "";
    // domID("ngayLam").value = "";
    // domID("tenCongTy").value = "";
    // domID("hoaDon").value = "";
}
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
//----------------------------------------

// RENDER 
const renderByType = (type) => {
    if (type == 'Student') {
        domID("formType").innerHTML = `
    <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-money" aria-hidden="true"></i></span>
            </div>
                <input type="text" name="diemToan" id="diemToan" class="form-control input-sm"
                placeholder="Điểm Toán">
        </div>
            <span class="sp-thongbao" id="tbDiemToan"></span>		
</div>
<div class="form-group">
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-money" aria-hidden="true"></i></span>
        </div>
            <input type="text" name="diemLy" id="diemLy" class="form-control input-sm"
            placeholder="Điểm Lý">
    </div>
    <span class="sp-thongbao" id="tbDiemLy"></span>		
</div>
<div class="form-group">
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-money" aria-hidden="true"></i></span>
        </div>
            <input type="text" name="diemHoa" id="diemHoa" class="form-control input-sm"
            placeholder="Điểm Hoá">
    </div>
    <span class="sp-thongbao" id="tbDiemHoa"></span>		
</div>
`
    }
    else if (type == 'Employee') {
        domID("formType").innerHTML = `
        <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-money" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" name="luongCB" id="luongCB" class="form-control input-sm"
                                placeholder="Lương cơ bản">
                        </div>
                        <span class="sp-thongbao" id="tbLuongCB"></span>
                
                    </div>
                    
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-clock-o" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" name="ngayLam" id="ngayLam" class="form-control input-sm"
                                placeholder="Số ngày làm việc">
                        </div>
                        <span class="sp-thongbao" id="tbNgayLam"></span>
                        
                    </div>
        `
    }
    else if (type == 'Customer') {
        domID("formType").innerHTML = `
        <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span>
            </div>
            <input type="text" name="tenCongTy" id="tenCongTy" class="form-control input-sm"
                placeholder="Tên công ty">
        </div>
        <span class="sp-thongbao" id="tbTenCongTy"></span>
    </div>
    <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span>
            </div>
            <input type="number" name="hoaDon" id="hoaDon" class="form-control input-sm"
                placeholder="Trị giá hoá đơn">
        </div>
        <span class="sp-thongbao" id="tbHoaDon"></span>
    </div>
    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-briefcase"></i></span>
                            </div>
                            <select class="form-control" id="danhGia">
                                <option disabled>Đánh giá</option>
                                <option>Well</option>
                                <option>Good</option>
                                <option>Not Good</option>
                            </select>
                        </div>
                        <span class="sp-thongbao" id="tbDanhGia"></span>
                    </div>
        `
    }
    else {
        domID("formType").innerHTML = ``;
    }
}

domID('btnThem').onclick = () => {
    domID("idCode").disabled = false;
    domID("btnThemNV").style.display = "block";
    domID("btnCapNhat").style.display = "none";
    domID("header-title").innerHTML = 'Chọn loại người dùng';
    domID("typeUser").addEventListener('change', () => {
        let type = domID("typeUser").value;
        renderByType(type);
    })
}

// LẤY THÔNG TIN NGƯỜI DÙNG
const layThongTin = () => {
    const _name = domID("name").value;
    const _address = domID("address").value
    const _idCode = domID("idCode").value;;
    const _email = domID("email").value;
    const _type = domID("typeUser").value;

    if (_type == 'Student') {
        const _diemToan = domID("diemToan").value;
        const _diemHoa = domID("diemHoa").value;
        const _diemLy = domID("diemLy").value;
        const student = new Student(_name, _address, _idCode, _email, _type, _diemToan, _diemLy, _diemHoa);
        let listPerson = student;
        listPerson.tinhDTB();
        return listPerson;
    }
    else if (_type == 'Employee') {
        const _ngayLam = domID("ngayLam").value;
        const _luong1Ngay = domID("luongCB").value;
        const employee = new Employee(_name, _address, _idCode, _email, _type, _ngayLam, _luong1Ngay);
        let listPerson = employee;
        listPerson.tinhLuong();
        return listPerson;
    }
    else if (_type == 'Customer') {
        const _tenCongTy = domID("tenCongTy").value;
        const _hoaDon = domID("hoaDon").value;
        const _danhGia = domID("danhGia").value;
        const customer = new Customer(_name, _address, _idCode, _email, _type, _tenCongTy, _hoaDon, _danhGia);
        let listPerson = customer;

        return listPerson;
    }
}

// IN THÔNG TIN NHÂN VIÊN RA BROWSER
const renderUI = (danhSach) => {
    const list = danhSach.reduce((content, person) => {
        return content += `
            <tr>
                <td>${person.idCode}</td>
                <td>${person.name}</td>
                <td>${person.email}</td>
                <td>${person.address}</td>
                <td>${person.type}
                    <a class="d-block"><button type="button" class="btn btn-link m-auto" data-toggle="modal" data-target="#moreInfoModal" onclick="showMore(${person.idCode})">Xem chi tiết</button></a>
                </td>
                <td>
                    <button data-toggle="modal" data-target="#myModal" class="btn btn-secondary" onclick="changeUser(${person.idCode})">Sửa</button>
                    <button class="btn btn-danger mb-1" onclick="deleteUser(${person.idCode})">Xoá</button> 
                </td>
            </tr>
            `
    }, ``)
    domID("tableDanhSach").innerHTML = list;
}

let listPerson = new ListPerson();
// GẮN SỰ KIỆN CHO NÚT THÊM NHÂN VIÊN
domID("btnThemNV").onclick = () => {

    const thongTin = layThongTin();
    // Gọi phương thức để push nhân viên vào mảng
    listPerson.addNew(thongTin);
    // Gọi hàm in để hiển thị thông tin ra trình duyệt
    console.log(thongTin)
    renderUI(listPerson.arr);
}

// In thông tin khi ấn nút "Xem chi tiết"
const showMore = (id) => {
    const currentUser = listPerson.checkType(id);
    let content = ``;
    if (currentUser.type == 'Student') {
        content = `
        <table class="table table-bordered table-hover myTable">
        <thead class="text-primary">
			<tr>
				<th class="nowrap">
					<span class="mr-1">Điểm toán</span>
				</th>
				<th>Điểm lý</th>
				<th>Điểm hoá</th>
				<th>Điểm trung bình</th>
			</tr>
		</thead>
        <tbody>
        <tr>
        <td>${currentUser.toan}</td>
        <td>${currentUser.ly}</td>
        <td>${currentUser.hoa}</td>
        <td>${currentUser.dtb}</td>
        </tr>
		</tbody>
        </table>
        `
    }
    else if (currentUser.type == 'Employee') {
        content = `
        <table class="table table-bordered table-hover myTable">
        <thead class="text-primary">
			<tr>
				<th class="nowrap">
					<span class="mr-1">Số ngày làm</span>
				</th>
				<th>Lương theo ngày</th>
				<th>Tổng lương</th>
			</tr>
		</thead>
        <tbody>
        <tr>
        <td>${currentUser.ngayLam}</td>
        <td>${formatter.format(currentUser.luong1Ngay)}</td>
        <td>${formatter.format(currentUser.tongLuong)}</td>
        </tr>
		</tbody>
        </table>
        `
    }
    else if (currentUser.type == 'Customer') {
        content = `
        <table class="table table-bordered table-hover myTable">
        <thead class="text-primary">
			<tr>
				<th class="nowrap">
					<span class="mr-1">Tên công ty</span>
				</th>
				<th>Hoá đơn</th>
				<th>Đánh giá</th>
			</tr>
		</thead>
        <tbody>
        <tr>
        <td>${currentUser.company}</td>
        <td>${formatter.format(currentUser.receipt)}</td>
        <td>${currentUser.evaluation}</td>
        </tr>
		</tbody>
        </table>
        `
    }
    domID("modal-body-moreInfo").innerHTML = content;
}
window.showMore = showMore;

// XOÁ NGƯỜI DÙNG
const deleteUser = (id) => {
    listPerson.delUser(id);
    renderUI(listPerson.arr);
    alert("Xoá thành công!")
}
window.deleteUser = deleteUser;

// LẤY THÔNG TIN ĐỂ SỬA
const changeUser = (id) => {
    domID("btnThemNV").style.display = 'none';
    domID("btnCapNhat").style.display = 'inline-block';
    const nowPerson = listPerson.checkType(id);
    domID("name").value = nowPerson.name;
    domID("address").value = nowPerson.address;
    domID("idCode").value = nowPerson.idCode;
    domID("idCode").disabled = true;
    domID("email").value = nowPerson.email;
    domID("typeUser").value = nowPerson.type;
    if (nowPerson.type == 'Student') {
        renderByType(nowPerson.type);
        domID("diemToan").value = nowPerson.toan;
        domID("diemHoa").value = nowPerson.ly;
        domID("diemLy").value = nowPerson.hoa;
    }
    else if (nowPerson.type == 'Employee') {
        renderByType(nowPerson.type);
        domID("ngayLam").value = nowPerson.ngayLam;
        domID("luongCB").value = nowPerson.luong1Ngay;
    }
    else if (nowPerson.type == 'Customer') {
        renderByType(nowPerson.type);
        domID("tenCongTy").value = nowPerson.company;
        domID("hoaDon").value = nowPerson.receipt;
        domID("danhGia").value = nowPerson.evaluation;
    }
}
window.changeUser = changeUser;

// SỬA THÔNG TIN 
const updateUser = () => {
    const name = domID("name").value;
    const address = domID("address").value;
    const idCode = domID("idCode").value;
    const email = domID("email").value;
    const type = domID("typeUser").value;
    if (type == 'Student') {
        const toan = domID("diemToan").value;
        const ly = domID("diemHoa").value;
        const hoa = domID("diemLy").value;
        const newStudent = new Student(name, address, idCode, email, type, toan, ly, hoa);
        newStudent.tinhDTB();
        listPerson.updateInfo(newStudent);
    }
    else if (type == 'Employee') {
        const ngayLam = domID("ngayLam").value;
        const luong1Ngay = domID("luongCB").value;
        const newEmployee = new Employee(name, address, idCode, email, type, ngayLam, luong1Ngay);
        newEmployee.tinhLuong();
        listPerson.updateInfo(newEmployee);
        console.log(newEmployee)
    }
    else if (type == 'Customer') {
        const company = domID("tenCongTy").value;
        const receipt = domID("hoaDon").value;
        const evaluation = domID("danhGia").value;
        const newCustomer = new Customer(name, address, idCode, email, type, company, receipt, evaluation);
        listPerson.updateInfo(newCustomer);
    }
    domID("btnDong").click();
}
window.updateUser = updateUser;

domID("searchName").addEventListener("keyup", () => {
    const key = domID("searchName").value.toLowerCase();
    const arrFilter = listPerson.searchPerson(key);
    renderUI(arrFilter);
})

const sapXepTen = (UpDown) => {
    const arrFilter = listPerson.sortName(UpDown);
    renderUI(arrFilter);
}
window.sapXepTen = sapXepTen;

// domID("btnSapXepTen").onclick = () => {
//     domID("btnSapXepTen").innerHTML = `<i onclick="sapXepTen('down')" class="fa-solid fa-arrow-down"></i>`
    
//     const arrFilter = listPerson.sortName();
//     renderUI(arrFilter);
// }