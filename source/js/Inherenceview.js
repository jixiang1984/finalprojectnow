// JavaScript Document

$(function(){
	
	 var sourcecodewin=$(".sourcecodewin");
	
	 var inherencelist= $("#inherencelist");

     var g_fileopened= new Array();
 
    inherencelist.html("<div>loading...</div>");
 
    inherencelist.load("php/inherenceview.php?"+Math.random()*1000000);
	
	
	$(".node").draggable();
	
	
   // sourcecodewin.append("<div class='classContainter'></div>");
	
	//$(".classContainter").draggable();
  
  
    var demo=$("#inherencelist");
 
   var filelist=$("#filelist");
 
   var gvarlist=$("#gvarlist");
   
   var functionlist =$("#functionlist");
  
   var Inherenceview=$("#Inherenceview");
        demo.hide(); 
		demo.draggable();
	    demo.resizable();		
  Inherenceview.click(function() {
	    sourcecodewin.html("");
		filelist.hide();
		gvarlist.hide();
		functionlist.hide();
		demo.show("slide");
		$(".classitem").draggable();
		
			
		
		});
		
		
		
	$(".classitem").live('click', function() {
		
	var name = $(this).text();
    
	var opened;
    
	opened = findElement(name);

    if(opened == -1){
    	//g_fileopened.push(name);
		
	 
	 sourcecodewin.html("<div>loading...</div>");
     
	 sourcecodewin.load("php2/read.php?"+Math.random()*1000000, {name:name});
	 
	 
    }
    else alert("The file has already been opened!");
  }).live('mouseover', function(){
    $(this).css({"background-color": "#ccc"});
  }).live("mouseout", function(){
    $(this).css({"background-color":"#f6a828" });
  });   
  
    
	$(".node").live('click', function() {
		alert("aaa");
		
	});
	
	
	
	
	$(".node").draggable();
	
    
     //sourcecodewin.append("<div id='myCanvas'><\/div>");
	 ///sourcecodewin.append("<div class='parentclass'><\/div>");
	 //sourcecodewin.append("<div class='currentclass'><\/div>");
	 //sourcecodewin.append("<div class='subclasses'><\/div>");
	 
	 
	 //alert(document.getElementById("parentclass").width());
	 
	 
	 //var a=document.getElementById("parentclass").style.width;
	 
	 //alert(a);
	 
	 
	 
	
	  /*var parentleft=$(".parentclass").css('left');
	 alert(parentleft);
	 var parenttop=$(".parentclass").css('top');
	 var parentwidth=$(".parentclass").css('width');
	  var parenthight=$(".parentclass").css('height');
	 
	 var currentleft=$(".currentclass").css('top');
	 
	 
	 
	 var parentdownY=parenttop+parenthight;
	 var parentdownX=parentleft+parentwidth*0.5;
	 */
	// alert(parentdownX);
	 
	 
	 
	 

	 
	 
	 
	 
	 
	$(".parentclass").live('click', function() {
	
	var name = $(this).text();
    var opened;
    opened = findElement(name);
    if(opened == -1){
    	g_fileopened.push(name);
	   var canvas=$("#canvas");
	   canvas.append("<div class='n' ><div class='ui-widget-header'>"+name+"<\/div> <div class='ui-widget-content '"+" id='"+name+"'><\/div><\/div>");
	  
	   var n=$(".n");
	  
	   $(".n").draggable();
	   $('.n').resizable();
	  
	   n.append("<div class='ex'>X<\/div>");
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
    $("#"+name).load("php/read.php?"+Math.random()*1000000, {name:name});
		
    }
    else alert("The file has already been opened!");
  }).live('mouseover', function(){
    $(this).css({"background-color": "#ccc"});
  }).live("mouseout", function(){
    $(this).css({"background-color":"#f6a828" });
  });   


	 
	
	$(".currentclass").live('click', function() {
	
	var name = $(this).text();
    var opened;
    opened = findElement(name);
    if(opened == -1){
    	g_fileopened.push(name);
	   var canvas=$("#canvas");
	   canvas.append("<div class='n' ><div class='ui-widget-header'>"+name+"<\/div> <div class='ui-widget-content '"+" id='"+name+"'><\/div><\/div>");
	  
	   var n=$(".n");
	  
	   $(".n").draggable();
	   $('.n').resizable();
	  
	   n.append("<div class='ex'>X<\/div>");
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
    $("#"+name).load("php/read.php?"+Math.random()*1000000, {name:name});
		
    }
    else alert("The file has already been opened!");
  }).live('mouseover', function(){
    $(this).css({"background-color": "#ccc"});
  }).live("mouseout", function(){
    $(this).css({"background-color":"#f6a828" });
  });   


	 $(".subclasses").live('click', function() {
	
	var name = $(this).text();
    var opened;
    opened = findElement(name);
    if(opened == -1){
    	g_fileopened.push(name);
	   var canvas=$("#canvas");
	   canvas.append("<div class='n' ><div class='ui-widget-header'>"+name+"<\/div> <div class='ui-widget-content '"+" id='"+name+"'><\/div><\/div>");
	  
	   var n=$(".n");
	  
	   $(".n").draggable();
	   $('.n').resizable();
	  
	   n.append("<div class='ex'>X<\/div>");
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
    $("#"+name).load("php/read.php?"+Math.random()*1000000, {name:name});
		
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
  
  
   

  
  
  
  
  
