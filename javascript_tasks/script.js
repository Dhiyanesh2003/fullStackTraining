function q1(){
    str = document.getElementById("q1").value
    var temp = ""
    var temp1 = ""
    var temp2 = ""
    for(i=0;i<str.length;i++){
        if(str.charAt(i)!=' '){
            temp += str.charAt(i);
        }
        else{
            for(j=temp.length-1;j>=0;j--){
                temp1 += temp.charAt(j)
            }
            console.log(temp1)
            temp2 += temp1+" "
            temp1 = ""
            temp = ""
        }
    }
    for(j=temp.length-1;j>=0;j--){
        temp1 += temp.charAt(j)
    }
    temp2 += temp1
    document.getElementById("1").innerHTML = temp2
    document.getElementById("clear1").style.display = "block"
}

function q4(){
    for(i=0;i<=100;i++){
        if(i%3==0){
            document.getElementById("4").innerHTML = document.getElementById("4").innerHTML + "<br>fizz"
        }
        if(i%5==0){
            document.getElementById("4").innerHTML = document.getElementById("4").innerHTML + "<br>buzz"
        }
        if(i%3==0 && i%5==0){
            document.getElementById("4").innerHTML = document.getElementById("4").innerHTML + "<br>fizzbuzz"
        }
    }
    document.getElementById("clear4").style.display = "block"
}

function q5(){
    str1 = document.getElementById("q5-1").value
    str2 = document.getElementById("q5-2").value
    var count = 0
    var temp = ""
    if(str1.length == str2.length){
        for(i=0;i<str1.length;i++){
            for(j=0;j<str2.length;j++){
                if(str1.charAt(i)==str2.charAt(j)){
                    
                    for(x=0;x<str1.length;x++){
                        if(x!=i){
                            temp += str1.charAt(x)
                        }
                        else{
                            temp += "-"
                        }
                    }
                    str1 = temp
                    temp = ""
                    for(y=0;y<str2.length;y++){
                        if(y!=j){
                            temp += str2.charAt(y)
                        }
                        else{
                            temp += "-"
                        }
                    }
                    str2 = temp
                    temp = ""
                    count++;
                    break;
                }
            }
        }
    }
    console.log(str1+" "+str2)
    if(str1.length == count){
        document.getElementById("5").innerHTML = "They are Anagrams"
    }
    else{
        document.getElementById("5").innerHTML = "They are not Anagrams"
    }
    document.getElementById("clear5").style.display = "block"
}

function clear1(){
    document.getElementById("1").innerHTML = ""
    document.getElementById("clear1").style.display = "none"
    document.getElementById("q1").value = ""
}
function clear2(){
    document.getElementById("2").innerHTML = ""
    document.getElementById("clear2").style.display = "none"
}
function clear3(){
    document.getElementById("3").innerHTML = ""
    document.getElementById("clear3").style.display = "none"
}
function clear4(){
    document.getElementById("4").innerHTML = ""
    document.getElementById("clear4").style.display = "none"
    document.getElementById("q4").value = ""
}
function clear5(){
    document.getElementById("5").innerHTML = ""
    document.getElementById("clear5").style.display = "none"
    document.getElementById("q5-1").value = ""
    document.getElementById("q5-2").value = ""
}
function clear6(){
    document.getElementById("6").innerHTML = ""
    document.getElementById("clear6").style.display = "none"
}