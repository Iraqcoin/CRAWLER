ussv_help_panel();
function ussv_help_panel()
{

	var url = "http://ussv.net/help/ussv_help_panel.php";
	chrome.runtime.sendMessage({
	    method: 'GET',
	    action: 'xhttp',
	    url: url,
	    data: "hj=hj"
	}, function(mydata) {
	    usshtml=document.createElement('div');
	    usshtml.innerHTML=mydata;	
		document.body.appendChild(usshtml);
		thaotac_ussv_help();
	});		
}

function ussv_help_popup_text()
{
	$(".class_div_popup_help").fadeIn(500);
	var url = "http://ussv.net/help/ussv_help_popup/ussv_help_tip_001.html";
	chrome.runtime.sendMessage({
	    method: 'GET',
	    action: 'xhttp',
	    url: url,
	    data: "hj=hj"
	}, function(mydata) {
		var text = mydata.split("|");
		var note1 = text[1].replace(/\n/g,"<br/>");
		var note2 = text[2].replace(/\n/g,"<br/>");
		$("#uh_t_note1").html(note1);
		$("#uh_t_note2").html(note2);  
	});		
}

function ussv_help_hd_text(id,type)
{
	if (type !== "help_loc_trung") {
		$("#uh_t_note1, #uh_t_note2").html(img_load);
		$(".class_div_popup_help").fadeIn(500);
	}
	if (id >= 0) {
		var url = "http://ussv.net/help/ussv_huong_dan/ussv_huong_dan_"+id+".html";
	}
	else
	{
		var url = "http://ussv.net/help/ussv_huong_dan/ussv_huong_dan_000.html";
	}
	chrome.runtime.sendMessage({
	    method: 'GET',
	    action: 'xhttp',
	    url: url,
	    data: "hj=hj"
	}, function(mydata) {
		var text = mydata.split("|");
		var title = text[0].split("_");
		var title = title[1];
		var note1 = text[1].replace(/\n/g,"<br/>");
		var note2 = text[2].replace(/\n/g,"<br/>");
		if (type == "help_loc_trung") {
			$("#title_help_loc_trung").text(title);
			$(".body_help_loc_trung").html(note1);
			$(".show_help_loc_trung").hide();
			$(".body_help_loc_trung").fadeIn(500);
		}
		else
		{
			$("#popup_help_title").html(title);
			$("#uh_t_note1").html(note1);
			$("#uh_t_note2").html(note2);  			
		}
	});		
}


function thaotac_ussv_help()
{
	$("#div_right_menu").append('<a href="#" style="min-width: 150px;" class="button2 blue" id="show_help_center">Help Center</a>');
	$("#close_help_popup").click(function(){
		$(".class_div_popup_help").fadeOut(500);
	});	
	$(".popup_menu_list.help").click(function(){
		var id = this.id;
		ussv_help_hd_text(id);
		$(".popup_menu_list.help").css("background","#FFF");
		$(this).css("background","rgb(233, 243, 251)");
	});
	$("#help_select_type").change(function(){
		if ($(this).val() == "helps") {
			$(".help_helps").hide();
			$(".help_helps.helps").fadeIn(500);
		}
		else if($(this).val() == "tips")
		{
			$(".help_helps").hide();
			$(".help_helps.tips").fadeIn(500);
		}
		else
		{
			alert("Vui lòng chọn đúng mục !");
		}
	});
}