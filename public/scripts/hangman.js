

let listofwords = []
let typelist1 = []
let typelist2 = []

const gen1 = ["Bulbasaur","Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch’d", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"]
const gen2 = ["Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi"]
const gen3 = ["Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys"]
const gen1t1 = ['Grass','Grass', 'Grass', 'Fire', 'Fire', 'Fire', 'Water', 'Water', 'Water', 'Bug', 'Bug', 'Bug', 'Bug', 'Bug', 'Bug', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Normal', 'Poison', 'Poison', 'Electric', 'Electric', 'Ground', 'Ground', 'Poison', 'Poison', 'Poison', 'Poison', 'Poison', 'Poison', 'Fairy[1]', 'Fairy[2]', 'Fire', 'Fire', 'Normal', 'Normal', 'Poison', 'Poison', 'Grass', 'Grass', 'Grass', 'Bug', 'Bug', 'Bug', 'Bug', 'Ground', 'Ground', 'Normal', 'Normal', 'Water', 'Water', 'Fighting', 'Fighting', 'Fire', 'Fire', 'Water', 'Water', 'Water', 'Psychic', 'Psychic', 'Psychic', 'Fighting', 'Fighting', 'Fighting', 'Grass', 'Grass', 'Grass', 'Water', 'Water', 'Rock', 'Rock', 'Rock', 'Fire', 'Fire', 'Water', 'Water', 'Electric', 'Electric', 'Normal', 'Normal', 'Normal', 'Water', 'Water', 'Poison', 'Poison', 'Water', 'Water', 'Ghost', 'Ghost', 'Ghost', 'Rock', 'Psychic', 'Psychic', 'Water', 'Water', 'Electric', 'Electric', 'Grass', 'Grass', 'Ground', 'Ground', 'Fighting', 'Fighting', 'Normal', 'Poison', 'Poison', 'Ground', 'Ground', 'Normal', 'Grass', 'Normal', 'Water', 'Water', 'Water', 'Water', 'Water', 'Water', 'Psychic', 'Bug', 'Ice', 'Electric', 'Fire', 'Bug', 'Normal', 'Water', 'Water', 'Water', 'Normal', 'Normal', 'Water', 'Electric', 'Fire', 'Normal', 'Rock', 'Rock', 'Rock', 'Rock', 'Rock', 'Normal', 'Ice', 'Electric', 'Fire', 'Dragon', 'Dragon', 'Dragon', 'Psychic', 'Psychic']
const gen1t2 = ['Poison', 'Poison', 'Poison', 'None', 'None', 'Flying', 'None', 'None', 'None', 'None', 'None', 'Flying', 'Poison', 'Poison', 'Poison', 'Flying', 'Flying', 'Flying', 'None', 'None', 'Flying', 'Flying', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'Ground', 'None', 'None', 'Ground', 'None', 'None', 'None', 'None', 'Fairy[3]', 'Fairy[4]', 'Flying', 'Flying', 'Poison', 'Poison', 'Poison', 'Grass', 'Grass', 'Poison', 'Poison', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'Fighting', 'None', 'None', 'None', 'None', 'None', 'None', 'Poison', 'Poison', 'Poison', 'Poison', 'Poison', 'Ground', 'Ground', 'Ground', 'None', 'None', 'Psychic', 'Psychic', 'Steel[5]', 'Steel[6]', 'Flying', 'Flying', 'Flying', 'None', 'Ice', 'None', 'None', 'None', 'Ice', 'Poison', 'Poison', 'Poison', 'Ground', 'None', 'None', 'None', 'None', 'None', 'None', 'Psychic', 'Psychic', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'Rock', 'Rock', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'Psychic', 'Fairy[7]', 'Flying', 'Psychic', 'None', 'None', 'None', 'None', 'None', 'Flying', 'Ice', 'None', 'None', 'None', 'None', 'None', 'None', 'Water', 'Water', 'Water', 'Water', 'Flying', 'None', 'Flying', 'Flying', 'Flying', 'None', 'None', 'Flying', 'None', 'None']
const gen2t1 = ['Grass','Grass', 'Grass', 'Fire', 'Fire', 'Fire', 'Water', 'Water', 'Water', 'Normal', 'Normal', 'Normal', 'Normal', 'Bug', 'Bug', 'Bug', 'Bug', 'Poison', 'Water', 'Water', 'Electric', 'Fairy[8]', 'Normal', 'Fairy[10]', 'Fairy[11]', 'Psychic', 'Psychic', 'Electric', 'Electric', 'Electric', 'Grass', 'Water', 'Water', 'Rock', 'Water', 'Grass', 'Grass', 'Grass', 'Normal', 'Grass', 'Grass', 'Bug', 'Water', 'Water', 'Psychic', 'Dark', 'Dark', 'Water', 'Ghost', 'Psychic', 'Psychic', 'Normal', 'Bug', 'Bug', 'Normal', 'Ground', 'Steel', 'Fairy[14]', 'Fairy[15]', 'Water', 'Bug', 'Bug', 'Bug', 'Dark', 'Normal', 'Normal', 'Fire', 'Fire', 'Ice', 'Ice', 'Water', 'Water', 'Water', 'Ice', 'Water', 'Steel', 'Dark', 'Dark', 'Water', 'Ground', 'Ground', 'Normal', 'Normal', 'Normal', 'Fighting', 'Fighting', 'Ice', 'Electric', 'Fire', 'Normal', 'Normal', 'Electric', 'Fire', 'Water', 'Rock', 'Rock', 'Rock', 'Psychic', 'Fire', 'Psychic']
const gen2t2 = ['None','None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'Flying', 'Flying', 'Flying', 'Flying', 'Poison', 'Poison', 'Flying', 'Electric', 'Electric', 'None', 'None', 'Fairy[9]', 'None', 'Flying', 'Flying', 'Flying', 'None', 'None', 'None', 'None', 'Fairy[12]', 'Fairy[13]', 'None', 'None', 'Flying', 'Flying', 'Flying', 'None', 'None', 'None', 'Flying', 'Ground', 'Ground', 'None', 'None', 'Flying', 'Psychic', 'None', 'None', 'None', 'Psychic', 'None', 'Steel', 'None', 'Flying', 'Ground', 'None', 'None', 'Poison', 'Steel', 'Rock', 'Fighting', 'Ice', 'None', 'None', 'None', 'Rock', 'Ground', 'Ground', 'Rock', 'None', 'None', 'Flying', 'Flying', 'Flying', 'Fire', 'Fire', 'Dragon', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'Psychic', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'Ground', 'Ground', 'Dark', 'Flying', 'Flying', 'Grass']
const gen3t1 = ['Grass', 'Grass', 'Grass', 'Fire', 'Fire', 'Fire', 'Water', 'Water', 'Water', 'Dark', 'Dark', 'Normal', 'Normal', 'Bug', 'Bug', 'Bug', 'Bug', 'Bug', 'Water', 'Water', 'Water', 'Grass', 'Grass', 'Grass', 'Normal', 'Normal', 'Water', 'Water', 'Psychic', 'Psychic', 'Psychic', 'Bug', 'Bug', 'Grass', 'Grass', 'Normal', 'Normal', 'Normal', 'Bug', 'Bug', 'Bug', 'Normal', 'Normal', 'Normal', 'Fighting', 'Fighting', 'Normal', 'Rock', 'Normal', 'Normal', 'Dark', 'Steel', 'Steel', 'Steel', 'Steel', 'Fighting', 'Fighting', 'Electric', 'Electric', 'Electric', 'Electric', 'Bug', 'Bug', 'Grass', 'Poison', 'Poison', 'Water', 'Water', 'Water', 'Water', 'Fire', 'Fire', 'Fire', 'Psychic', 'Psychic', 'Normal', 'Ground', 'Ground', 'Ground', 'Grass', 'Grass', 'Normal', 'Dragon', 'Normal', 'Poison', 'Rock', 'Rock', 'Water', 'Water', 'Water', 'Water', 'Ground', 'Ground', 'Rock', 'Rock', 'Rock', 'Rock', 'Water', 'Water', 'Normal', 'Normal', 'Ghost', 'Ghost', 'Ghost', 'Ghost', 'Grass', 'Psychic', 'Dark', 'Psychic', 'Ice', 'Ice', 'Ice', 'Ice', 'Ice', 'Water', 'Water', 'Water', 'Water', 'Water', 'Dragon', 'Dragon', 'Dragon', 'Steel', 'Steel', 'Steel', 'Rock', 'Ice', 'Steel', 'Dragon', 'Dragon', 'Water', 'Ground', 'Dragon', 'Steel', 'Psychic']
const gen3t2 = ['None','None', 'None', 'None', 'Fighting', 'Fighting', 'None', 'Ground', 'Ground', 'None', 'None', 'None', 'None', 'None', 'None', 'Flying', 'None', 'Poison', 'Grass', 'Grass', 'Grass', 'None', 'Dark', 'Dark', 'Flying', 'Flying', 'Flying', 'Flying', 'Fairy[16]', 'Fairy[17]', 'Fairy[18]', 'Water', 'Flying', 'None', 'Fighting', 'None', 'None', 'None', 'Ground', 'Flying', 'Ghost', 'None', 'None', 'None', 'None', 'None', 'Fairy[19]', 'None', 'None', 'None', 'Ghost', 'Fairy[20]', 'Rock', 'Rock', 'Rock', 'Psychic', 'Psychic', 'None', 'None', 'None', 'None', 'None', 'None', 'Poison', 'None', 'None', 'Dark', 'Dark', 'None', 'None', 'Ground', 'Ground', 'None', 'None', 'None', 'None', 'None', 'Dragon', 'Dragon', 'None', 'Dark', 'Flying', 'Flying', 'None', 'None', 'Psychic', 'Psychic', 'Ground', 'Ground', 'None', 'Dark', 'Psychic', 'Psychic', 'Grass', 'Grass', 'Bug', 'Bug', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'Flying', 'None', 'None', 'None', 'None', 'None', 'Water', 'Water', 'Water', 'None', 'None', 'None', 'Rock', 'None', 'None', 'None', 'Flying', 'Psychic', 'Psychic', 'Psychic', 'None', 'None', 'None', 'Psychic', 'Psychic', 'None', 'None', 'Flying', 'Psychic', 'None']

var attempts = 8;
var score = 0;
let random_word = "";

const btn1 = document.getElementById("gen1");
const btn2 = document.getElementById("gen2");
const btn3 = document.getElementById("gen3");

function btncolor(a){
    const btn = document.getElementById(a)
    if (!(btn.style.borderWidth=='3px')){
        btn.style.borderStyle = 'solid'
        btn.style.borderWidth = '3px'
        btn.style.opacity = '1'
    }
    else{
        btn.style.borderStyle = 'solid'
        btn.style.borderWidth = '1px'
        btn.style.opacity = '0.5'
    }
  

}

function formlist(){
    let a =[];
    let b =[];
    let c =[];
    if (document.getElementById("gen1").style.borderWidth == '3px'){
        a = a.concat(gen1);
        b = b.concat(gen1t1);
        c = c.concat(gen1t2);
    }
    if (document.getElementById("gen2").style.borderWidth == '3px'){
        a = a.concat(gen2);
        b = b.concat(gen2t1);
        c = c.concat(gen2t2);

    }
    if (document.getElementById("gen3").style.borderWidth == '3px'){
        a = a.concat(gen3);
        b = b.concat(gen3t1);
        c = c.concat(gen3t2);
    }
    return [a,b,c];
}


function randword(){
    attempts = 8;
    [listofwords, typelist1, typelist2] = formlist(listofwords, typelist1,typelist2);
    if (listofwords.length !=0){
        let random_no = Math.floor(Math.random() * listofwords.length);
        random_word = (listofwords[random_no]).toLowerCase();
        document.getElementById("randword").textContent = "_ ".repeat(random_word.length);
        document.getElementById("notries").textContent = attempts;
        document.getElementById("noguesses").textContent = score;
        document.getElementById("history").textContent = "Letters tried: ";
        document.getElementById("hint").textContent =  typelist1[random_no] + "/" + typelist2[random_no];
        document.getElementById("newwordkey").style.display = "none"
        console.log(random_word)
    }
    else{
        document.getElementById("selection").textContent = "Tick at least one box";
    }

    
    
}
function enterguess(){
    if (listofwords.length != 0){
        let blanks = document.getElementById("randword").textContent;
        let userguess = document.getElementById("user_guess");
        if (attempts > 0 && (userguess.value.length != 1 || !userguess.value.match(/[a-z]/i))){
            userguess.value = "";
            document.getElementById("errormsg").textContent = "Not an alphabet!";
            attempts -= 1;
            document.getElementById("notries").textContent = attempts;
        }

        else{
            let new_blank = "";
            if(random_word.includes(userguess.value)){
                for(i = 0;i<random_word.length;i++){
                    if(userguess.value != random_word[i]){
                        new_blank += ((blanks[(i * 2)]) + " ");
                    }
                    else{
                        new_blank += (userguess.value + " ");
                    }
                }

                blanks= new_blank;
                document.getElementById("randword").textContent = blanks;
                document.getElementById("user_guess").value = "";
                document.getElementById("errormsg").textContent = "Nice";
            }

            else{
                historylist = document.getElementById("history");
                attempts -= 1;
                historylist.textContent += (userguess.value + ', ');
                document.getElementById("notries").textContent = attempts;
                document.getElementById("user_guess").value = "";
                document.getElementById("errormsg").textContent = "Not in word";
            }

            
    
        }

        if(attempts == 0){
            score -= 1;
            document.getElementById("noguesses").textContent = score;  
            document.getElementById("errormsg").textContent = "The word was " + random_word;
            randword();
        }
        if(!(blanks.includes("_"))){
            score += 1;
            randword();
        }
    }
    else{
        document.getElementById("selection").textContent = "Tick at least one box";
    }
    
}

