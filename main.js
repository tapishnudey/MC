var canvas = new fabric.Canvas('myCanvas');

block_img_height = 30;
block_img_width = 30;

player_x = 10;
player_y = 10;

var player_object= "";
var block_object= "";

function player_update(){
    fabric.Image.fromURL("player.png",function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
         top:player_y,
         left:player_x,   
        });

    canvas.add(player_object);
    });

}

function new_Image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_object = Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);

        block_object.set({
         top:player_y,
         left:player_x,   
        });

    canvas.add(block_object);
    });
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e){
   KeyPressed = e.keyCode;
   console.log(KeyPressed);

   if(KeyPressed == '38'){
       up();
       console.log("up");
   }

   if(KeyPressed == '40'){
       console.log('down');
       down();
   }

   if(KeyPressed == '37'){
    console.log('left');
    left();
   }

   if(KeyPressed == '39'){
    console.log('right');
    right();
   }

   if(KeyPressed == '67'){
    new_Image("cloud.jpg");
    console.log("c is presed so cloud will spawn");
   }

   if(KeyPressed == '68'){
    new_Image("dark_green.png");
    console.log("d is presed so the unknown block will spawn");
   }

   if(KeyPressed == '71'){
    new_Image("ground.png");
    console.log("g is presed so Alpha grass block will spawn");
   }

   if(KeyPressed == '76'){
    new_Image("light_green.png");
    console.log("l is presed so Alpha grass block top will spawn");
   }

   if(KeyPressed == '82'){
    new_Image("roof.jpg");
    console.log("r is presed so pre-1.14 netherrack will spawn");
   }

   if(KeyPressed == '84'){
    new_Image("trunk.jpg");
    console.log("t is presed so oak wood will spawn");
   }

   if(KeyPressed == '85'){
    new_Image("unique.png");
    console.log("u is presed so glowstone will spawn");
   }

   if(KeyPressed == '87'){
    new_Image("wall.jpg");
    console.log("w is presed so brick wall will spawn");
   }

   if(KeyPressed == '89'){
    new_Image("yellow_wall.png");
    console.log("y is presed so yellow wall will spawn.This is actualy *NOT* in minecraft so dont search for it");
   }

   if(e.shiftKey == true && KeyPressed == '80'){
       block_img_width=block_img_width+10;
       block_img_height=block_img_height+10;
       document.getElementById("current-width").innerHTML=block_img_width;
       document.getElementById("current-height").innerHTML=block_img_height;
   }
}

function up(){
    if (player_y>=0){
        player_y=player_y-block_img_height;
        console.log("block_img_height = "+block_img_height);
        console.log("Player X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y<=550){
        player_y=player_y+block_img_height;
        console.log("block_img_height = "+block_img_height);
        console.log("Player X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x>=0){
        player_x=player_x-block_img_width;
        console.log("block_img_width = "+block_img_width);
        console.log("Player X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x<=1000){
        player_x=player_x+block_img_width;
        console.log("block_img_width = "+block_img_width);
        console.log("Player X = "+player_x+" Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}