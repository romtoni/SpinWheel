function spin() 
{
	var kesempatan_tersisa = document.getElementById("kesempatan_tersisa").value;
	
	if (eval(kesempatan_tersisa) === 0) alert("Maaf kesempatan harian Anda sudah habis");
	else
	{
		//kosongkan hadiah
		document.getElementById('lbl_hadiah_terpilih').innerHTML="";
		
		var min_rotation = 45; //minimal derajat rotasi
		var multiplier = 100; //kecepatan putaran
		var default_deg = document.getElementById('degree').value; //default degree, ditaruh di HTML agar selalu berputar kekanan dengan kecepatan tetap
		
		//putar dengan kelipatan 45 derajat
		var deg = ((Math.floor(Math.random() * multiplier) + multiplier) * min_rotation) + eval(default_deg); 

		//derajat rotasi baru setelah diputar
		document.getElementById('degree').value=deg;

		//animasi putaran
		document.getElementById('box').style.transform = "rotate("+deg+"deg)";
		
		//derajat default per masing-masing potongan (kelipatan 45)
		var deg1 = document.getElementById('deg1').value;
		var deg2 = document.getElementById('deg2').value;
		var deg3 = document.getElementById('deg3').value;
		var deg4 = document.getElementById('deg4').value;
		var deg5 = document.getElementById('deg5').value;
		var deg6 = document.getElementById('deg6').value;
		var deg7 = document.getElementById('deg7').value;
		var deg8 = document.getElementById('deg8').value;	

		//ambil nilai per masing-masing potongan
		var n1 = document.getElementById('lbl1').textContent;
		var n2 = document.getElementById('lbl2').textContent;
		var n3 = document.getElementById('lbl3').textContent;
		var n4 = document.getElementById('lbl4').textContent;
		var n5 = document.getElementById('lbl5').textContent;
		var n6 = document.getElementById('lbl6').textContent;
		var n7 = document.getElementById('lbl7').textContent;
		var n8 = document.getElementById('lbl8').textContent;	

		//derajat baru setelah diputar per masing-masing potongan (kelipatan 45)
		var deg1_new = (eval(deg1) + eval(deg)) % eval(360); 
		var deg2_new = (eval(deg2) + eval(deg)) % eval(360); 
		var deg3_new = (eval(deg3) + eval(deg)) % eval(360);
		var deg4_new = (eval(deg4) + eval(deg)) % eval(360); 
		var deg5_new = (eval(deg5) + eval(deg)) % eval(360); 
		var deg6_new = (eval(deg6) + eval(deg)) % eval(360); 
		var deg7_new = (eval(deg7) + eval(deg)) % eval(360); 
		var deg8_new = (eval(deg8) + eval(deg)) % eval(360); 

		//declare nilai baru per masing-masing potongan
		var n1_new = n1;
		var n2_new = n2;
		var n3_new = n3;
		var n4_new = n4;
		var n5_new = n5;
		var n6_new = n6;
		var n7_new = n7;
		var n8_new = n8;

		//derajat baru ditaruh di HTML
		document.getElementById('deg1').value = deg1_new;
		document.getElementById('deg2').value = deg2_new;
		document.getElementById('deg3').value = deg3_new;
		document.getElementById('deg4').value = deg4_new;
		document.getElementById('deg5').value = deg5_new;
		document.getElementById('deg6').value = deg6_new;
		document.getElementById('deg7').value = deg7_new;
		document.getElementById('deg8').value = deg8_new;

		//setup animasi untuk menggerakkan arah panah agar menunjuk ke angka terpilih
		var element = document.getElementById('mainbox');
		element.classList.remove('animate');
		setTimeout(function(){
			element.classList.add('animate');
			
			var hadiah_terpilih;

			if (deg1_new == 90) hadiah_terpilih = n1_new;
			if (deg2_new == 90) hadiah_terpilih = n2_new;
			if (deg3_new == 90) hadiah_terpilih = n3_new;
			if (deg4_new == 90) hadiah_terpilih = n4_new;
			if (deg5_new == 90) hadiah_terpilih = n5_new;
			if (deg6_new == 90) hadiah_terpilih = n6_new;
			if (deg7_new == 90) hadiah_terpilih = n7_new;
			if (deg8_new == 90) hadiah_terpilih = n8_new;
			
			
			document.getElementById('lbl_hadiah_terpilih').innerHTML="Selamat Anda mendapatkan hadiah "+hadiah_terpilih+ " !!";
			
			var list_hadiah_didapatkan; 
			var hadiah_didapatkan;
			var i;
			var jmldata;

			//ambil list hadiah yang sudah didapatkan
			list_hadiah_didapatkan = document.getElementById("list_hadiah_didapatkan").value;
			
			list_hadiah_didapatkan = list_hadiah_didapatkan+";"+hadiah_terpilih;
			
			//tambah list hadiah yang sudah didapatkan
			document.getElementById("list_hadiah_didapatkan").value = list_hadiah_didapatkan; 

			jmldata = list_hadiah_didapatkan.split(";").length - 1;
			
			hadiah_didapatkan = list_hadiah_didapatkan.split(";");

			lbl_list_hadiah_didapatkan = "";
			for (i=1; i<=jmldata; i++)
			{
				lbl_list_hadiah_didapatkan += "<li>"+hadiah_didapatkan[i]+"</li>";
			}

			document.getElementById("lbl_list_hadiah_didapatkan").innerHTML = lbl_list_hadiah_didapatkan;
			document.getElementById("dummy").value = lbl_list_hadiah_didapatkan;

			
			//kurangi kesempatan
			kesempatan_tersisa = eval(kesempatan_tersisa) - eval(1);
			document.getElementById("kesempatan_tersisa").value = kesempatan_tersisa;
			document.getElementById("lbl_kesempatan_total").innerHTML = kesempatan_tersisa;
										 
		}, 5000);      
		

		//RESTORE POSISI KE DEFAULT ANGLE
		document.getElementById('deg1').value = 270; //default di kiri
		document.getElementById('deg2').value = 90;	//default di kanan
		document.getElementById('deg3').value = 180; //default di bawah
		document.getElementById('deg4').value = 0; //default di atas
		document.getElementById('deg5').value = 135; //default di kanan bawah
		document.getElementById('deg6').value = 315; //default di kiri atas
		document.getElementById('deg7').value = 45; //default di kanan atas
		document.getElementById('deg8').value = 225; //default di kiri bawah

	}
                              
}                                    