
/*led1 led1.2 led2 led3 led5 led_out led_in*/
var LEDColor = [2, 2, 3, 4, 3, 0, 1];

/***********************
  Begin onClick Methods
 ***********************/
function onclickAdamak()
{

    AjaxChangeColor(0, LEDColor[6] + 1 < 9 ? LEDColor[6] + 1 : 0, 0, 6);

}

function onclickOut()
{

    AjaxChangeColor(1, LEDColor[5] + 1 <= 1 ? LEDColor[5] + 1 : 0, 0, 5);

}

function onclick1()
{

    AjaxChangeColor(2, LEDColor[0] + 1 < 5 ? LEDColor[0] + 1 : 0, 0, 0);

}

function onclick12()
{

    AjaxChangeColor(3, LEDColor[1] + 1 < 5 ? LEDColor[6] + 1 : 0, 0, 1);

}

function onclick2()
{

    AjaxChangeColor(4, LEDColor[2] + 1 < 5 ? LEDColor[2] + 1 : 0, 0, 2);

}

function onclick3()
{

    AjaxChangeColor(5, LEDColor[3] + 1 < 5 ? LEDColor[3] + 1 : 0, 0, 3);

}

function onclick5()
{

    AjaxChangeColor(6, LEDColor[4] + 1 < 5 ? LEDColor[4] + 1 : 0, 0, 4);

}

/***********************
   End onClick Methods
 ***********************/

/***********************
  Begin Engine Methods
 ***********************/

function AjaxChangeColor(led,color,light,index)
{
    $('#loaderContent').show();
    $('#Loader').show();
    document.getElementById("Loader").style.display = "block";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/" , true);

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            LEDColor[index]=LEDColor[index]+1;
            updateColor();
            document.getElementById("hidden").style.display = "none";
        }
        else
        {
            setTimeout(function() {
              //your code to be executed after 1 second
              $('#loaderContent').hide();
              $('#Loader').hide();
              Android.showToast("error: " + this.status);
            }, 1000);
        }

    };

    xhr.send("L"+ (led + 1) + "" + color + "" + light);

}

function updateColor()
{


    switch (LEDColor[6]) {
        case 1:
            document.getElementById("man").style.fill = "#EC2227";

            break;

        case 2:
            document.getElementById("man").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("man").style.fill = "#214497";
            break;

        case 4:
            document.getElementById("man").style.fill = "#FFFF00";
            break;

        case 5:
            document.getElementById("man").style.fill = "#DA70D6";
            break;

        case 6:
            document.getElementById("man").style.fill = "#FFFAF0";
            break;

        case 7:
        document.getElementById("man").style.fill = "#0094ff";
        break;

        default:
            LEDColor[6] = 0;
            document.getElementById("man").style.fill = "black";
    }


    switch (LEDColor[0]) {
        case 1:
            document.getElementById("fib1").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib1").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib1").style.fill = "#214497";
            break;


        default:
            LEDColor[0] = 0;
            document.getElementById("fib1").style.fill = "black";

    }


    switch (LEDColor[1]) {
        case 1:
            document.getElementById("fib12").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib12").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib12").style.fill = "#214497";
            break;


        default:
            LEDColor[0] = 0;
            document.getElementById("fib12").style.fill = "black";

    }


    switch (LEDColor[2]) {
        case 1:
            document.getElementById("fib2").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib2").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib2").style.fill = "#214497";
            break;


        default:
            LEDColor[2] = 0;
            document.getElementById("fib2").style.fill = "black";

    }


    switch (LEDColor[3]) {
        case 1:
            document.getElementById("fib3").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib3").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib3").style.fill = "#214497";
            break;


        default:
            LEDColor[3] = 0;
            document.getElementById("fib3").style.fill = "black";

    }


    switch (LEDColor[4]) {
        case 1:
            document.getElementById("fib5").style.fill = "#EC2227";
            break;

        case 2:
            document.getElementById("fib5").style.fill = "#08A650";
            break;

        case 3:
            document.getElementById("fib5").style.fill = "#214497";
            break;


        default:
            LEDColor[4] = 0;
            document.getElementById("fib5").style.fill = "black";

    }


    switch (LEDColor[5]) {
        case 1:
            document.getElementById("out1").style.fill = "white";
            document.getElementById("out2").style.fill = "white";
            document.getElementById("out3").style.fill = "white";
            document.getElementById("out4").style.fill = "white";
            document.getElementById("out4").style.fill = "white";
            document.getElementById("out5").style.fill = "white";
            document.getElementById("out6").style.fill = "white";
            document.getElementById("out7").style.fill = "white";
            document.getElementById("out8").style.fill = "white";
            document.getElementById("out9").style.fill = "white";
            document.getElementById("out10").style.fill = "white";
            document.getElementById("out11").style.fill = "white";
            document.getElementById("out12").style.fill = "white";
            document.getElementById("out13").style.fill = "white";
            document.getElementById("out14").style.fill = "white";
            document.getElementById("out15").style.fill = "white";
            document.getElementById("out16").style.fill = "white";
            break;

        default:
            LEDColor[5] = 0;
            document.getElementById("out1").style.fill = "black";
            document.getElementById("out2").style.fill = "black";
            document.getElementById("out3").style.fill = "black";
            document.getElementById("out4").style.fill = "black";
            document.getElementById("out5").style.fill = "black";
            document.getElementById("out6").style.fill = "black";
            document.getElementById("out7").style.fill = "black";
            document.getElementById("out8").style.fill = "black";
            document.getElementById("out9").style.fill = "black";
            document.getElementById("out10").style.fill = "black";
            document.getElementById("out11").style.fill = "black";
            document.getElementById("out12").style.fill = "black";
            document.getElementById("out13").style.fill = "black";
            document.getElementById("out14").style.fill = "black";
            document.getElementById("out15").style.fill = "black";
            document.getElementById("out16").style.fill = "black";

    }

}

/***********************
   End Engine Methods
 ***********************/

//Waiting For Load
$(function(){
    updateColor();
    $('#Loader').hide();
});