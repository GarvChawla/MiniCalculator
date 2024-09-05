
function calc(){
    // var count = 0;
    let disp = document.getElementById("disp");
    var html = "0";
    disp.innerHTML = html;
    let elements = document.querySelectorAll('.btn');
    elements.forEach((item) => {
        item.addEventListener('click', (e) => {
            // console.log("run")
            var val = item.getAttribute('data-t')
            // parseInt(val)
            
            if(disp.innerHTML=="0" | disp.innerHTML=="00"){
                if(val == "ac"){
                    disp.innerHTML = '0';
                }
                else if(val =="ce"){

                }
                else {
                disp.innerHTML = val;}
            }
            else{
                if(val == "ac"){
                    disp.innerHTML = '0';
                }
                else if(val=="ce"){
                    html = html.substring(0, html.length - 1);
                    disp.innerHTML = html; 
                }

                else if(val=="eq"){
                    var result = eval(html)
                    disp.innerHTML = result;
                }
                else {
                disp.innerHTML = html + val;
            }
            }
            html = disp.innerHTML;
            console.log(parseInt(html   ))
        })
    });
    }

    calc()
