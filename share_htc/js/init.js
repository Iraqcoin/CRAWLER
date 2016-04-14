

$(function() {

//tipsy tooltip
    $('.north').tipsy({gravity: 'n'});
    $('.south').tipsy({gravity: 's'});
    $('.east').tipsy({gravity: 'e'});
    $('.west').tipsy({gravity: 'w'});
    $('.north-west').tipsy({gravity: 'nw'});
    $('.north-east').tipsy({gravity: 'ne'});
    $('.south-west').tipsy({gravity: 'sw'});
    $('.south-east').tipsy({gravity: 'se'});
    
    // check all
    $("#checkall").click(function()				
    {
        var checked_status = this.checked;
        $(".table :checkbox").each(function()
        {
        	this.checked = checked_status;
        });
    });
    

    
    	
});

