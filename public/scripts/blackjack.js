let nolist = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
let suitlist = ["Diamonds","Clubs","Hearts","Spades"];
let playercardno =[]
let playercardsuit =[]
let dealercardno =[]
let dealercardsuit = []
let betamt = 0


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
    playercardno =[]
    playercardsuit =[]
    dealercardno =[]
    dealercardsuit = []

    if( parseInt(document.getElementById("betamount").value) > 0 && document.getElementById("winner").textContent != ""){
        document.getElementById("startbtn").style.display = "none";
        randomcard(playercardno, playercardsuit);
        randomcard(dealercardno, dealercardsuit);
        document.getElementById("playerhand").textContent = playercardno[0] + "- " + playercardsuit[0] + ' / ' + playercardno[1] + "- " + playercardsuit[1];
        document.getElementById("dealerhand").textContent = " ? / ? ";

        document.getElementById("dealerscore").innerHTML = "??";
        document.getElementById("playerscore").textContent = scorecalc(playercardno);
        document.getElementById("winner").textContent="";

        betamt = document.getElementById("betamount").value;
        document.getElementById("staybtn").style.display = "inline";

        if(scorecalc(playercardno) == 21 && playercardno.length == 2){
            if(playercardno[0] == 'A' && playercardno[1] == 'A'){
                if(dealercardno[0] != 'A' || dealercardno[1] != 'A'){
                    document.getElementById("winner").textContent = "Ban Ban"
                    document.getElementById("staybtn").style.display = "none";
                    tallypoints();
                }
                else{
                    document.getElementById("winner").textContent = "Draw"
                    document.getElementById("staybtn").style.display = "none";
                    tallypoints();
                }
            }

            else{
                if(dealercardno[0] != 'A' && dealercardno[1] != 'A' && scorecalc(dealercardno) != 21){
                    document.getElementById("winner").textContent = "Ban Luck"
                    document.getElementById("staybtn").style.display = "none";
                    tallypoints();
                }
                else{
                    document.getElementById("winner").textContent = "Draw"
                    document.getElementById("staybtn").style.display = "none";
                    tallypoints();
                }
            }
        }

        if(scorecalc(dealercardno) == 21 && dealercardno.length == 2){
            if(dealercardno[0] == 'A' && dealercardno[1] == 'A'){
                if(playercardno[0] != 'A' || playercardno[1] != 'A'){
                    document.getElementById("winner").textContent = "Dealer Ban Ban"
                    document.getElementById("staybtn").style.display = "none";
                    tallypoints();
                }
                else{
                    document.getElementById("winner").textContent = "Draw"
                    document.getElementById("staybtn").style.display = "none";
                    tallypoints();
                }
            }

            else{
                if(playercardno[0] != 'A' && playercardno[1] != 'A' && scorecalc(playercardno) != 21){
                    document.getElementById("winner").textContent = "Dealer Ban Luck"
                    document.getElementById("staybtn").style.display = "none";
                    tallypoints();
                }
                else{
                    document.getElementById("winner").textContent = "Draw"
                    document.getElementById("staybtn").style.display = "none";
                    tallypoints();
                }
            }
        }
    }
}

function checkwin(){
    if(scorecalc(playercardno) <= 21 && scorecalc(dealercardno) <= 21){
        if(scorecalc(dealercardno)>scorecalc(playercardno)){
            document.getElementById("winner").textContent = "Dealer Wins";
        }
        else if (scorecalc(dealercardno)<scorecalc(playercardno)){
            document.getElementById("winner").textContent = "Player Wins";
        }
        else{
            document.getElementById("winner").textContent = "Draw";
        }
    }

    else if(scorecalc(playercardno) > 21 && scorecalc(dealercardno) <= 21){
        document.getElementById("winner").textContent = "Dealer Wins";
    }
    
    else if(scorecalc(playercardno) <= 21 && scorecalc(dealercardno) > 21){
        document.getElementById("winner").textContent = "Player Wins";
    }

    else{
        document.getElementById("winner").textContent = "Draw";
    }

    
}

function hit(){
    if (scorecalc(playercardno) < 21 && playercardno.length<5 && document.getElementById("winner").textContent==""){
        let a = Math.floor(Math.random() * nolist.length);

        let newlist = ["Diamonds","Clubs","Hearts","Spades"];
    
        for (i=0;i<playercardno.length;i++){
            if(playercardno[i]==nolist[a]){
                newlist.splice((newlist.indexOf(playercardsuit[i])),1);
            }
        }

        let b = Math.floor(Math.random() * newlist.length);

        playercardno = playercardno.concat(nolist[a]);
        playercardsuit = playercardsuit.concat(newlist[b]);

        document.getElementById("playerhand").innerHTML += " / " + playercardno[playercardno.length -1] + "- " + playercardsuit[playercardno.length -1];

        document.getElementById("playerscore").textContent = scorecalc(playercardno);

        if(scorecalc(playercardno)<=21 && playercardno.length == 5){
            document.getElementById("winner").textContent = "Wulong";
            document.getElementById("staybtn").style.display = "none";
            tallypoints();
        }

    }
}

function tallypoints(){
    if(document.getElementById("winner").textContent == "Player Wins"){
        document.getElementById("playerpoints").innerHTML = parseInt(document.getElementById("playerpoints").innerHTML) + parseInt(betamt);
        document.getElementById("dealerpoints").innerHTML = parseInt(document.getElementById("dealerpoints").innerHTML) - parseInt(betamt);
    }

    else if(document.getElementById("winner").textContent == "Dealer Wins"){
        document.getElementById("dealerpoints").innerHTML = parseInt(document.getElementById("dealerpoints").innerHTML) + parseInt(betamt);
        document.getElementById("playerpoints").innerHTML = parseInt(document.getElementById("playerpoints").innerHTML) - parseInt(betamt);
    }

    else if(document.getElementById("winner").textContent == "Wulong" || document.getElementById("winner").textContent == "Ban Luck"){
        document.getElementById("dealerpoints").innerHTML = parseInt(document.getElementById("dealerpoints").innerHTML) - (2 * parseInt(betamt));
        document.getElementById("playerpoints").innerHTML = parseInt(document.getElementById("playerpoints").innerHTML) + (2 * parseInt(betamt));
    }

    else if(document.getElementById("winner").textContent == "Ban Ban"){
        document.getElementById("dealerpoints").innerHTML = parseInt(document.getElementById("dealerpoints").innerHTML) - (3 * parseInt(betamt));
        document.getElementById("playerpoints").innerHTML = parseInt(document.getElementById("playerpoints").innerHTML) + (3 * parseInt(betamt));
    }

    else if(document.getElementById("winner").textContent == "Dealer Ban Luck" || document.getElementById("winner").textContent == "Dealer Wulong"){
        document.getElementById("dealerpoints").innerHTML = parseInt(document.getElementById("dealerpoints").innerHTML) + (2 * parseInt(betamt));
        document.getElementById("playerpoints").innerHTML = parseInt(document.getElementById("playerpoints").innerHTML) - (2 * parseInt(betamt));
    }

    else if(document.getElementById("winner").textContent == "Dealer Ban Ban"){
        document.getElementById("dealerpoints").innerHTML = parseInt(document.getElementById("dealerpoints").innerHTML) + (3 * parseInt(betamt));
        document.getElementById("playerpoints").innerHTML = parseInt(document.getElementById("playerpoints").innerHTML) - (3 * parseInt(betamt));
    }

    document.getElementById("startbtn").style.display = "inline";
    document.getElementById("dealerhand").innerHTML = ""
    for(counter =0; counter<dealercardno.length; counter++){
        document.getElementById("dealerhand").innerHTML += (dealercardno[counter] + "- " + dealercardsuit[counter] + " / ")
    }
    document.getElementById("dealerscore").innerHTML = scorecalc(dealercardno);
}

function bothit(){
    while (scorecalc(dealercardno) < 17 && dealercardno.length<5){
        let a = Math.floor(Math.random() * nolist.length);

        let newlist = ["Diamonds","Clubs","Hearts","Spades"];
    
        for (i=0;i<dealercardno.length;i++){
            if(dealercardno[i]==nolist[a]){
                newlist.splice((newlist.indexOf(dealercardsuit[i])),1);
            }
        }

        let b = Math.floor(Math.random() * newlist.length);

        dealercardno = dealercardno.concat(nolist[a]);
        dealercardsuit = dealercardsuit.concat(newlist[b]);

        document.getElementById("dealerhand").innerHTML += " / " + dealercardno[dealercardno.length -1] + "- " + dealercardsuit[dealercardno.length -1];

        document.getElementById("dealerscore").textContent = scorecalc(dealercardno);
    }
    if(scorecalc(dealercardno) <= 21 && dealercardno.length == 5){
        document.getElementById("winner").textContent = "Dealer Wulong";
        document.getElementById("staybtn").style.display = "none";
        tallypoints();
    }
    else{
        checkwin();
        tallypoints();
        document.getElementById("staybtn").style.display = "none";
    }
}

function buyin(a){
    document.getElementById("playerpoints").innerHTML = parseInt(document.getElementById("playerpoints").innerHTML) + a;
}
