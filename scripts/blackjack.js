let nolist = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
let suitlist = ["Diamonds","Clubs","Hearts","Spades"];


function randomcard(alist,blist){
    let a = Math.floor(Math.random() * nolist.length);
    let b = Math.floor(Math.random() * suitlist.length);
    let c = Math.floor(Math.random() * nolist.length);
    let d = Math.floor(Math.random() * suitlist.length);

    while(a==c && b==d){
        d = Math.floor(Math.random() * suitlist.length)
    }
        
    alist[0] = nolist[a];
    blist[0] = suitlist[b];
    alist[1] = nolist[c];
    blist[1] = suitlist[d];
}

function scorecalc(hand){
    let sum =0;
    for(i=0;i<hand.length;i++){
        if(isNaN(parseInt(hand[i])) == false){
            sum += parseInt(hand[i]);
        }
        else{
            sum += 10;
        }
    }
    if(hand.includes("A")){
        if(sum < 21){
            sum += 1;
        }
        else{
            sum -= 9;
        }
    }
    return sum;
}

function start(){
    let playercardno =[]
    let playercardsuit =[]
    let dealercardno =[]
    let dealercardsuit = []
    randomcard(playercardno, playercardsuit);
    randomcard(dealercardno, dealercardsuit);
    document.getElementById("playerhand").textContent = playercardno[0] + "- " + playercardsuit[0] + ' / ' + playercardno[1] + "- " + playercardsuit[1];
    document.getElementById("dealerhand").textContent = dealercardno[0] + "- " + dealercardsuit[0] + ' / ' + dealercardno[1] + "- " + dealercardsuit[1];

    document.getElementById("dealerscore").textContent = scorecalc(dealercardno);
    document.getElementById("playerscore").textContent = scorecalc(playercardno);


}

function checkwin(a,b){
    if(a>b){
        document.getElementById("winner").textContent = "Dealer Wins";
    }
    else if (b>a){
        document.getElementById("winner").textContent = "Player Wins";
    }
    else{
        document.getElementById("winner").textContent = "Draw";
    }
}

function hit(no,suit){

    let a = Math.floor(Math.random() * nolist.length);
    let b = Math.floor(Math.random() * suitlist.length);

    let newlist = ["Diamonds","Clubs","Hearts","Spades"];

    while (no.indexOf(nolist[a]) != -1){
        for(i=0;i<newlist.length;i++){
            if(newlist[i]== suit[no.indexOf(nolist[a])]){
                newlist.splice(i,1);
                i--;
            }
        }
    }



    no = no.concat(nolist[a]);
    suit = suit.concat(suitlist[b]);

}