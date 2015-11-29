'use strict';

(function(exports) {
	var FindDifferent = function() {
        this.score = 0 ;
        this.run = 1;
        this.Size = 2;
        this.Time = 60000;
        this.howbig = 300;
    };
    
    

    FindDifferent.prototype = {
    	init() {
            document.getElementById("Score").style.visibility='visible';
            document.getElementById("Time").style.visibility='visible';
            document.getElementById("mytable").style.visibility='visible';
            document.getElementById("Start").style.visibility='hidden';
            this.score = 0 ;
            this.run = 1 ;
            this.Size = 2 ;
            var onetdsize = this.howbig/this.Size;
            var seedr = Math.floor(Math.random() * this.Size);
            var seedc = Math.floor(Math.random() * this.Size);
            this.Time = 60000;
            var myVar = setInterval((function(){ 
                this.Time -= 100;
                if(this.Time<=0){
                    exports.alert("Time's up ! Your Score is "+ this.score);
                    this.GameOver(myVar);
                }
                document.getElementById("Time").innerHTML = 'Time : ' + this.Time/1000;
            }).bind(this), 100);
            document.getElementById(""+seedr+"-"+seedc).innerHTML = "<img src='fantrue.png' height='150px' width='150px'>";
            document.getElementById(""+seedr+"-"+seedc).addEventListener('click', (function(event) {
                document.getElementById("yee").play();
                this.Gotscore(seedr,seedc);
            }).bind(this));
        },

        Gotscore(r,c){
            this.run ++;
            this.score ++;
            var RR = Math.floor(Math.random() *255);
            var GG = Math.floor(Math.random() *255);
            var BB = Math.floor(Math.random() *255);
            var onetdsize = this.howbig/this.Size;
            var parent = document.getElementById(""+r);
            var child = document.getElementById(""+r+"-"+c);
            parent.removeChild(child);
            
            var node = document.createElement("TD");
            node.id = ""+r+"-"+c ;
            var img = document.createElement('img');
            img.src = 'fanfalse.png';
            node.appendChild(img);
            child = document.getElementById(""+r+"-"+c-1);
            parent.insertBefore(node,child);

            document.getElementById("Score").innerHTML="Your Score : " + this.score ;

            var x = this.CheckGrow(this.run);
            
            if(x>this.Size){
                this.Size++;
                var onetdsize = this.howbig/this.Size;
                for (var i = 0 ; i < this.Size -1; i++) {
                    var node = document.createElement("TD");
                    node.id = ""+i+"-"+(this.Size -1);
                    var img = document.createElement('img');
                    img.src = 'fanfalse.png';
                    node.appendChild(img);
                    document.getElementById(""+i).appendChild(node); 
                };

                var node = document.createElement("TR");
                node.id = ""+(this.Size-1)+""
                document.getElementById("place").appendChild(node);

                for (var i = 0 ; i < this.Size ; i++) {
                    var node = document.createElement("TD");
                    node.id = ""+(this.Size -1)+"-"+i;
                    var img = document.createElement('img');
                    img.src = 'fanfalse.png';
                    node.appendChild(img);
                    document.getElementById(""+(this.Size -1)).appendChild(node); 
                };
            }

            var seedr = Math.floor(Math.random() * this.Size);
            var seedc = Math.floor(Math.random() * this.Size);
            document.getElementById(""+seedr+"-"+seedc).innerHTML = 
                "<img src='fantrue.png' width="+onetdsize+"height="+onetdsize+">";
            for(var i=0;i<this.Size*this.Size;i++){
                document.getElementsByTagName("td")[i].style.backgroundColor='rgb('+RR+','+GG+','+BB+')' ;
                document.getElementsByTagName("img")[i].style.height=""+onetdsize+"px" ;
                document.getElementsByTagName("img")[i].style.width=""+onetdsize+"px" ;
            }
            document.getElementById(""+seedr+"-"+seedc).addEventListener('click', (function(event) {
                document.getElementById("yee").play();
                this.Gotscore(seedr,seedc);
            }).bind(this));
        },

        CheckGrow(run){
            var x = 0;
            while(run>=x){
                run -= x;
                x++;
            }
            return x;
        },

        GameOver(myVar){
            clearInterval(myVar);
            this.Time = 1000000;
            var onetdsize = this.howbig/this.Size;
            document.getElementById("mytable").style.visibility='hidden';
            document.getElementById("Reset").style.visibility='visible';
            document.getElementById("Time").style.visibility='hidden';
            for (var i = 0; i < 2; i++) {
                for(var j=0;j<this.Size;j++){
                    var parent = document.getElementById(""+i);
                    var child = document.getElementById(""+i+"-"+j);
                    parent.removeChild(child);
                }
            };
            for (var i = 2 ; i <this.Size; i++) {
                var parent = document.getElementById("place");
                var child = document.getElementById(""+i);
                parent.removeChild(child);
            };
            document.getElementById('Reset').addEventListener('click', (function(event) {
                this.Restart();
            }).bind(this));
        },
        Restart(){
            var onetdsize = this.howbig/this.Size;
            var parent = document.getElementById("BUTTON");
            var child = document.getElementById("Reset");
            parent.removeChild(child);
            var node = document.createElement("BUTTON");
            node.id = "Reset";
            node.align="center";
            var xx = document.createTextNode("Reset");
            node.appendChild(xx);
            document.getElementById("BUTTON").appendChild(node);

            for(var i=0;i<2;i++){
               for(var j=0;j<2;j++){
                    var node = document.createElement("TD");
                    node.id = ""+i+"-"+j+"";
                    var img = document.createElement('img');
                    img.src = 'fanfalse.png';
                    //img.style.width = ""+onetdsize+"px"
                    //img.style.height = ""+onetdsize+"px"
                    node.appendChild(img);
                    document.getElementById(""+i).appendChild(node);
               } 
            }


            this.score = 0 ;
            this.init();
            

        },
    }

	exports.FindDifferent = FindDifferent;
})(window);