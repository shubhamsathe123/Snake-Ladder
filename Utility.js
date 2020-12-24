class Utility
{
   START_POSITION = 0;
   END_POSITION = 100;
   //uc1
    gamePlay = () =>
    {
       let dice=Math.floor(Math.random()*6)+1;
       console.log(`number getting after rolling the dice is ${dice}`);
    }
}
module.exports = new Utility();