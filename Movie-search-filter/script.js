async ()=>{
    await fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(res => 
            {
                var len=res.length;
                var table=document.createElement('table');
                table.id="myTable";
                var arr=['MOVIE','NAME','RATING','GENRE','ABOUT','DATE','TIME','PREVIOUS EPISODE','OFFICIAL WEBSITE']
                for(var j=0;j<=8;j++){
                    var th=document.createElement('th');
                    th.innerHTML= arr[j];
                    table.append(th);
                }
                

                for(var i=0;i<len;i++){ 

                    var tr=document.createElement('tr');
                    
                    var td=document.createElement('td');
                    var image=document.createElement('img');
                    image.src=res[i].image.medium;
                    td.append(image);
                    tr.append(td);
                    
                    var td1=document.createElement('td');
                    td1.innerHTML=res[i].name+'\n'+' '+'['+res[i].language+']'+"\n"+'('+res[i].runtime+ 'minutes'+')';
                    tr.append(td1);
                
                    var td2=document.createElement('td');
                    td2.innerHTML=''+res[i].rating.average+' '+'/'+10;
                    tr.append(td2);
                
                    var td3=document.createElement('td');
                    var temp="";
                     for(var j=0;j<res[i].genres.length;j++){
                        temp+=res[i].genres[j]+','+'\n';
                     }         
                     td3.innerHTML=temp.trim();           
                    tr.append(td3);
                    
                    var td4=document.createElement('td');

                    td4.innerHTML=res[i].summary;
                    tr.append(td4);
                    
                    var td5=document.createElement('td');
                    td5.innerHTML=res[i].premiered;
                    tr.append(td5);
                
                    var td6=document.createElement('td');
                    var diff=res[i].schedule.time.split(':');
                    var t="";
                    if (diff[0]>12){ 
                        t=''+diff[0]-12+':'+diff[1]+'  '+'PM';
                    }
                    else{
                        t=''+diff[0]+':'+diff[1]+' '+'AM';
                    }
                    
                    //console.log(t);
                    td6.innerHTML= t +'\n'+ res[i].schedule.days[0];
                    tr.append(td6);

                    var td7=document.createElement('td');
                    var ar=document.createElement('a');
                    ar.setAttribute('href', "'"+res[i]._links.previousepisode.href+"'")
                    ar.innerHTML=res[i]._links.previousepisode.href;
                    td7.append(ar);
                    tr.append(td7);

                    var td8=document.createElement('td');
                    var ar1=document.createElement('a');
                    ar1.setAttribute('href', "'"+res[i].officialSite+"'")
                    ar1.innerHTML=res[i].officialSite;
                    td8.append(ar1);
                    tr.append(td8);

                    table.append(tr);
                    document.body.appendChild(table);
                    
                    //console.log(res[i].genres);
                }})
                .catch((error) => {
                    alert(error);
                 console.error('Error:', error);
                });           
            }            
        function myFunction() 
                {
                    var input, filter, table1, trn, td, i, txtValue;
                    input = document.getElementById("myInput");
                    filter = input.value;
                    table1 = document.getElementById("myTable");
                    trn = table1.getElementsByTagName("tr");
                    
                   for (i = 0; i < trn.length; i++) 
                    {
                         tn1 = trn[i].getElementsByTagName("td")[1];
                         if (td) 
                         {
                            txtValue = tn1.textContent || tn1.innerHTML;
                            if (txtValue.indexOf(filter) > -1) 
                            {
                                trn[i].style.display = "";
                            } 
                            else {
                                 trn[i].style.display = "none";
                            }
                        }       
                    }
                }
            
            