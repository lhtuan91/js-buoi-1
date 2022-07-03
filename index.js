// console.log("Hello world 2!!")
// var name = "LÊ HUỲNH TUẤN";
// var age = 22;
// age = 21;
// var phoneNumber = "0779983279";
// var dateOfBirth = "9/1/2001";

// console.log(name)
// console.log(age)
// console.log(phoneNumber)
// console.log(dateOfBirth)


//  var number = 1;
//  var email = "lhtuan91@gmail.com"
//  var isLogin = false;
//  var weight;
//  var height = null;


//  var res1 =5+6;
//  var res2 =5-6;
//  var res3 =5*6;
//  var res4 =5/6;
//  var res5 =5%6;

//  res1 = res1 +6
//  res2++;
//  res2--;

// res3 += 5; // res3 = res3 +5 =35
// res3 -=2; // res3 = res3 -2 =33;
// res3 /=3; // res3 = res3 /3 = 11;
// res3 *=2; // res3 = res3 *2 =22;

//  console.log(res1, res2, res3, res5)


// bai1
/**
 *  sơ đồ 3 khối 
 * INPUT: lương 1 ngày, số ngày làm
 * 
 * PROCESS:
 * 1. lấy được input (hardcode)
 * 2. tính lương = lương 1 ngày + số ngày làm
 * 3. log lương ra màn hình
 * 
 * OUTPUT: lương
 */
 var salaryPerDay = 100.000;
 var workingDays = 3;
 var totalSalary = salaryPerDay * workingDays
 console.log("Tổng lương trong tháng là:",totalSalary );
 // bai2
 /**
  * INPUT: 5 số thực, giá trị trung bình
  * 
  * PROCESS:
  * 1. lấy được input
  * 2. tính trung bình của 5 số thực = 5 số thực / 5
  * 3. log ra màn hình
  * 
  * OUTPUT: trung bình
  */
 var rnumber1 = 5;
 var rnumber2 = 10;
 var rnumber3 = 15;
 var rnumber4 = 20;
 var rnumber5 = 25;
 var average1 = rnumber1 / 5;
 var average2 = rnumber2 / 5;
 var average3 = rnumber3 / 5;
 var average4 = rnumber4 / 5;
 var average5 = rnumber5 / 5;
 console.log("Giá trị trung bình là:",average1 ,average2, average3, average4, average5);
 // bai3
 /**
  * INPUT: USD hiện nay đổi sang VNĐ = 23.500 VNĐ , số tiền USD
  * 
  * PROCESS:
  * 1. lấy được input
  * 2. tính tiền = số tiền USĐ * USD hiện nay => tiền VNĐ
  * 3. log ra màn hình
  * 
  * OUTPUT: VNĐ
  */
 var USDToVNĐ = 23.500;
 var USD = 5;
 var charge = USD * USDToVNĐ
 console.log("Số tiền sau quy đổi VNĐ là:",charge,"VNĐ");
 // bai4
 /**
  * INPUT: 2 chiều dài và chiều rộng HCN, diện tích và chu vi HCN
  *     
  * PROCESS:
  * 1. lấy được input
  * 2. diện tích = dài * rộng
  * 3. chu vi = (dài + rộng) * 2
  * 4. log ra màn hình
  * 
  * OUTPUT: diện tích và chu vi
  */
 var length1 = 3;
 var length2 = 4;
 var width = 6;
 var acreage = length1 * width
 var perimeter = (length2 + width) * 2
 console.log("diện tích HCN là:",acreage);
 console.log("Chu vi HCN là:",perimeter);
// gợi ý bai5
/**
 * INPUT: 1 số có 2 chữ số, tính tổng 2 ký số
 * 
 * PROCESS:
 * 1. lấy được input
 * 2. tổng = 2 chữ số % 10;
 *           2 chữ số /10;
 * 
 * OUTPUT: tổng
 */
var n = 58;
var total1 = n % 10;
var total2 = Math.floor(n / 10);
console.log("Tổng của các chữ số là:", total1+total2);
// var n = 83;
//  var num1 = n % 10; //3 
//  var num2 = Math.floor(n / 10); //8
 //var num2 = Math.ceil(n / 10); 
 //var num2 = Math.round(n / 10);
