import _ from 'lodash';
import '../css/demo.css';
import {init} from 'pell';


         
            let j=0;
            let k=0;
            let re=[];
            let previousbright=0;
            let previoustrans=100; 
            var Sys = (function(ua){ 
                var s = {}; 
                s.IE = ua.match(/msie ([\d.]+)/)?true:false; 
                s.Firefox = ua.match(/firefox\/([\d.]+)/)?true:false; 
                s.Chrome = ua.match(/chrome\/([\d.]+)/)?true:false; 
                s.IE6 = (s.IE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6))?true:false; 
                s.IE7 = (s.IE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 7))?true:false; 
                s.IE8 = (s.IE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 8))?true:false; 
                return s; 
            })(navigator.userAgent.toLowerCase());

            // 
 

			function $$(id){
				return document.getElementById(id);
            }
            
            function getbyClass(c){
                return document.getElementsByClassName(c);
            }
           
            function getFileUrl(sourceId) {
                var url;
                if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
                url = document.getElementById(sourceId).value;
                } else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
                url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
                } else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
                url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
                }
                return url;
            }
			
            function createImagebox(){
              let div=document.createElement('div');
              let h1=document.createElement('div');
              h1.setAttribute('class','title');
              h1.setAttribute('id','title'+`${j}`);
              let body=document.getElementById('body');
              div.setAttribute('class','box');
              div.setAttribute('id','box'+`${j}`);
              div.setAttribute('style','width:480px;height:200px;')
              let divup=document.createElement('div');
              divup.setAttribute('class','rUp');
              divup.setAttribute('id','up'+`${j}`);
              let divdown=document.createElement('div');
              divdown.setAttribute('class','rDown');
              divdown.setAttribute('id','down'+`${j}`);
              let divleft=document.createElement('div');
              divleft.setAttribute('class','rLeft');
              divleft.setAttribute('id','left'+`${j}`);
              let divright=document.createElement('div');
              divright.setAttribute('class','rRight');
              divright.setAttribute('id','right'+`${j}`);
              let divleftup=document.createElement('div');
              divleftup.setAttribute('class','rLeftUp');
              divleftup.setAttribute('id','lu'+`${j}`);
              let divleftdown=document.createElement('div');
              divleftdown.setAttribute('class','rLeftDown');
              divleftdown.setAttribute('id','ld'+`${j}`);
              let divrightup=document.createElement('div');
              divrightup.setAttribute('class','rRightUp');
              divrightup.setAttribute('id','ru'+`${j}`);
              let divrightdown=document.createElement('div');
              divrightdown.setAttribute('class','rRightDown');
              divrightdown.setAttribute('id','rd'+`${j}`);
              let divspace=document.createElement('div');
                // divspace.setAttribute('class','space');
                // divspace.setAttribute('id','space'+`${i}`);
				
				
		      let canvas=document.createElement('canvas');  //new
              canvas.setAttribute('class','image');         
              canvas.setAttribute('id','img'+`${j}`);
			  canvas.setAttribute("style","width:100%;height:100%;")
			  
				
                if(!document.getElementById('imgtext').files.item(0)){
                    alert('please provide a valid image');
                    return;
                }
				
				
				var img = new Image();  //new
                img.src = window.URL.createObjectURL(document.getElementById("imgtext").files.item(0));  //new
                console.log(img);
				
                div.appendChild(h1);
                div.appendChild(divup);
                div.appendChild(divdown);
                div.appendChild(divleft);
                div.appendChild(divright);
                div.appendChild(divleftdown);
                div.appendChild(divleftup);
                div.appendChild(divrightdown);
                div.appendChild(divrightup);
                // div.appendChild(divspace);
                div.appendChild(canvas);
                body.appendChild(div);
                
				
				let context = canvas.getContext("2d");  //new
				
				img.onload = function(){  
                  context.drawImage(img,0,0,300,150);
                }
                    
                
            }

            

            var Css = function(e,o){ 
                for(var i in o) 
                e.style[i] = o[i]; 
            };

            var Extend = function(destination, source) { 
                for (var property in source) { 
                    destination[property] = source[property]; 
                } 
            };

            var Bind = function(object, fun) { 
                var args = Array.prototype.slice.call(arguments).slice(2); 
                return function() { 
                    return fun.apply(object, args); 
                } 
            };

            var BindAsEventListener = function(object, fun) { 
                var args = Array.prototype.slice.call(arguments).slice(2); 
                return function(event) { 
                    return fun.apply(object, [event || window.event].concat(args)); 
                } 
            };

            var CurrentStyle = function(element){ 
                return element.currentStyle || document.defaultView.getComputedStyle(element, null); 
            };

            function addListener(element,e,fn){ 
                element.addEventListener?element.addEventListener(e,fn,false):element.attachEvent("on" + e,fn); 
            }; 
            function removeListener(element,e,fn){ 
                element.removeEventListener?element.removeEventListener(e,fn,false):element.detachEvent("on" + e,fn) 
            };

            var Class = function(properties){ 
                var _class = function(){return (arguments[0] !== null && this.initialize && typeof(this.initialize) == 'function') ? this.initialize.apply(this, arguments) : this;}; 
                _class.prototype = properties; 
                return _class; 
            };

            var Resize =new Class({ 
                initialize : function(obj){ 
                    this.obj = obj;
                    this.resizeelm = null; 
                    this.fun = null; //记录触发什么事件的索引 
                    this.original = []; //记录开始状态的数组 
                    this.width = null; 
                    this.height = null;
                    this.x=null;
                    this.y=null; 
                    this.fR = BindAsEventListener(this,this.resize); 
                    this.fS = Bind(this,this.stop);     
                }, 
                set : function(elm,direction){ 
                    if(!elm)return; 
                    this.resizeelm = elm; 
                    addListener(elm,'mousedown',BindAsEventListener(this, this.start, this[direction])); 
                    return this; 
                },
                start : function(e,fun){ 
                    this.fun = fun; 
                    this.original = [parseInt(CurrentStyle(this.obj).width),parseInt(CurrentStyle(this.obj).height),parseInt(CurrentStyle(this.obj).left),parseInt(CurrentStyle(this.obj).top)];                 
                    this.width = (this.original[2]||0) + this.original[0]; 
                    this.height = (this.original[3]||0) + this.original[1];
                    this.x=e.clientX;
                    this.y=e.clientY;
                    addListener(document,"mousemove",this.fR); 
                    addListener(document,'mouseup',this.fS); 
                }, 
                resize : function(e){ 
                    this.fun(e); 
                    Sys.IE?(this.resizeelm.onlosecapture=function(){this.fS()}):(this.resizeelm.onblur=function(){this.fS()}) 
                }, 
                stop : function(){ 
                    removeListener(document, "mousemove", this.fR); 
                    removeListener(document, "mousemove", this.fS); 
                    // window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();     
                }, 
                up : function(e){ 
                    this.height>e.clientY?Css(this.obj,{top:e.clientY-120 + "px",height:this.height-e.clientY +120+ "px"}):this.turnDown(e);   
                }, 
                down : function(e){ 
                    e.clientY>this.original[3]?Css(this.obj,{top:this.original[3]+'px',height:e.clientY-this.original[3]-120+'px'}):this.turnUp(e);     
                }, 
                left : function(e){ 
                    e.clientX<this.width?Css(this.obj,{left:e.clientX -150+'px',width:this.width-e.clientX +150+ "px"}):this.turnRight(e);         
                }, 
                right : function(e){ 
                    e.clientX>this.original[2]?Css(this.obj,{left:this.original[2]+'px',width:e.clientX-this.original[2]-150+"px"}):this.turnLeft(e);

                }, 
                leftUp:function(e){ 
                    this.up(e);this.left(e); 
                }, 
                leftDown:function(e){ 
                    this.left(e);this.down(e); 
                }, 
                rightUp:function(e){ 
                    this.up(e);this.right(e); 
                }, 
                rightDown:function(e){ 
                    this.right(e);this.down(e); 
                },                 
                turnDown : function(e){ 
                    Css(this.obj,{top:this.height+'px',height:e.clientY - this.height + 'px'}); 
                }, 
                turnUp : function(e){ 
                    Css(this.obj,{top : e.clientY +'px',height : this.original[3] - e.clientY +'px'}); 
                }, 
                turnRight : function(e){ 
                    Css(this.obj,{left:this.width+'px',width:e.clientX- this.width +'px'}); 
                }, 
                turnLeft : function(e){ 
                    Css(this.obj,{left:e.clientX +'px',width:this.original[2]-e.clientX+'px'});          
                },
                move: function(e){
                    Css(this.obj,{top:this.original[3]+e.clientY-this.y+'px',left:this.original[2]+e.clientX-this.x+'px'});
                    
                },
                click:function(e,jj){
                    k="img"+`${jj}`;
                }         
            }); 
            window.onload = function(){
                
                let imgbtn=document.getElementById('imgbtn');
                let btnchange=document.getElementById('changebtn');
                let btngray=document.getElementById('graybtn');
                let brightness=document.getElementById('brightness');
                let trans=document.getElementById('transparent');
                imgbtn.addEventListener('click',function(){
                    let box=[];
                    createImagebox();
                    new Resize($$('box'+`${j}`)).set($$('up'+`${j}`),'up').set($$('down'+`${j}`),'down').set($$('left'+`${j}`),'left').set($$('right'+`${j}`),'right').set($$('lu'+`${j}`),'leftUp').set($$('ld'+`${j}`),'leftDown').set($$('rd'+`${j}`),'rightDown').set($$('ru'+`${j}`),'rightUp').set($$('title'+`${j}`),'move');
                    box.push()
                    $$('img'+`${j}`).addEventListener('click',function(e){
                        k=e.target;
                        console.log(j);
                    })
                    j++; 
                });
                
                btnchange.addEventListener("click",function(){
                    
                    var canvas = k;
                    var ctx = canvas.getContext('2d');
                    
                    
                    var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
                    console.log(imageData);
                    var data = imageData.data;
                        
                    
                        for (var i = 0; i < data.length; i += 4) {
                        data[i]     = 255 - data[i];     // red
                        data[i + 1] = 255 - data[i + 1]; // green
                        data[i + 2] = 255 - data[i + 2]; // blue
                        }
                        ctx.putImageData(imageData, 0, 0);
                    

                    
                        
                  

                    
                })
                btngray.addEventListener("click",function(){
                    var canvas = k;
                    var ctx = canvas.getContext('2d');
                    
                    
                    var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
                    var data = imageData.data;
                        
                    
                       
                    

                    
                        for (var i = 0; i < data.length; i += 4) {
                        var avg = (data[i] + data[i +1] + data[i +2]) / 3;
                        data[i]     = avg; // red
                        data[i + 1] = avg; // green
                        data[i + 2] = avg; // blue
                        }
                        ctx.putImageData(imageData, 0, 0);
                  

                    
                })
                brightness.addEventListener("change",function(event){
                    var canvas = k;
                    var ctx = canvas.getContext('2d');
                    let bright=event.target.value;
                    console.log(bright);
                    console.log(previousbright);
                    
                    
                    var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
                    var data = imageData.data;
                        
                        for (var i = 0; i < data.length; i += 4) {
                        
                        data[i]     += bright-previousbright; // red
                        data[i + 1] += bright-previousbright; // green
                        data[i + 2] += bright-previousbright; // blue
                        
                        }
                       
                        
                        previousbright=bright;
                        ctx.putImageData(imageData, 0, 0);
                  

                    
                })
                trans.addEventListener("change",function(event){
                    var canvas = k;
                    var ctx = canvas.getContext('2d');
                    let transval=event.target.value;
                    alert(transval)
                   
                    
                    var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
                    var data = imageData.data;
                        
                        for (var i = 0; i < data.length; i += 4) {
                        
                        data[i]     /= previoustrans/100; // red
                        data[i + 1] /= previoustrans/100; // green
                        data[i + 2] /= previoustrans/100; // blue
                        }
                       
                        for (var i = 0; i < data.length; i += 4) {
                        
                        data[i]     *= transval/100; // red
                        data[i + 1] *= transval/100; // green
                        data[i + 2] *= transval/100; // blue
                        }
                        previoustrans=transval;
                        ctx.putImageData(imageData, 0, 0);
                  

                    
                })
                
            } 