let paragraph=document.createElement('p');
paragraph.innerHTML="<h1>CALLBACK HELL</h1><br><br><br><br><br>";
document.body.append(paragraph);

let p=document.createElement('p');
p.setAttribute("id","callback_hell");
document.body.append(p);

setTimeout(function(){
    let num=document.getElementById("callback_hell");
    num.innerHTML="<h1>10</h1>";
    document.body.append(num);
    setTimeout(function(){
        let num=document.getElementById("callback_hell");
        num.innerHTML="<h1>9</h1>";
        document.body.append(num);
        setTimeout(function(){
            let num=document.getElementById("callback_hell");
            num.innerHTML="<h1>8</h1>";
            document.body.append(num);
            setTimeout(function(){
                let num=document.getElementById("callback_hell");
                num.innerHTML="<h1>7</h1>";
                document.body.append(num);
                setTimeout(function(){
                    let num=document.getElementById("callback_hell");
                    num.innerHTML="<h1>6</h1>";
                    document.body.append(num);
                    setTimeout(function(){
                        let num=document.getElementById("callback_hell");
                        num.innerHTML="<h1>5</h1>";
                        document.body.append(num);
                        setTimeout(function(){
                            let num=document.getElementById("callback_hell");
                            num.innerHTML="<h1>4</h1>";
                            document.body.append(num);
                            setTimeout(function(){
                                let num=document.getElementById("callback_hell");
                                num.innerHTML="<h1>3</h1>";
                                document.body.append(num);
                                setTimeout(function(){
                                    let num=document.getElementById("callback_hell");
                                    num.innerHTML="<h1>2</h1>";
                                    document.body.append(num);
                                    setTimeout(function(){
                                        let num=document.getElementById("callback_hell");
                                        num.innerHTML="<h1>1</h1>";
                                        document.body.append(num);
                                        setTimeout(function(){
                                            let num=document.getElementById("callback_hell");
                                            num.innerHTML="<h1>Happy Independence Day!</h1>";
                                            document.body.append(num);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
