canvas=new fabric.Canvas("myCanvas")
blockWidth=30
blockHeight=30
playerX=20
playerY=20
playerObject=""

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject=Img
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObject)
    })
}

function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockObject=Img
        blockObject.scaleToWidth(blockWidth)
        blockObject.scaleToHeight(blockHeight)
        blockObject.set({
            top:playerY,
            left:playerX
    })
    canvas.add(blockObject)
})
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e) {
    keypressed=e.keyCode
    if (keypressed=="37"){
        left()
    }

    if (keypressed=="38"){
        up()
    }

    if (keypressed=="39"){
        right()
    }

    if (keypressed=="40"){
        down()
    }

    if (keypressed=="87"){
        new_image("wall.jpg")
    }

    if (keypressed=="71"){
        new_image("ground.png")
    }

    if (keypressed=="76"){
        new_image("light_green.png")
    }

    if (keypressed=="84"){
        new_image("trunk.jpg")
    }

    if (keypressed=="82"){
        new_image("roof.jpg")
    }

    if (keypressed=="89"){
        new_image("yellow_wall.png")
    }

    if (keypressed=="68"){
        new_image("dark_green.png")
    }

    if (keypressed=="85"){
        new_image("unique.png")
    }

    if (keypressed=="67"){
        new_image("cloud.jpg")
    }

    if (e.shiftKey==true && keypressed=="80"){
        blockWidth=blockWidth+10
        blockHeight=blockHeight+10
        document.getElementById("current_width").innerHTML=blockWidth
        document.getElementById("current_height").innerHTML=blockHeight
    }

    if (e.shiftKey==true && keypressed=="77"){
        blockWidth=blockWidth-10
        blockHeight=blockHeight-10
        document.getElementById("current_width").innerHTML=blockWidth
        document.getElementById("current_height").innerHTML=blockHeight
    }
}

function left(){
    if (playerX>0){
        playerX=playerX-blockWidth
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function right(){
    if (playerX<=850){
        playerX=playerX+blockWidth
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function up(){
    if (playerY>0){
        playerY=playerY-blockHeight
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function down(){
    if (playerY<=500){
        playerY=playerY+blockHeight
        canvas.remove(playerObject)
        playerUpdate()
    }
}