class Utility
{
   START_POSITION = 0;
   END_POSITION = 100;
   SNAKE=1;
   LADDER=2;
   NO_PLAY=3;
   current_position=0;
   //uc1
    gamePlay = () =>
    {
       let dice=Math.floor(Math.random()*6)+1;
       console.log(`number getting after rolling the dice is ${dice}`);
       let check_option=Math.floor(Math.random()*3)+1;
       switch(check_option)
       {
           case this.SNAKE:
                console.log('snake');
               if(this.current_position-dice<=100)
               {
                this.current_position=this.current_position-dice;
               }
               break;
           case this.LADDER:
               console.log('ladder');
               if(this.current_position+dice<=100)
               {
               this.current_position=this.current_position+dice;
               } 
              break;
           case this.NO_PLAY:
               console.log('no play');
               this.current_position=this.current_position;
               break;
       }
       console.log(`current position is ${this.current_position}`);
    }
}
module.exports = new Utility();