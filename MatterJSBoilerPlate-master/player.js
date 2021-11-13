class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.bulletx = 0
        this.bullety = 0
        this.distancex = 0
        this.distancey = 0
        this.xx = 0
        this.yy = 0
      
    }

    display(){
        rectMode(CENTER)
        this.rect = rect(this.x,this.y,20,20)
    }

    move(){
        if(keyDown("w")){
            this.y -= 5
    
        }
        if(keyDown("a")){
            this.x -= 5
    
        }
        if(keyDown("d")){
            this.x += 5
    
        }
        if(keyDown("s")){
            this.y += 5
    
            
        }

        
            

        
    }

    fire(){
        if(mouseIsPressed){
        this.xx = this.x
            this.yy = this.y
            this.bulletx = mouseX
            this.bullety = mouseY
            console.log(this.bulletx)
            console.log(this.bullety)
            this.distancex = this.bulletx - this.xx
            this.distancey = this.bullety - this.yy
            this.x = this.x + (this.distancex/10)
            this.y = this.y + (this.distancey/10)
        }
    }
}