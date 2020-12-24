class Utility
{
   START_POSITION = 0;
   END_POSITION = 100;
   SNAKE=1;
   LADDER=2;
   NO_PLAY=3;
   current_position;  
   dice_count;
   
    gamePlay = (current_position) =>
    {
      if(current_position<this.END_POSITION)
      {
        let dice=Math.floor(Math.random()*6)+1;
        console.log(`dice | ${dice}`);
        let check_option=Math.floor(Math.random()*3)+1;
       switch(check_option)
         {
           case this.SNAKE:
                console.log('snake |');
               if(current_position-dice>=this.START_POSITION)
               {
                current_position=current_position-dice;
               }
               break;
           case this.LADDER:
               console.log('ladder |');
               if(current_position+dice<=this.END_POSITION)
               {
               current_position=current_position+dice;
               } 
              break;
           case this.NO_PLAY:
               console.log('no play |');
               current_position=current_position;
               break;
         }
         this.dice_count++;
     }
       console.log(`current position is ${current_position}`);
       return current_position;
    }

    twoPlayers = () =>
    {
        let Player1Position = this.START_POSITION
        let Player2Position = this.START_POSITION
        this.dice_Count = this.START_POSITION
       while( Player1Position < this.END_POSITION && Player2Position <  this.END_POSITION )
        {
           console.log('Player 1:-   ');
           Player1Position = this.gamePlay(Player1Position);
           console.log("----------------------------------------------------------------");
           if(Player1Position == this.END_POSITION)
           {
             console.log("Player 1 Won The Game ");
               break;
           }

           console.log('Player 2:-   ');
           Player2Position = this.gamePlay(Player2Position);
           console.log("----------------------------------------------------------------");
           if(Player2Position == this.END_POSITION)
           {
            console.log("Player 2 Won The Game ");
              break;
           }            
       }
    }   
}
module.exports = new Utility();