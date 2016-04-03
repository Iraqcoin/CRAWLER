function GeoCoint(){

	this.Join = function(d){
		$(".tbutn.blue").click();
	}
	this.Login = function(d){
		//$(".tbutn.blue").onclick();
		//$(".tbutn.blue").trigger("click");
		$(".tbutn.blue").click();
	}
	this.VerifyFB = function(d){
        var search = setInterval(function(){
            if ($("button[name='__CONFIRM__']").length == 0) {
                console.log("Tim Tiep")
            }
            else
            {   
                clearInterval(search);
                console.log("Da tim thay")
                console.log($("button[name='__CONFIRM__']").attr("type"))
                $("button[name='__CONFIRM__']").click();
            }
        }, 1000);

		
		
	}
    this.SendMoney = function(d){
        var datasend = "amount="+d.amount+"&balance="+d.balance+"&address="+d.address+"&coin=GEO&csrfToken="+d.csrfToken;
        chrome.runtime.sendMessage({
            method: 'POST',
            action: 'xhttp',
            url: 'http://wallet.geocoin.cash/processWithdraw.php',
            data: datasend
        }, function(data) {
            var data = JSON.parse(data);
            if(data.success == true)
            {
            	console.log("Thanh Cong")
            	window.close()
            	// luu thanh cong
            	
            }
            else
            {
            	console.log("That Bai")
            }
            uss.setting({"type":"set","data": {"ussv_geocoint_finish": 1}})
            console.log(data.message)
        });
    }
    this.Logout = function(){
    	uss.get("http://wallet.geocoin.cash/logout.php");
    	return {"stt":0,"note":"Đăng xuất thành công !"};
    }

   this.LoginFB = function(){
		function CheckFb(email,pass)
		{
			url = "https://m.facebook.com/login.php";
		    datalogin ='charset_test=Є&version=1&ajax=0&width=0&pxr=0&gps=0&dimensions=0&email='+email+'&pass='+pass+'';
		 	chrome.runtime.sendMessage({
			    method: 'POST',
			    action: 'xhttp',
			    url: url,
			    data: datalogin
			}, function(responseText) {
		        var data = responseText;
		        //console.log(data)
		        //$("#testcheck").remove();
		        //$("body").append("<div id='testcheck'>"+data+"</div>")
		        if (data == "ERROR") {
		        	console.log("Lỗi")
		        }
		        else
		        {
			        if(data == '')
			        {
			        	//alert("Thành Công");
			        	//var profile_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]).toString();
			        	//alert("Thành Công "+profile_id);
			        	//re_getFBKey(id,email,pass,key_play);
			        	//Live
			        	
			        }
			        else
			        {
						var pattern= "/checkpoint/gi";			
						var findCP = data.match(/Mcheckpoint/gi);
						//alert(findCP);
			        	if(findCP !== null)
			        	{
			        		//alert("Check Point");
			        		//CP
			        	}
			        	else
			        	{
							var findErrorPass = data.match(/XLoginController/gi);
			        		if (findErrorPass !== null) 
			        		{	  
			        			//alert("Sai Pass");/help/contact/
			        			var find = data.match(/\/help\/contact\/571927962827151/gi);
			        			if (find !== null) 
			        			{
			        				//357439354283890 : Email bị xóa khỏi Facebook
			        				//571927962827151 : Sai pass quá nhiều lần !
			        				//div_thongbao(_lJ.p({"t":"check","id":"a3","r":"hj"}));
								    chrome.runtime.sendMessage({
								        action: 'clear'
								    }, function(data) {
								    	// Xoa Cookie
								        
								    }); 	        				
			        			}
			        			else
			        			{
			        				//Die
			        			}
			        			
			        		}
			        		else
			        		{
			            		var findAddPhone = data.match(/phoneacqwrite/gi);
			            		if (findAddPhone !== null) {
			            			//var FB_Key = document.getElementsByName('fb_dtsg')[0].value;
			            			//alert("Xác Nhận Phone");
			            			//Live
			            			
			            		}
			            		else
			            		{
				                	
				                	var findFB_Key = data.match(/\{"token":(.*?)\}/gi);
				                	if (findFB_Key !== null) {
				                		//alert(findFB_Key);
				                		var txt = findFB_Key;
				                		var txt = JSON.parse(txt);
				                		var FB_Key = txt.token;
				                		if(FB_Key == '') 
				                		{
				                			//alert("Không Xác Định");
				                		}
				                		else
				                		{
				                			//var fb_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]).toString();
				                			//alert(FB_Key+ " - " +fb_id);
				                			
				                		}
				                		//Live
				                		
				                	}
				                	else
				                	{
				                		//console.log(data)
				                		if (data.match(/http-equiv="refresh"/gi) !== null) {
				                			
				                			console.log("Live")
				                		}
				                		else
				                		{
				                			if (data.match(/fb_dtsg/gi) !== null) {
				                				console.log("Live 2")
				                			}
				                			else
				                			{
				                				if (data.match(/recover/gi) !== null) {	
				                					// Die 
				                				}
				                				else
				                				{

				                					//KXD
				                				}
				                				
				                			}
				                			
				                		}
				                		
				                	}              			
			            		}
			   				}
			        	}

			        }
			    }
			});	
			   

		}  


		function Parse(email,pass,stt){

		} 	
   }
}
var GeoCoint = new GeoCoint();


function Pops(){

	this.Login = function(d){
		//window.open('http://pops.vn/pepsimusic/auth/login.php?app=facebook&cb=http://pops.vn/pepsimusic/auth-callback&cid=7')
        var search = setInterval(function(){
            if ($("button[name='__CONFIRM__']").length == 0) {
                console.log("Tim Tiep")
            }
            else
            {   
                clearInterval(search);
                console.log("Da tim thay")
                console.log($("button[name='__CONFIRM__']").attr("type"))
                $("button[name='__CONFIRM__']").click();
            }
        }, 1000);		

	}

	this.Vote = function(d){
		
		Loop(d)
		function Loop(d){
			if ($("#PopsAut").val() == 1) {
				/*
				var ListEmail = $("#ListEmail").val()
				var ListEmail1 = ListEmail;
				var ListEmail = ListEmail.split("\n");
				if (ListEmail.length <= 1 && ListEmail[0] == "" ||ListEmail[0] == null) {
					$("#PopsNote").text("Vui lòng thêm List Email")
				}
				else
				{
					var Email = ListEmail[0];
					$("#ListEmail").val(ListEmail1.replace(Email+"\n","").replace(Email,"")) // Xóa khỏi danh sách
					d.Email = Email;
					d.cid = $("#PopsId").val();
					GetInfo(d)				
				}
				*/
			    chrome.runtime.sendMessage({
			        action: 'clear'
			    }, function(data) {
			        console.log(data)
			        GetInfo(d)
			    }); 				
			}
			else
			{
				$("#PopsNote").text("Đã có lệnh dừng Vote...")
			}


		}
		function GetInfo(d){
			var ListUid = $("#PopsListUid").val();
			var ListUid1 = ListUid;
			var ListUid = ListUid.split("\n");
			if (ListUid.length <= 1 && ListUid[0] == "" ||ListUid[0] == null) {
				$("#PopsNote").text("Vui lòng thêm List Uid")
			}
			else
			{
				var Uid = ListUid[0];
				var Uid = Uid.split("|")[0];
				$("#PopsListUid").val(ListUid1.replace(ListUid[0]+"\n","").replace(ListUid[0],"")) // Xóa khỏi danh sách
				//d.Email = Email;
	            $.ajax({
	                url: "https://graph.facebook.com/"+Uid,
	                type: "GET",
	                dataType: "json"
	            })                                   
	            .always(function(data) {    
	            	if (data.id) {
	            		$("#PopsNote").text(data.id)
	            		d.Uid = data.id;
	            		d.first_name = data.first_name;
	            		d.last_name = data.last_name;
	            		d.name = data.name.replace(/ /gi,"+");
	            		d.gender = data.gender;
	            		VoteA(d)
	            	}
	            	else
	            	{
	            		$("#PopsNote").text("Lấy Info Thất Bại")	
	            	}

	            })
			    .fail(function( data ) {
			    	$("#PopsNote").text("Lấy Info Thất Bại ! UID không tồn tại !!!")	
			    	Loop(d)
			    });		            					
				
			}
		
		}
		function VoteA(d)
		{	
			//app old 672471839547789
			//new: 1730289767197849
            $.ajax({
                url: "http://pops.vn/pepsimusic/auth-callback?app=facebook&cid="+d.cid+"&id=1489855201267927&first_name="+d.first_name+"&gender="+d.gender+"&last_name="+d.last_name+"&link=https%3A%2F%2Fwww.facebook.com%2Fapp_scoped_user_id%2F"+d.Uid+"%2F&locale=vi_VN&name="+d.name+"&timezone=7&updated_time=2015-04-13T16%3A02%3A41%2B0000&verified=1",
                type: "GET"    
            })                                   
            .always(function(xhr,textStatus) {    
            	//console.log(xhr.status+"\n"+textStatus)
                if (textStatus == "success") {
                    VoteB(d)                 
                }
                else
                {

                }

            });			
		}
		function VoteB(d){
			$.ajax({
			    url: "http://pops.vn/pepsimusic/binh-chon-clip/ca-si/2",
			    type: "GET"
			})                                   
			.always(function(data) {
			    var Token = $(data).find(".btnVotePlus").attr("data-token")
			    d.Token = Token;
			    VoteC(d)
			}); 			
		}
		function VoteC(d){
			//var Token = $("#PopsToken").val();
            $.ajax({
                url: "http://pops.vn/pepsimusic/vote/",
                type: "POST",
                dataType: "json",
                //data: "fb_dtsg="+_fb.FB_Key+"&__user="+_fb.FB_Uid+"&__a=1"
                data: "clipid="+d.cid+"&fuel_csrf_token="+d.Token
            })                                   
            .always(function(data) {
        		var TongCongPops = parseInt($("#TongCongPops").text())
        		var TongCongPops = TongCongPops+1;
        		$("#TongCongPops").text(TongCongPops)            	
            	
            	if (data.error == 2) {
            		$("#PopsNote").text(d.Email+" => Đã bình chọn,"+data.data)
            		var ThatBai = parseInt($("#ThatBaiPops").text())
            		var ThatBai = ThatBai+1;
            		$("#ThatBaiPops").text(ThatBai)
            		//Dừng bình chọn
            		$("#PopsAut").val("0")
            		//Reset IP

		            var dem = 0;
		            var data = uss.rsdcom({"type":2, "fb_id": 00000});
		            if (data.stt == 0) {
		                $("#PopsNote").text(data.note)
		                var interval = setInterval(function()
		                {
		                    dem = dem+1;
		                    data = uss.rsdcom({"type":1});
		                    if (data.stt == "done") {
		                        $("#PopsNote").text(data.note)
		                        clearInterval(interval);
		                        dem = 1;
				                var interval1 = setInterval(function()
				                {
				                    dem = dem-1;
				                    $("#PopsNote").text(dem)
				                    if (dem == 0) {
				                    	clearInterval(interval1);
				                    	$("#PopsAut").val("1")
										Loop(d) // Tiếp tục lấy                 	
				                    }
				                    
				                }, 1000); 	                        
		                    }
		                    else
		                    {
		                        $("#PopsNote").text("Đang chờ Reset Dcom ("+dem+")")
		                    }
		                    
		                }, 1000);                
		            }
		            else
		            {
		                $("#PopsNote").text("Yêu cầu thất bại !")
		            }	            		
            	}
            	else
            	{
            		$("#PopsNote").text("ID: "+d.cid+" -> "+d.Email+" => "+data.data)
            		var ThanhCong = parseInt($("#ThanhCongPops").text())
            		var ThanhCong = ThanhCong+1
            		$("#ThanhCongPops").text(ThanhCong)
            		Loop(d) // Tiếp tục lấy

            	}
            	

            });				
		}
		//http://pops.vn/pepsimusic/auth-callback?app=facebook&cid=7&id=672471839547789&email=ukesemessdsdseke%40gmail.com&first_name=Hau&gender=male&last_name=Nguyen&link=https%3A%2F%2Fwww.facebook.com%2Fapp_scoped_user_id%2F672471839547789%2F&locale=vi_VN&name=Hau+Nguyen1&timezone=7&updated_time=2015-04-13T16%3A02%3A41%2B0000&verified=1
	}
	this.Logout = function(d){

	}


}
var Pops = new Pops();
$(document).ready(function() {
var html = "";
html += '<div style="  bottom: 0px;position: absolute;z-index: 99999999;  width: 100%;  background: white;color: black;">'
html += '<textarea id="ListEmail" style="color: rgb(10, 6, 1);  width: 50%;  height: 200px;"></textarea>'
html += '<textarea id="PopsListUid" style="color: rgb(10, 6, 1);  width: 50%;  height: 200px;"></textarea>'
html += '<input id="PopsAut" type="hidden" value="0">'
html += '<input id="PopsId" type="" value="7">'
html += '<input id="PopsToken" type="" value="Dd0ZrYejOl6593aa87d48f202f3fa92b73686fcc09">'
html += '<p><button id="BatDau">Bắt Đầu</button> <button id="DungLai" class="hidden">Dừng Lại</button> <span id="PopsNote"></span></p>'
html += '<p>Tổng Cộng: <span id="TongCongPops">0</span></p>'
html += '<p>Thành Công: <span id="ThanhCongPops">0</span></p>'
html += '<p>Thất Bại: <span id="ThatBaiPops" style="color: rgb(231, 13, 30);">0</span></p>'
html += '</div>';

if (document.URL.match("binh-chon-clip") !== null) {

}
else
{
	if (document.URL.match(".com") !== null) {

	}
	else
	{
		//$("body").append(html)
	}
	
}

$("#BatDau").off("click").click(function(){
	$(this).hide();
	$("#DungLai").fadeIn(500)
	$("#PopsAut").val("1")
	$("#PopsNote").text("Bắt đầu Bình Chọn !")
	//$("#ThanhCongPops,#ThatBaiPops").text("0")
	Pops.Vote({
		"cid": $("#PopsId").val()
	});	
})
$("#DungLai").click(function(){
	$(this).hide();
	$("#BatDau").fadeIn(500)	
	$("#PopsAut").val("0")
	$("#PopsNote").text("Đã dừng bình chọn !")
})


/*
if ($.UssUrlVal('redirect_uri')) {
	if ($.UssUrlVal('redirect_uri').match("pops.vn") !== null) {
	    console.log("Tiến hành Login")
	    GeoCoint.VerifyFB();
	}
}
*/
})