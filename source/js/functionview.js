$(function(){
  var functionlist = $("#functionlist");
  var canvas=$("#canvas");
  var g_fileopened= new Array();
  functionlist.html("<div>loading...</div>");
  functionlist.load("php/functionfinder.php?"+Math.random()*1000000);
  
  var demo=$("#functionlist");
  var functionview=$("#functionview");
        demo.hide(); 
		demo.draggable();
	    demo.resizable();		
 functionview.click(function() {
		demo.show("slide");
		});
		
		
 var canvas=$(".canvas");
 
 canvas.draggable({ 
        start: function() { $(this).appendTo('body'); }, 
        zIndex: 300, 
});


$(".fun").live('click', function() {
	
	var name = $(this).text();
	name = name.substring(0,name.length-3);
    var opened;
    opened = findElement(name);
    if(opened == -1){
    	g_fileopened.push(name);
	   var canvas=$("#canvas");
	   canvas.append("<div class='n' ><div class='ui-widget-header'>function "+name+"() <\/div> <div class='ui-widget-content '"+" id='"+name+"'><\/div><\/div>");
	  
	   var n=$(".n");
	  
	   $(".n").draggable();
	   $('.n').resizable();
	  
	   //n.append("<div class='ex'>X<\/div>");
       var ex = $(".n .ex").last();
      
	   ex.css({"position":"absolute","padding-right" : 2, "padding-top" : 1, "padding-left" : 2,
              "color" : "white", "font-family" : "sans-serif",
              "top" : 0, "right": 0, "cursor": "pointer",
              "font-size" : "7px", "background-color" : "gray", "z-index" : 100 ,"flow":"right"});
     
	 
	  ex.hover(function(){
        ex.css("color","black");
      }, function(){
        ex.css("color","white");
      }).click(function(){
      
        
		if (confirm("Are you sure you want to delete this class?")){
          $(".n").hide("drop", { direction: "down" }, 1000);
		  this.opened = -1;
        }
      });
	 $("#"+name).html("<div>loading...</div>");
   	 $("#"+name).load("php/var_search.php?"+Math.random()*1000000, {name:name+"("});	  
		
    }
    else alert("The file has already been opened!");
  }).live('mouseover', function(){
    $(this).css({"background-color": "#ccc"});
  }).live("mouseout", function(){
    $(this).css({"background-color":"#f6a828" });
  });   


 
	

   function findElement(name){
  	var i = 0;
  	for(i in g_fileopened){
  		if(g_fileopened[i]==name) return i;
  	}
  	return -1;//-1 means element is not fount in array;
  }
   
  });