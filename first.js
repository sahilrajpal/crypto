
	
			var htt = new XMLHttpRequest();
			var i;
			var c=0;
			var d=9;
			var g=1;
			var q=" $";
				function convert(){
				var s =document.getElementById("conversion").value;
				if(s==='USD'){g=1;
							   q=" $";}
				if(s==='INR'){g=63.66;
							  q=" Rs";}
				if(s==='YEN'){g=111.65;
							  q=" ￥";}
				if(s==='EUR'){g=0.84;
							  q=" €";	}
				lul();
				}
				function change(){
					
				for(i=c;i<=d;i++)
				{
				var a = document.getElementById("aslitable");
				var b = a.insertRow(i+1);
				var cell1=b.insertCell (0);
				cell1.id="Sno"+i;
				//cell1.class="Snoc";
				var cell2=b.insertCell(1);
				cell2.id="currency"+i;
				//cell2.class="currency";
				var cell3=b.insertCell(2);
				//cell3.class="value";
				cell3.id="value"+i;
				var cell4=b.insertCell(3);
				cell4.id="change"+i;
				//cell4.class="change";
				var cell5=b.insertCell(4);
				cell5.id="cap"+i;
				//cell5.class="cap";
				document.getElementById("table").style.height=180+i*73;	
				}
				c+=10;
				d+=10;
				lul();
				}
			function lul(){				
			htt.open('GET',"https://api.coinmarketcap.com/v1/ticker/");
			htt.onload= function(){
			
			var data = JSON.parse(htt.responseText);
		
			var i;
			for(i=0;i<=data.length;i++)
			{
					document.getElementById("Sno"+i).innerHTML=i+1;
					document.getElementById("currency"+i).innerHTML=data[i].name;
					document.getElementById("value"+i).innerHTML=((data[i].price_usd)*g).toFixed(2)+q;
					document.getElementById("change"+i).innerHTML=data[i].percent_change_7d+"%";
					document.getElementById("cap"+i).innerHTML=((data[i].market_cap_usd)*g).toFixed(2)+q;
					document.getElementById("Sno"+i).onmouseover=function(){mouseover()};
					document.getElementById("currency"+i).onmouseover=function(){mouseover()};
					document.getElementById("value"+i).onmouseover=function(){mouseover()};
					document.getElementById("change"+i).onmouseover=function(){mouseover()};
					document.getElementById("cap"+i).onmouseover=function(){mouseover()};
					document.getElementById("Sno"+i).onmouseout=function(){mouseout()};
					document.getElementById("currency"+i).onmouseout=function(){mouseout()};
					document.getElementById("value"+i).onmouseout=function(){mouseout()};
					document.getElementById("change"+i).onmouseout=function(){mouseout()};
					document.getElementById("cap"+i).onmouseout=function(){mouseout()};
				if(data[i].percent_change_7d<1){
					document.getElementById("change"+i).style.color="red";
				}
				else
				{
					document.getElementById("change"+i).style.color="green";
				}
				
			}
			function mouseover(){
				//document.getElementById("right").style.display="block";
				document.getElementById("right").style.height=350;
				document.getElementById("right").style.transition="height 2s";
				document.getElementById("table").style.height=210px;
			}
			function mouseout() {
				//document.getElementById("right").style.display="none";
				document.getElementById("right").style.height=0;
				document.getElementById("right").style.transition="height 2s";
			}
	
			
			};
			htt.send();
				
			} 
		
		
	
	
	