function thongbao_log(type,noidung)
{
	if (type == 1) {
		console.log(noidung);
	}
	else if (type == 2) {
		console.error(noidung);
	}
	else if (type == 3) {
		console.warn(noidung);
	}	
	else if (type == 4) {
		console.log('%c '+noidung+' ', 'background: #222; color: #bada55');	
	}		
	else
	{
		console.info(noidung);
	}
}
