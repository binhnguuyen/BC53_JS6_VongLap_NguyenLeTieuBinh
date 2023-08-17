// Bài 1
function findSmallestNum() {
    var sum = +document.getElementById("sum").value;
    var result1 = document.getElementById("result1");
    var resContent = "";
    var calcSum = 0;
    var cnt = 0;

    while (calcSum <= sum) {
        calcSum += cnt;
        cnt++;
    }

    resContent =
        `
    <div>
        <span>
        Để có tổng dãy số lớn hơn ${sum} thì số nguyên dương nhỏ nhất để cộng dãy là ${cnt - 1} và tổng khi đó là ${calcSum}
        </span>
    </div> 
    `;

    result1.innerHTML = resContent;
}


// Bài 2
function findTotal() {
    var numX = +document.getElementById("numX").value;
    var numN = +document.getElementById("numN").value;
    var result2 = document.getElementById("result2");
    var resContent = "";
    var total = 0;
    var cnt = 1;

    while (cnt <= numN) {
        total += numX ** cnt;
        cnt++;
    }

    resContent =
        `
    <div>
        <span>
        Phép tính x + x^2 + ... + x^n với x là ${numX} và n là ${numN} có kết quả là ${total}
        </span>
    </div> 
    `;

    result2.innerHTML = resContent;
}



// Bài 3
function timGiaiThua() {
    var giaiThuaN = +document.getElementById("giaiThuaN").value;
    var result3 = document.getElementById("result3");
    var resContent = "";
    var total = 1;
    var cnt = 1;

    while (cnt <= giaiThuaN) {
        total = total * cnt;
        cnt++;
    }

    if (giaiThuaN == 0) {
        resContent =
            `
    <div>
        Xin nhập số lớn hơn 0
    </div> 
    `;
    }
    else {
        resContent =
            `
    <div>
        <span>
        Giai thừa 1*2*...*n với n là ${giaiThuaN} có kết quả là ${total}
        </span>
    </div> 
    `;
    }

    result3.innerHTML = resContent;
}


// Bài 4
function taoNewClass() {
    var numNewClass = +document.getElementById("numNewClass").value;
    var result4 = document.getElementById("result4");

    for (var i = 0; i < numNewClass; i++) {
        var newEle = document.createElement("p");
        newEle.innerHTML = "thẻ này vừa mới đc tạo";

        if (i % 2 == 0) {
            newEle.style.backgroundColor = "red";
        }
        else {
            newEle.style.backgroundColor = "blue";
        }

        // Gán giá trị thẻ mới vào result4
        document.getElementById('result4').appendChild(newEle);
    }
}

// Bài 5
function timSoNguyenTo() {
    var number = +document.getElementById("number").value;
    var result5 = document.getElementById("result5");
    var resContent = "";
    var soNguyenTo = "";
    var cnt = 0;

    if (number < 2) {
        resContent =
            `
        <div>
            <span>
                ${number} không phải là số nguyên tố
            </span>
        </div> 
        `;
    }
    else if (number == 2) {
        resContent =
            `
        <div>
            <span>
                ${number} là số nguyên tố nhỏ nhất
            </span>
        </div> 
        `;
    }
    else {
        for (var i = 2; i <= number; i++) {
            for (var j = 2; j <= i; j++) {
                if (i % j == 0) {
                    if ( i != j ) {
                        cnt = 0;
                        break;
                    }
                    else {
                        cnt++;
                    }
                }
                else {
                    cnt++;
                }  
            }
            if (cnt == (i - 2 + 1)) {
                soNguyenTo += i + "  ";
                cnt = 0;
            }            
        }

        
        resContent =
            `
        <div>
            <span>
                Những số nguyên tố bé hơn hoặc bằng ${number} là ${soNguyenTo}
            </span>
        </div> 
        `;
    }



    result5.innerHTML = resContent;
}