
function somme()
            { 
                var n1=document.getElementById("l1").value;
                var n2=document.getElementById("l2").value;
                var s=parseInt(n1)+parseInt(n2);
                document.getElementById("l3").value=s;
               // alert("somme="+s);
            }
            function maximum(){
                var n1=document.getElementById("l1").value;
                var n2=document.getElementById("l2").value;

                if((n1=="")||(n2=="")){
                    alert("attention il y a un champ vide!!");
                    return false;
                }
                if(isNaN(n1) || (isNaN(n2))) {
                    alert("attention il y a un champ non numerique!!");
                    return false;
                }
                else{
                    if(Number(n1)>Number(n2)){
                        document.getElementById("resultat").value=n1;
                    }
                    else{
                        document.getElementById("resultat").value=n2;
                    }
                    
                }

            }

            