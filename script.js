var text = 'ok'
var text1='วิชานี้'
var text2 ='ง่าย'
var text3 ='จริงๆนะ'
var count=0
document.getElementById('no').addEventListener('dblclick',function(e){
        count=count+1
        if(count==1){
            document.getElementById('ok').innerHTML=text
        }else if(count==2){
            document.getElementById('ok').innerHTML=text1
        }else if(count==3){
            document.getElementById('ok').innerHTML=text2
        }else if(count==4){
            document.getElementById('ok').innerHTML=text3
        }else if(count==5){
            count=0
        }   
})
document.getElementById('ok').addEventListener('click',function(e){
    document.getElementById('cancel')
})