$(document).ready(function(){
    $(":input").blur(function(){
        allFreshman = count($("#allFreshman").val());
        allSenior = count($("#allSenior").val());
        dollar = count($("#dollar").val());
        absentPay = (allFreshman * dollar) / allSenior;
        attendPay = absentPay + dollar;
        add1 = attendPay + absentPay;
        add2 = add1 + absentPay;
        total = dollar*(allFreshman+allSenior);
        pay = attendPay*allSenior;
        less =total-pay;
        if(allFreshman && allSenior && dollar){
            $("#attendPay").val(Math.floor(attendPay));
            $("#absentPay").val(Math.floor(absentPay));
            $("#add1").val(Math.floor(add1));
            $("#add2").val(Math.floor(add2));
            $("#total").val(total);
            $("#pay").val(pay);
            $("#less").val(less);
        }
    });
});
function count(number)
{
    val = numtest(number);
    if (val == false) 
        return 0;
    else
        return val;
}
function numtest(number)
{
    var active = /[0-9+-/*///)]?/;
    if(!active.test(number) || number ===""){ //regexp跟null判斷
        alert("輸入錯誤");
        return false;}
    else
        return eval(number);
}