$(document).ready(function(){
    $(":input").blur(function(){
        allFreshman = count($("#allFreshman").val()); 
        seniorAttend = count($("#seniorAttend").val());
        seniorAbsent = count($("#seniorAbsent").val());
        allSenior = seniorAttend + seniorAbsent;
        dollar = Math.floor( count($("#dollar").val()) );


        dollarSplit = dollar/(allFreshman + seniorAttend) ;  //單價
        dollarTreat = dollarSplit * allFreshman / allSenior; //請客分擔
        attendPay = Math.floor( dollarSplit + dollarTreat);
        absentPay = Math.floor( dollarTreat ); 
        add1 = attendPay + absentPay; // 幫一個人出
        add2 = add1 + absentPay; // 幫兩個人出
        pay = attendPay*seniorAttend + absentPay*seniorAbsent;
        less =pay - dollar;
        if(allFreshman && allSenior && dollar){
            $("#attendPay").val(attendPay);
            $("#absentPay").val(absentPay);
            $("#add1").val(add1);
            $("#add2").val(add2);
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