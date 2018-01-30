	function hi(){
				var v=[""];
				document.getElementById("news").style.width="100%";
				document.getElementById("arrow").style.left="100%";
				document.getElementById("arrow").style.display="none";
				for(i=0;i<10;i++)
				{
				v.push(document.getElementById("currency"+i).textContent+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+(document.getElementById("value"+i).textContent)+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+(document.getElementById("change"+i).textContent)+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp");
				
				}
				
				document.getElementById("span1").innerHTML=v.join("");
			}