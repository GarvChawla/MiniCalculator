<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Martel+Sans:wght@600&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        @media only screen and (max-width: 550px){
            
            .heading{
                display: flex;
                flex-direction: column;
                text-align: center;
                /* justify-content: center; */
                /* margin-bottom: 0px; */
            }
            /* .heading div{
                margin: 0px;
                padding: 0px;
            } */
        }
        body{
            /* background-image: linear-gradient(red, yellow); */
            background-image: linear-gradient(to right,rgb(40, 44, 54),rgb(26, 31, 34) ,rgb(40,44,54));
        }
        .grid{
            width : 300px;
            height: 450px;
            /* text-overflow: ellipsis; */
            
            /* height: 1000px; */
            display: grid;
            grid-template-areas: "dis dis dis dis"
                                 "bt1 bt2 bt3 bt4"
                                 "bt5 bt6 bt7 bt8"
                                 "bt9 bt10 bt11 bt12"
                                 "bt13 bt14 bt15 bt16"
                                 "bt17 bt18 bt19 bt20";
            /* grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
            border: 2px solid rgb(97, 93, 93);
            border-radius: 10px;
            /* box-shadow: 0.5px 0.5px 1px white; */
            /* margin: 2px; */
            padding: 6px;

        }
        .main{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .display{
            height: 70px;
            /* width: 120px; */
            /* text-overflow: clip; */
            grid-area: dis;
            display: flex;
            align-items: end;
            justify-content: right;
            /* align-items: end; */
            /* align-items: ; */
            /* grid-row: 1; */
            /* grid-column:  ; */
            /* background-color: blue; */
            padding: 2px;
            color: white;
            font-size: 40px;
            margin: 6px;
            white-space: nowrap;
            overflow:hidden;
            text-overflow: ellipsis;
            /* font-size: 20px; */
        }
        .div{
            height: 20px;
            width: 20px ;
        }
        .bt1{
            grid-area: bt1;
        }
        .btn:active{
            box-shadow: none;
            outline: 0.5px solid rgb(46, 43, 43);
        }
        .eql:active{
            box-shadow: none;
            /* color: greenyellow; */
            background-color: greenyellow;
            color: black;
        }
        .btn{
            user-select: none; 
            height: 50px;
            width: 50px;
            /* background-color: black; */
            border-radius: 50px;
            margin: 4px;
            padding: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 5px 5px 6px black,-2px -2px 6px rgba(255, 255, 255, 0.377);
            /* box-shadow: -2px -2px white; */
            /* outline: 0.5px solid black; */
            font-family: "poppins";
            font-size: 25px;
            font-weight: 400;
            color: white;

        }
        .eql{
            background-color: orange;
            color: white;
            box-shadow: 2px 2px 2px black;
        }
        .ac,.ce,.per,.div,.mul,.sub,.plus{
            color: rgb(118, 185, 18);
            font-size: 25px;
            box-shadow: 5px 5px 6px black,-2px -2px 6px rgba(255, 255, 255, 0.377);

        }
        .heading{
            color: rgb(118, 185, 18);
            display: flex;
            /* align-items: center; */
            justify-content: center;
            font-size: 70px;
            font-family: "poppins";
        }
        .c1{
            color: orange;
        }
        .foot{
            display: flex;
            justify-content: center;
            color: white;
            font-family: "poppins";
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="heading"><div>Mini</div> <div> <strong> <span class="c1">Cal</span></strong>culator</div></div>
    <div class="main">
        <div class="grid">  
            <div id="disp" class="display">0</div>
            <div class="btn btn1 ac" data-t="ac">AC</div>
            <div class="btn btn1 ce" data-t="ce">CE</div>
            <div class="btn btn1 per" data-t="%">%</div>
            <div class="btn btn1 div" data-t="/">÷</div>
            <div class="btn btn1" data-t="7">7</div>
            <div class="btn btn1" data-t="8">8</div>
            <div class="btn btn1" data-t="9">9</div>
            <div class="btn btn1 mul" data-t="*">x</div>
            <div class="btn btn1" data-t="4">4</div>
            <div class="btn btn1" data-t="5">5</div>
            <div class="btn btn1" data-t="6">6</div>
            <div class="btn btn1 sub" data-t="-">-</div>
            <div class="btn btn1" data-t="1">1</div>
            <div class="btn btn1" data-t="2">2</div>
            <div class="btn btn1" data-t="3">3</div>
            <div class="btn btn1 plus" data-t="+">+</div>
            <div class="btn btn1" data-t="0">0</div>
            <div class="btn btn1" data-t="00">00</div>
            <div class="btn btn1" data-t=".">.</div>
            <div class="btn eql" data-t="eq">=</div>
        </div>  
    </div>
    <div class="foot">Made By Garv Chawla</div>
    <script src="calc.js"></script>
</body>
</html>
