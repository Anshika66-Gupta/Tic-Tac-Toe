$(document).ready(function(){
		//===---BOX ANIMATION---===//
		$('.box').on("mousedown",function(){
			$(this).css({"transform":"scale(0.8)"});

		});
		$('.box').on("mouseup",function(){
			$(this).css({"transform":"scale(0.9)"});

		});

		//GAME
		var k = -1;
 		var v =  new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,2);
		//===---Players Names----===//
		var p1 = "X";
		var p2 = "O";
		//===-----GET PLAYER NAMES----=====//
		$('input').blur(function(){
			var id = $(this).attr('id');
			if(id.indexOf("one")!=-1)
			{
				p1 = $(this).val();
			}
			else
			{
				p2 = $(this).val();
			}
			
		});

 		//=====VARIABLES FOR PLAYERS (aka AI vs HUMAN)//
 		var play = 0;
		// 0 = HUMAN//
 		$('#ai').click(function(){play=1;reset();});
 		$('#human').click(function(){play=0;reset();});
 		//========-----AI MOVE------=========//
 		
 		var found = 0;
 		function aimove(){
 			putrandom();
 			}
 			
 		function putrandom(){
 			var n=9;
 			while(v[n]!=-1)
 			{
 			    n = Math.floor(Math.random()*10);
 				if(n>=9){n=-1;}
 			}
 			put(n,n);
 			
 		} 			
 		//========RESET BUTTON======//
 		$('#reset').click(function(){reset();});

 		//=======---------DOWN JUST BETWEEN USERS----=========//

 		//=======--------GET ID AND PUT SOMETHING----=========//
 		$('.box').click(function(){
 			var id = $(this).attr('id');
 			var poz = id - '0';
 			if(play==0){put(id,poz);}
 			if(put(id,poz)&&play==1)
 			{aimove(poz);}
 		});

		//====----PUT IMAGE-----=====//
		function put(id,i){
			id = "#" + id;
			if(v[i]==-1)
			{k++;
			if(k%2==0)
			{$(id).css({'background-image':'url("x.png")'});
				v[i]=1;}
			else
			{$(id).css({'background-image':'url("o.png")'});
				v[i]=0;}
			if(play==1){$(id).css({"transform":"scale(0.9)"});}
			if(check())
			{
				return false;
			}
			return true;
			
			}
			//CHECK ALL POSIBILITIES OF WINNING//
			function check(){
				if(v[0]==v[4]&&v[4]==v[8]&&v[0]!=-1)
					{winner(v[0]);$('.x').css({'background-color':'#ffa9a9'});return true;}
				else if(v[2]==v[4]&&v[4]==v[6]&&v[2]!=-1)
					{winner(v[2]);$('.y').css({'background-color':'#ffa9a9'});return true;}
				else if(v[0]==v[1]&&v[1]==v[2]&&v[0]!=-1)
					{winner(v[0]);$('.i0').css({'background-color':'#ffa9a9'});return true;}
				else if(v[3]==v[4]&&v[4]==v[5]&&v[3]!=-1)
					{winner(v[3]);$('.i1').css({'background-color':'#ffa9a9'});return true;}
				else if(v[6]==v[7]&&v[7]==v[8]&&v[6]!=-1)
					{winner(v[6]);$('.i2').css({'background-color':'#ffa9a9'});return true;}
				else if(v[0]==v[3]&&v[3]==v[6]&&v[0]!=-1)
					{winner(v[0]);$('.j0').css({'background-color':'#ffa9a9'});return true;}
				else if(v[1]==v[4]&&v[4]==v[7]&&v[1]!=-1)
					{winner(v[1]);$('.j1').css({'background-color':'#ffa9a9'});return true;}
				else if(v[2]==v[5]&&v[5]==v[8]&&v[2]!=-1)
					{winner(v[2]);$('.j2').css({'background-color':'#ffa9a9'});return true;}
				else if(k==8){$('#result').text("DRAW");}
				
			}
		//SHOW WINNER//
		function winner(i)
		{
			var r = '';
			if(i==1){r = r + p1;}
			else {r = r + p2;};
			$('#result').text("Winner : " + r);
			nullarray();
			return 1;
		}
		//=====-----NULL ARRAY----=====//
		function nullarray(){
			v = [2,2,2,2,2,2,2,2,2];
		}

		}
		//========---------RESET GAME-------============//
		function reset(){
			$('.box').css({'background-image':'none'});
			$('#result').text("");
			$('.box').css({"background-color":"#f3f3f3"});
			$('.box').css({"transform":"scale(1)"});
			k=-1;
			v = [-1,-1,-1,-1,-1,-1,-1,-1,-1,2];
		}

});