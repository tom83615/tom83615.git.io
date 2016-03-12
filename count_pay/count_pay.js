$(document).ready(function(){
    $(":input").blur(function(){
        allFreshman = count($("#allFreshman").val());
        allSenior = count($("#allSenior").val());
        dollar = Math.floor( count($("#dollar").val()) );
        absentPay = Math.floor( (allFreshman * dollar) / allSenior );
        attendPay = Math.floor( absentPay + dollar);
        add1 = attendPay + absentPay;
        add2 = add1 + absentPay;
        total = dollar*(allFreshman+allSenior);
        pay = attendPay*allSenior;
        less =total-pay;
        if(allFreshman && allSenior && dollar){
            $("#attendPay").val(attendPay);
            $("#absentPay").val(absentPay);
            $("#add1").val(add1);
            $("#add2").val(add2);
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
        //alert("輸入錯誤");
        return false;}
    else
        return eval(number);
}