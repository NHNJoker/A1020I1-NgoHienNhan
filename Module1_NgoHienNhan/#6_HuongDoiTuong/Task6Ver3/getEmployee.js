let sPageURL = window.location.search.substring(1);
let sURLVariables = sPageURL.split('&');
let name =sURLVariables[0].split('=')[1];
let age=sURLVariables[1].split('=')[1];
let subject =sURLVariables[2].split('=')[1];
document.write(name+","+age+","+subject);
// function tableAddEmploy(a) {
//     console.log(a);
//     let tableString = '<h2>Danh sách nhân viên:</h2>\n' + '<table>\n' +
//         '    <tr>\n' +
//         '        <th>STT</th>\n' +
//         '        <th>Full name</th>\n' +
//         '        <th>Date of birth</th>\n' +
//         '    </tr>';
//     for (let i = 0; i < listEmployees.length; i++) {
//         countNv++;
//         tableString = tableString + '<tr>\n' +
//             '        <td>' + (i + 1) + '</td>\n' +
//             '        <td>' + listEmployees[i].getName() + '</td>\n' +
//             '        <td>' + listEmployees[i].getDayOfBirth() + '</td>\n' +
//             '<td><input type="button" value="Display Information Employee" onclick="displayEmployee(' + i + ')"></td>\n' +
//             '<td><input type="button" value="Salary of Employeesr " onclick="salary(' + i + ')"></td>\n' +
//             '    </tr>'
//     }
//     tableString = tableString + '</table>';
//     document.getElementById('listEmployee').innerHTML = tableString;
// }
// tableAddEmploy(listEmployees);
// function displayEmployee(i) {
//     let thongTinNV = "<h1>Thông tin nhân viên:</h1>\n" +
//         "<h3>Họ và tên\\Full name:</h3>\n" +
//         "<p>" + listEmployees[i].getName() + "</p>\n" +
//         "<h3>CMND\\ID card:</h3>\n" +
//         "<p>" + listEmployees[i].getDayOfBirth() + "</p>\n" +
//         "<h3>Ngày sinh\\Date of birth:</h3>\n" +
//         "<p>" + listEmployees[i].getIdCard() + "</p>\n" +
//         "<h3>Email:</h3>\n" +
//         "<p>" + listEmployees[i].getEmail() + "</p>\n" +
//         "<h3>Chức vụ\\Office:</h3>\n" +
//         "<p>" + listEmployees[i].getOffice() + "</p>";
//     document.getElementById('show').innerHTML = thongTinNV;
// }
