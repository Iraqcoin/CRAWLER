function Forward(url)
{
	window.location.href = url;
}
function showLoader() {
    $("#loading_result").html("<div class=\"loading_bao\" style=\"position:fixed; top:50%; right:50%; text-align:center; width:120px;  color:#000000;background-color: rgba(57, 83, 83, 0.7);z-index:99999999999; padding: 8px;-moz-border-radius: 6px;border-radius: 6px;\"><div  style=\"background:#fff; height:50px;padding-top: 15px; \" >Đang tải...<br><img src='images/ajax-loader.gif'></div></div>").hide().fadeIn(10);
    block = true;
}
function closeLoader() {
    $("#loading_result").html("").hide().fadeOut('slow');
    block = false;
}
function showResult(type, data) {
    closeLoader();
    $("#" + type + "").html(data).hide().fadeIn('slow');
    block = false;
}

isNumber = function(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode;
	
	return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

function hien_thi(id, hien_thi, table) {
    showLoader();
    $.ajax({
        url: BASE_URL +'/action.php',
        type: 'POST',
        data:"act=update_status" +
             "&id="+ id +
             "&hien_thi="+ hien_thi + 
             "&table="+ table,
        dataType: "html",
        cache: false,
        success: function(data) {
            showResult("hien_thi_" + id, data);
        }
    });
}

function xoa(id, table) {
    showLoader();
    
    var result = confirm("Want to delete?");
    if (result) {
        $.ajax({
            url: BASE_URL +'/action.php',
            type: 'POST',
            data:"act=del" +
                 "&id="+ id +
                 "&table="+ table,
            dataType: "html",
            cache: false,
            success: function(data) {
                location.reload(); 
            }
        });
    }
    
}

$(function() {


//show view country
    $("#bnt-show-view span").click(function(event){
		//event.preventDefault();
		showToCountry($(this).attr('rel'));
	});

    showToCountry = function(itemId)
    {
         
        $.ajax({
    		type	:	'POST',
    		url		:	BASE_URL + '/action.php',		
            data    :   'act=viewcountry&id='+itemId,
    		success	:	function(data)
    		{    
                //document.location.href = BASE_URL + '/gio-hang';
                $("#idshow").html(data);
    		}
            
    	});
    }
    
    	
});





//
/*
function updateCPC(id,cpc){   
    showLoader();
    $.ajax({
        type: "POST",
        url	: BASE_URL + '/action.php',	
        data: "act=admin_update_cpc" +
              "&id="+ id +
              "&cpc=" + cpc.value,
        dataType: "html",
        cache: false,
        error: function(e){
            alert(e);
        },
        success: function(response){
            showResult("updateCPC_" + id, response);
        }
    });   
}

//

function updateCTR(id,ctr){   
    showLoader();
    $.ajax({
        type: "POST",
        url	: BASE_URL + '/action.php',	
        data: "act=admin_update_ctr" +
              "&id="+ id +
              "&ctr=" + ctr.value,
        dataType: "html",
        cache: false,
        error: function(e){
            alert(e);
        },
        success: function(response){
            showResult("updateCTR_"+ id, response);
        }
    });   
}
*/



function updateCPC(id,team,quoc_gia,ngay_thang_nam,cpc){   
    $.ajax({
        type: "POST",
        url	: BASE_URL + '/action.php',		
        data: "act=admin_update_ctr_cpc&type=updatecpc_ajax"+
              "&id="+ id +
              "&team="+ team +
              "&country="+ quoc_gia +
              "&day_full="+ ngay_thang_nam +
              "&cpc=" + cpc.value,
        dataType: "html",
        cache: false,
        error: function(e){
            alert(e);
        },
        success: function(response){
            showResult("updateCPC_" + id, response);
        }
    });   
}

//
function updateCTR(id,team,quoc_gia,ngay_thang_nam,ctr){   
    $.ajax({
        type: "POST",
        url	: BASE_URL + '/action.php',		
        data: "act=admin_update_ctr_cpc&type=updatectr_ajax"+
              "&id="+ id +
              "&team="+ team +
              "&country="+ quoc_gia +
              "&day_full="+ ngay_thang_nam +
              "&ctr=" + ctr.value,
        dataType: "html",
        cache: false,
        error: function(e){
            alert(e);
        },
        success: function(response){
            showResult("updateCTR_"+ id, response);
        }
    });   
}
//tinh tien
function money(id, hien_thi, table, country, team, date) {
    showLoader();
    $.ajax({
        url: BASE_URL +'/action.php',
        type: 'POST',
        data:"act=admin_update_money"+
             "&id="+ id +
             "&hien_thi="+ hien_thi + 
             "&table="+ table +
             "&country="+ country +
             "&team="+ team +
             "&date="+ date,
        dataType: "html",
        cache: false,
        success: function(data) {
            showResult("money_" + id, data);
        }
    });
}
