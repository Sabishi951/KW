class KwsCharactersManager {
    constructor() {
        console.log("KWS: new characters manager...");
        this.characters = [];
        this.currentCharacterId = 0;
        this.currentIndex = 0;
    }
    setCurrentCharacterId(charId) {
        console.log("KWS: characters manager, set current charId = %s", charId);
        this.currentCharacterId = charId;
        this.currentIndex = this.characters.findIndex((value, index, array) => {
            return value == charId;
        });
    }
    getNextCharId() {
        if (this.characters.length == 1) {
            console.log("KWS: next charID is this charID, only one char");
            return this.currentCharacterId; 
        }

        var returnCharId;

        if (this.currentIndex == this.characters.length - 1) {
            returnCharId = this.characters[0];
        } else {
            returnCharId = this.characters[this.currentIndex + 1];
        }

        this.setCurrentCharacterId(returnCharId);

        console.log("KWS: get next charID = %s", returnCharId);
        return returnCharId;
    }
    getPreviousCharId() {
        if (this.characters.length == 1) {
            console.log("KWS: previous charID is this charID, only one char");
            return this.currentCharacterId;
        }

        var returnCharId;

        if (this.currentIndex == 0) {
            returnCharId = this.characters[this.characters.length - 1];
        } else {
            returnCharId = this.characters[this.currentIndex - 1];
        }

        this.setCurrentCharacterId(returnCharId);
        
        console.log("KWS: get previous charID = %s", returnCharId);
        return returnCharId;
    }
}

function getCharacters() {
    var allCharacters = [...$("li[data-option=select_char]")];
    if (allCharacters.length == 0) {
        console.log("KWS: no characters list detected, try in 200ms...");
        setTimeout(getCharacters, 200);
    } else {
        console.log("KWS: characters list detected, saving...");
        var kwsCharactersManager = new KwsCharactersManager();
        allCharacters.forEach((element, index, array) => {
            kwsCharactersManager.characters.push(element.getAttribute("data-char_id"));
        });
        kwsLocalCharacters = kwsCharactersManager;
    }
}

var kwsLocalCharacters = undefined;
getCharacters();