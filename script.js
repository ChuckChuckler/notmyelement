//basic
let elmReal;
let currentscore = 0;
let highscore;
let sprite = document.getElementById("sprite");
let typeIndex = 0;
let text = "That's Not My Element!";
let arrIndex = 0;
let arrOfDivs = ["1", "2", "3", "4"];

//main.html

if(localStorage.getItem("highscore") == null){
    localStorage.setItem("highscore", 0);
}

highscore = parseInt(localStorage.getItem("highscore"));
document.getElementById("highscore").innerText = `High Score: ${highscore}`;

function type(){
    if(typeIndex < text.length+1){
        document.getElementById("docTitle").innerText = text.substring(0, typeIndex);
        typeIndex++;
        setTimeout(type, 50);
    }
}

//rules.html

function ruleSetup(){
    document.getElementById("1").style.display = "block";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("prevBtn").style.display = "none";
}

function nextDiv(){
    arrIndex += 1;
    document.getElementById("prevBtn").style.display = "block";

    for(let i = 0; i <= 3; i++){
        if(i == arrIndex){
            document.getElementById(arrOfDivs[i]).style.display = "block";
        }else{
            document.getElementById(arrOfDivs[i]).style.display = "none";
        }
    }

    if(arrIndex == 3){
        document.getElementById("nextBtn").style.display = "none";
    }
}

function prevDiv(){
    arrIndex -= 1;
    document.getElementById("nextBtn").style.display = "block";

    for(let i = 0; i <= 3; i++){
        if(i == arrIndex){
            document.getElementById(arrOfDivs[i]).style.display = "block";
        }else{
            document.getElementById(arrOfDivs[i]).style.display = "none";
        }
    }

    if(arrIndex == 0){
        document.getElementById("prevBtn").style.display = "none";
    }
}


//game.html

let arrOfImgs = ["pinkIcon.png", "purpleIcon.png", "blueIcon.png", "greenIcon.png"];

let elmsDict = {
    //"Element Name":["Element number", "number of valence electrons", "family", "metal/nonmetal/metalloid", "charge", "ground energy level", "typically loses/gains electrons", "electron configuration (shorthand)"]
    "Hydrogen":["1", "1", "Special Case", "Nonmetal", "+1", "1", "Loses", "1s¹"],
    "Helium":["2", "2", "Noble Gas", "Nonmetal", "0", "1", "Inert", "1s²"],
    "Lithium":["3", "1", "Alkali Metal", "Metal", "+1", "2", "Loses", "[He]2s¹"],
    "Beryllium":["4", "2", "Alkaline Earth Metal", "Metal", "+2", "2", "Loses", "[He]2s²"],
    "Boron":["5", "3", "Boron Family Member", "Metalloid", "+3", "2", "Loses", "[He]2s²2p¹"],
    "Carbon":["6", "4", "Carbon Family Member", "Nonmetal", "+4/-4", "2", "Either", "[He]2s²2p²"],
    "Nitrogen":["7", "5", "Nitrogen Family Member", "Nonmetal", "-3", "2", "Gains", "[He]2s²2p³"],
    "Oxygen":["8", "6", "Oxygen Family Member", "Nonmetal", "-2", "2", "Gains", "[He]2s²2p⁴"],
    "Fluorine":["9", "7", "Halogen", "Nonmetal", "-1", "2", "Gains", "[He]2s²2p⁵"],
    "Neon":["10", "8", "Noble Gas", "Nonmetal", "0", "2", "Inert", "[He]2s²2p⁶"],
    "Sodium":["11", "1", "Alkali Metal", "Metal", "+1", "3", "Loses", "[Ne]3s¹"],
    "Magnesium":["12", "2", "Alkaline Earth Metal", "Metal", "+2", "3", "Loses", "[Ne]3s²"],
    "Aluminum":["13", "3", "Boron Family Member", "Metal", "+3", "3", "Loses", "[Ne]3s²3p¹"],
    "Silicon":["14", "4", "Carbon Family Member", "Metalloid", "+4/-4", "3", "Either", "[Ne]3s²3p²"],
    "Phosphorus":["15", "5", "Nitrogen Family Member", "Nonmetal", "-3", "3", "Gains", "[Ne]3s²3p³"],
    "Sulfur":["16", "6", "Oxygen Family Member", "Nonmetal", "-2", "3", "Gains", "[Ne]3s²3p⁴"],
    "Chlorine":["17", "7", "Halogen", "Nonmetal", "-1", "3", "Gains", "[Ne]3s²3p⁵"],
    "Argon":["18", "8", "Noble Gas", "Nonmetal", "0", "3", "Inert", "[Ne]3s²3p⁶"],
    "Potassium":["19", "1", "Alkali Metal", "Metal", "+1", "4", "Loses", "[Ar]4s¹"],
    "Calcium":["20", "2", "Alkaline Earth Metal", "Metal", "+2", "4", "Loses", "[Ar]4s²"],
    "Scandium":["21", "Multivalent", "Transition Metal", "Metal", "Multivalent", "4", "Loses", "[Ar]4s²3d¹"],
    "Titanium":["22", "Multivalent", "Transition Metal", "Metal", "Multivalent", "4", "Loses", "[Ar]4s²3d²"],
    "Vanadium":["23", "Multivalent", "Transition Metal", "Metal", "Multivalent", "4", "Loses", "[Ar]4s²3d³"],
    "Chromium":["24", "Multivalent", "Transition Metal", "Metal", "Multivalent", "4", "Loses", "[Ar]4s²3d⁴"],
    "Manganese":["25", "Multivalent", "Transition Metal", "Metal", "Multivalent", "4", "Loses", "[Ar]4s²3d⁵"],
    "Iron":["26", "Multivalent", "Transition Metal", "Metal", "Multivalent", "4", "Loses", "[Ar]4s²3d⁶"],
    "Cobalt":["27", "Multivalent", "Transition Metal", "Metal", "Multivalent", "4", "Loses", "[Ar]4s²3d⁷"],
    "Nickel":["28", "Multivalent", "Transition Metal", "Metal", "Multivalent", "4", "Loses", "[Ar]4s²3d⁸"],
    "Copper":["29", "Multivalent", "Transition Metal", "Metal", "Multivalent", "4", "Loses", "[Ar]4s²3d⁹"],
    "Zinc":["30", "2", "Transition Metal", "Metal", "+2", "4", "Loses", "[Ar]4s²3d¹⁰"],
    "Gallium":["31", "3", "Boron Family Member", "Metal", "+3", "4", "Loses", "[Ar]4s²3d¹⁰4p¹"],
    "Germanium":["32", "4", "Carbon Family Member", "Metalloid", "+4", "4", "Either", "[Ar]4s²3d¹⁰4p²"],
    "Arsenic":["33", "5", "Nitrogen Family Member", "Metalloid", "-3", "4", "Gains", "[Ar]4s²3d¹⁰4p³"],
    "Selenium":["34", "6", "Oxygen Family Member", "Nonmetal", "-2", "4", "Gains", "[Ar]4s²3d¹⁰4p⁴"],
    "Bromine":["35", "7", "Halogen", "Nonmetal", "-1", "4", "Gains", "[Ar]4s²3d¹⁰4p⁵"],
    "Krypton":["36", "8", "Noble Gas", "Nonmetal", "0", "4", "Inert", "[Ar]4s²3d¹⁰4p⁶"],
    "Rubidium":["37", "1", "Alkali Metal", "Metal", "+1", "5", "Loses", "[Kr]5s¹"],
    "Strontium":["38", "2", "Alkaline Earth Metal", "Metal", "+2", "5", "Loses", "[Kr]5s²"],
    "Yttrium":["39", "Multivalent", "Transition Metal", "Metal", "Multivalent", "5", "Loses", "[Kr]5s²4d¹"],
    "Zirconium":["40", "Multivalent", "Transition Metal", "Metal", "Multivalent", "5", "Loses", "[Kr]5s²4d²"],
    "Niobium":["41", "Multivalent", "Transition Metal", "Metal", "Multivalent", "5", "Loses", "[Kr]5s²4d³"],
    "Molybdenum":["42", "Multivalent", "Transition Metal", "Metal", "Multivalent", "5", "Loses", "[Kr]5s²4d⁴"],
    "Technetium":["43", "Multivalent", "Transition Metal", "Metal", "Multivalent", "5", "Loses", "[Kr]5s²4d⁵"],
    "Ruthenium":["44", "Multivalent", "Transition Metal", "Metal", "Multivalent", "5", "Loses", "[Kr]5s²4d⁶"],
    "Rhodium":["45", "Multivalent", "Transition Metal", "Metal", "Multivalent", "5", "Loses", "[Kr]5s²4d⁷"],
    "Palladium":["46", "Multivalent", "Transition Metal", "Metal", "Multivalent", "5", "Loses", "[Kr]5s²4d⁸"],
    "Silver":["47", "1", "Transition Metal", "Metal", "+1", "5", "Loses", "[Kr]5s²4d⁹"],
    "Cadmium": ["48", "Multivalent", "Transition Metal", "Metal", "Multivalent", "5", "Loses", "[Kr]5s²4d¹⁰"],
    "Indium": ["49", "3", "Boron Family Member", "Metal", "+3", "5", "Loses", "[Kr]5s²4d¹⁰5p¹"],
    "Antimony":["51", "5", "Nitrogen Family Member", "Metalloid", "-3", "5", "Gains", "[Kr]5s²4d¹⁰5p³"],
    "Tellurium":["52", "6", "Oxygen Family Member", "Metalloid", "-2", "5", "Gains", "[Kr]5s²4d¹⁰5p⁴"],
    "Iodine":["53", "7", "Halogen", "Nonmetal", "-1", "5", "Gains", "[Kr]5s²4d¹⁰5p⁵"],
    "Xenon":["54", "8", "Noble Gas", "Nonmetal", "0", "5", "Inert", "[Kr]5s²4d¹⁰5p⁶"],
    "Caesium":["55", "1", "Alkali Metal", "Metal", "+1", "6", "Loses", "[Xe]6s¹"],
    "Barium":["56", "2", "Alkaline Earth Metal", "Metal", "+2", "6", "Loses", "[Xe]6s²"],
    "Hafnium":["72", "Multivalent", "Transition Metal", "Metal", "Multivalent", "6", "Loses", "[Xe]6s²4f¹⁴5d²"],
    "Tantalum":["73", "Multivalent", "Transition Metal", "Metal", "Multivalent", "6", "Loses", "[Xe]6s²4f¹⁴5d³"],
    "Tungsten":["74", "Multivalent", "Transition Metal", "Metal", "Multivalent", "6", "Loses", "[Xe]6s²4f¹⁴5d⁴"],
    "Rhenium":["75", "Multivalent", "Transition Metal", "Metal", "Multivalent", "6", "Loses", "[Xe]6s²4f¹⁴5d⁵"],
    "Osmium":["76", "Multivalent", "Transition Metal", "Metal", "Multivalent", "6", "Loses", "[Xe]6s²4f¹⁴5d⁶"],
    "Iridium":["77", "Multivalent", "Transition Metal", "Metal", "Multivalent", "6", "Loses", "[Xe]6s²4f¹⁴5d⁷"],
    "Platnium":["78", "Multivalent", "Transition Metal", "Metal", "Multivalent", "6", "Loses", "[Xe]6s²4f¹⁴5d⁸"],
    "Gold":["79", "Multivalent", "Transition Metal", "Metal", "Multivalent", "6", "Loses", "[Xe]6s²4f¹⁴5d⁹"],
    "Mercury":["80", "Multivalent", "Transition Metal", "Metal", "Multivalent", "6", "Loses", "[Xe]6s²4f¹⁴5d¹⁰"],
    "Bismuth":["83", "5", "Nitrogen Family Member", "Nonmetal", "-3", "6", "Gains", "[Xe]6s²4f¹⁴5d¹⁰6p³"],
    "Polonium":["84", "6", "Oxygen Family Member", "Nonmetal", "-2", "6", "Gains", "[Xe]6s²4f¹⁴5d¹⁰6p⁴"],
    "Astatine":["85", "7", "Halogen", "Nonmetal", "-1", "6", "Gains", "[Xe]6s²4f¹⁴5d¹⁰6p⁵"],
    "Radon":["86", "8", "Noble Gas", "Nonmetal", "0", "6", "Inert", "[Xe]6s²4f¹⁴5d¹⁰6p⁶"],
    "Francium":["87", "1", "Alkali Metal", "Metal", "+1", "7", "Loses", "[Rn]7s¹"],
    "Radium": ["88", "2", "Alkaline Earth Metal", "Metal", "+2", "7", "Loses", "[Rn]7s²"],
    "Rutherfordium": ["104", "Multivalent", "Transition Metal", "Metal", "Multivalent", "7", "Loses", "[Rn]7s²5f¹⁴6d²"],
    "Dubnium": ["105", "Multivalent", "Transition Metal", "Metal", "Multivalent", "7", "Loses", "[Rn]7s²5f¹⁴6d³"],
    "Seaborgium":["106", "Multivalent", "Transition Metal", "Metal", "Multivalent", "7", "Loses", "[Rn]7s²5f¹⁴6d⁴"],
    "Bohrium":["107", "Multivalent", "Transition Metal", "Metal", "Multivalent", "7", "Loses", "[Rn]7s²5f¹⁴6d⁵"],
    "Hassium":["108", "Multivalent", "Transition Metal", "Metal", "Multivalent", "7", "Loses", "[Rn]7s²5f¹⁴6d⁶"]
}   

function rulesRdrct(){
    window.location.href = "rules.html";
}

function gameRdrct(){
    window.location.href = "game.html";
}

let replaceIndex;
let replaceElm;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function gameGen(){
    let imageChosen = randint(4);
    document.body.style.backgroundColor = "rgb(116, 95, 95)";
    document.getElementById("gameHolder").style.display = "block";
    document.getElementById("gameOver").style.display = "none";
    sprite.src = "images/sprite.png";
    sprite.style.animationName = "fromLeft";
    sprite.style.animationDuration = "2s";
    sprite.style.animationPlayState = "running";
    sprite.style.left = "50%";
    sprite.style.transform = "translateX(-50%)";
    document.getElementById("idPhoto").src = `images/${arrOfImgs[imageChosen]}`;
    sleep(2000).then(() => { 
        openSheet();
        let elms = Object.keys(elmsDict);
        chosenElm = elms[randint(elms.length)];
        elmInfo = [...elmsDict[chosenElm]];
    
        let elementName = document.getElementById("elementName");
        let atomicNum = document.getElementById("atomicNum");
        let valElectrons = document.getElementById("valElectrons");
        let family = document.getElementById("family");
        let metalStatus = document.getElementById("metal");
        let charge = document.getElementById("charge");
        let energyLevel = document.getElementById("energyLevel");
        let gainsLoses = document.getElementById("gainsLoses");
        let electronConfig = document.getElementById("electronConfig");
    
        elementName.innerText = chosenElm;
    
        let displayArr = [atomicNum, valElectrons, family, metalStatus, charge, energyLevel, gainsLoses, electronConfig];
        let status;
        
        if(elms.length < 2){
            status = 0;
        }else{
            status = randint(3);
        }
    
        if(status < 2){
            if(elms.length == 0){
                window.location.href = "win.html";
                localStorage.setItem("highscore", `${highscore} ★`);
            }else{
                elmReal = true;
                delete elmsDict[chosenElm];
            }
        }else{
            replaceIndex = randint(8);
            replaceElm = elms[randint(elms.length)];
            while(elmsDict[replaceElm][replaceIndex] == elmInfo[replaceIndex]){
                replaceIndex = randint(8);
            }
    
            elmInfo[replaceIndex] = elmsDict[replaceElm][replaceIndex];
    
            elmReal = false;
        }
    
        for(let i = 0; i < 8; i++){
            displayArr[i].innerText = elmInfo[i];
        }
    });
}

function randint(int){
    return Math.floor(Math.random()*int);
}

function entry(){
    sprite.src = "images/spriteAccept.png";
    //elmReal should be true
    if(elmReal == true){
        document.getElementById("sheet").style.visibility = "hidden";
        sprite.style.animationName = "toRight";
        sprite.style.animationDuration = "2s";
        sprite.style.animationPlayState = "running";
        sprite.style.left = "120%";
        sprite.style.transform = "translateX(-120%)";
        sleep(2000).then(() => { 
            currentscore+=1;
            document.getElementById("currentscore").innerText = `Current Score: ${currentscore}`;
            if(currentscore > highscore){
                highscore+=1;
                localStorage.setItem("highscore", highscore);
                document.getElementById("highscore").innerText = `High Score: ${highscore}`;
            }
            gameGen();
        });
    }else{
        let messages = [
            `${chosenElm}'s atomic number is ${elmsDict[chosenElm][0]}, not ${elmsDict[replaceElm][0]}.`,
            `${chosenElm} has ${elmsDict[chosenElm][1].toLowerCase()} valence electron(s), not ${elmsDict[replaceElm][1]}.`,
            `${chosenElm} is a(n) ${elmsDict[chosenElm][2]}, not a(n) ${elmsDict[replaceElm][2]}.`,
            `${chosenElm} is a ${elmsDict[chosenElm][3]}, not a ${elmsDict[replaceElm][3]}.`,
            `${chosenElm} has a charge of ${elmsDict[chosenElm][4]}, not of ${elmsDict[replaceElm][4]}.`,
            `${chosenElm}'s ground state energy level is ${elmsDict[chosenElm][5]}, not ${elmsDict[replaceElm][5]}.`,
            `${chosenElm} ${(elmsDict[chosenElm][6]).toLowerCase()} electrons.`,
            `${chosenElm}'s shorthand electron configuration is ${elmsDict[chosenElm][7]}, not ${elmsDict[replaceElm][7]}.`
        ]

        if(elmsDict[chosenElm][6] == "Inert"){
            messages[6] = `${chosenElm} is inert.`;
        }

        if(elmsDict[replaceElm][1] == "Multivalent"){
            messages[1] = `${chosenElm} has ${elmsDict[chosenElm][1]} valence electrons. It is not multivalent.`;
        }

        if(elmsDict[chosenElm][4] == "Multivalent"){
            messages[4] = `${chosenElm} is Multivalent. It does not have a charge of ${elmsDict[replaceElm][4]}.`;
        }

        if(elmsDict[replaceElm][4] == "Multivalent"){
            messages[4]=  `${chosenElm} has a charge of ${elmsDict[chosenElm][4]}. It is not multivalent.`;
        }

        if(elmsDict[chosenElm][6] == "Either"){
            messages[6] = `${chosenElm} can both gain and lose electrons.`;
        }

        document.getElementById("sheet").style.visibility = "hidden";
        sprite.style.animationName = "toRight";
        sprite.style.animationDuration = "2s";
        sprite.style.animationPlayState = "running";
        sprite.style.left = "120%";
        sprite.style.transform = "translate(-120%)";
        sleep(2000).then(() => { 
            document.body.style.backgroundColor = "black";
            document.getElementById("gameHolder").style.display = "none";
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("playerErr").innerText = "You got killed by a disguised imposter element :(";
            document.getElementById("playerErrInfo").innerText = messages[replaceIndex];
            currentscore = 0;
            document.getElementById("currentscore").innerText = `Current Score: 0`;
        });
    }
}

function noEntry(){
    sprite.src = "images/spriteReject.png";
    if(elmReal == false){
        document.getElementById("sheet").style.visibility = "hidden";
        sprite.style.animationName = "toLeft";
        sprite.style.animationDuration = "2s";
        sprite.style.animationPlayState = "running";
        sprite.style.left = "-20%";
        sprite.style.transform = "translateX(20%)";
        sprite
        sleep(2000).then(() => { 
            currentscore+=1;
            document.getElementById("currentscore").innerText = `Current Score: ${currentscore}`;
            if(currentscore > highscore){
                highscore+=1;
                localStorage.setItem("highscore", highscore);
                document.getElementById("highscore").innerText = `High Score: ${highscore}`;
            }
            gameGen();
        });
    }else{
        document.getElementById("sheet").style.visibility = "hidden";
        sprite.style.animationName = "toLeft";
        sprite.style.animationDuration = "2s";
        sprite.style.animationPlayState = "running";
        sprite.style.left = "-20%";
        sprite.style.transform = "translateX(20%)";
        sleep(2000).then(() => { 
            document.body.style.backgroundColor = "black";
            document.getElementById("gameHolder").style.display = "none";
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("playerErr").innerText = "You got fired for accidentally reporting a poor innocent element :(";
            document.getElementById("playerErrInfo").innerText = `All of ${chosenElm}'s properties were correct!`;
            currentscore = 0;
            document.getElementById("currentscore").innerText = `Current Score: 0`;
        });
    }
}

function exitSheet(){
    document.getElementById("sheet").style.visibility = "hidden";
    document.getElementById("openSheet").style.visibility = "visible";
    document.getElementById("grant").style.visibility = "visible";
    document.getElementById("deny").style.visibility = "visible";
    document.getElementById("openPt").style.visibility = "visible";
}

function openSheet(){
    document.getElementById("sheet").style.visibility = "visible";
    document.getElementById("openSheet").style.visibility = "hidden";
    document.getElementById("grant").style.visibility = "hidden";
    document.getElementById("deny").style.visibility = "hidden";
    document.getElementById("openPt").style.visibility = "hidden";
}

function openPt(){
    document.getElementById("ptTable").style.visibility = "visible";
    document.getElementById("openPt").style.visibility = "hidden";
    document.getElementById("grant").style.visibility = "hidden";
    document.getElementById("deny").style.visibility = "hidden";
    document.getElementById("openSheet").style.visibility = "hidden";
}

function closePt(){
    document.getElementById("ptTable").style.visibility = "hidden";
    document.getElementById("openPt").style.visibility = "visible";
    document.getElementById("grant").style.visibility = "visible";
    document.getElementById("deny").style.visibility = "visible";
    document.getElementById("openSheet").style.visibility = "visible";
}