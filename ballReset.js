class ballReset {
    constructor() {
        this.synergy = 6;
        this.hasStarted = false;
        this.bonsCombinations = [];
        this.css = ` #ballResetPanel { position: absolute; top: 35px; right: 10px; z-index: 9999999; width: 445px; padding: 5px; background: #303131bd; border: solid #ffffff7a 1px; border-radius: 5px; display: none; user-select: none; } #ballResetPanel .controller { display: flex; flex-direction: column; align-items: stretch; margin-bottom: 2px; } #ballResetPanel .controller button { font-weight: bolder; border:solid black 1px; cursor: pointer; } #ballResetPanel .controller button.green { background: lime; color: black !important; } #ballResetPanel .controller button.red { background: red; color: black !important; } #ballResetPanel .controller button:first-child { border-bottom:none; background: #afd4f5; } #ballResetPanel .controller button:disabled { opacity: 1; background: gray; cursor: not-allowed; } #ballResetPanel .ballCombination { background: #dfdfdc5c; padding: 5px; margin-bottom: 2px; } #ballResetPanel .ballCombination .combinationID { text-align: center; background: black; color: white; font-weight: bolder; font-size: 16px; padding: 1px; margin-bottom: 2px; } #ballResetPanel .ballCombination select { margin-bottom: 2px; background: #ffffff99; border: solid #6f6f6f 1px; border-radius: 5px; color: black; } #ballResetPanel .ballCombination select:last-child { margin-bottom: 0px; } `;
        this.innerHTML = ` <div id="ballResetPanel"> <div class="controller"> <button class="addCombination">DODAJ NOWĄ KOMBINACJE</button> <button class="startSearching green">SZUKAJ</button> </div> <div class="combinations">${this.bonsCombination(1)}</div> </div> `;
        
        $("body").append(`<style>${this.css}</style>${this.innerHTML}`);
        $("body").on("click", "#ballResetPanel .addCombination", () => {
            let lastID = parseInt($(".ballCombination:last").attr("combination"));
            lastID++;
            $(".combinations").append(this.bonsCombination(lastID));
        });
        $("body").on("click", "#ballResetPanel .startSearching", () => {
            this.controller();
        });
        $("body").on("click", `button[data-option="ss_page"][data-page="reset"]`, () => {
            GAME.completeProgress = () => {
                var res = GAME.progress;
                switch (res.a) {
                    case 45:
                        if (res.ball) {
                            GAME.parseData(55, res);
                            if (this.hasStarted) {
                                this.search(res);
                            }
                        }
                        break;
                }
                delete GAME.progress;
            }
            if(document.querySelector("#ss_name") && document.querySelector("#ss_name").textContent.trim() != "Anielska Kula Energii"){
            $("#ballResetPanel").show();
        }
        });
        $("body").on("click", `button[data-option="ss_page"][data-page="upgrade"], #soulstone_interface .closeicon`, () => {
            if (this.hasStarted) {
                $("#ballResetPanel .startSearching").click();
            }
            $('.ss_stats tr').css("background", "transparent");
            $("#ballResetPanel").hide();
            $("#ss_page_reset").hide();
        });
    }
    controller() {
        if (this.hasStarted) {
            this.hasStarted = false;
            $(".startSearching").removeClass("red").addClass("green").html("SZUKAJ");
            $(".ballCombination select").prop("disabled", false);
            $(".addCombination").prop("disabled", false);
        } else {
            this.hasStarted = true;
            this.search();
            $(".startSearching").removeClass("green").addClass("red").html("STOP");
            $(".ballCombination select").prop("disabled", true);
            $(".addCombination").prop("disabled", true);
        }
    }
    search(res = false) {
        if (this.hasStarted) {
            this.bonsCombinations = this.prepareCombinations();
            if (res) {
                this.ballActualBons = this.prepareBallBons(res);
            } else {
                this.ballActualBons = [0]
            }
            if (!this.compare(this.ballActualBons, this.bonsCombinations)) {
                GAME.socket.emit('ga', {
                    a: 45,
                    type: 1,
                    bid: GAME.ball_id
                });
            } else {
                $(".startSearching").click();
            }
        }
    }
    compare(pattern, others) {
        const patternCounts = this.countOccurrences(pattern);
        for (let i = 0; i < others.length; i++) {
            const other = others[i];
            const otherCounts = this.countOccurrences(other);
            let isValid = true;
            for (const [num, count] of Object.entries(otherCounts)) {
                if (!patternCounts[num] || patternCounts[num] < count) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                return true;
            }
        }
        return false;
    }
    countOccurrences(array) {
        const counts = {};
        for (const num of array) {
            counts[num] = (counts[num] || 0) + 1;
        }
        return counts;
    }
    prepareBallBons(res) {
        let ball = res.ball;
        let bons = [];
        $('.ss_stats tr').css("background", "transparent");
        for (var s = 1; s <= 9; s++) {
            if (ball['stat' + s] && this.bonsCombinations.some(array => array.includes(ball['stat' + s]))) {
                bons.push(ball['stat' + s]);
                $('#stat' + s + '_bon').parent().css("background", "#80008075");
            }
        }
        return bons;
    }
    prepareCombinations() {
        let combinations = [];
        $(".ballCombination").each((index, element) => {
            let combination = [];
            $(element).find("select").each((idx, sel) => {
                const value = parseInt($(sel).val());
                if (value > 0) {
                    combination.push(value);
                }
            });
            if (combination.length > 0) {
                combinations.push(combination);
            }
        });
        return combinations;
    }
    bonsCombination(c) {
        let innerHTML = `<div class="ballCombination" combination="${c}"><div class="combinationID">Kombinacja #${c}</div>`;
        for (let i = 0; i < this.synergy; i++) {
            innerHTML += `${this.listOfBons(c)}`;
        }
        innerHTML += "</div>";
        return innerHTML;
    }
    listOfBons() {
        let innerHTML = ` <select> <option value="0">Brak</option> `;
        this.allBons().forEach((obiekt) => {
            innerHTML += `<option value="${obiekt.id}">${obiekt.bonus}</option>`;
        });
        innerHTML += `</select>`;
        return innerHTML;
    }
    allBons() {
        return [{
            id: 13,
            bonus: '% do obrażeń'
        }, {
            id: 14,
            bonus: '% do redukcji obrażeń'
        }, {
            id: 15,
            bonus: '% do efektywności treningu'
        }, {
            id: 16,
            bonus: '% do doświadczenia'
        }, {
            id: 17,
            bonus: '% do szansy na trafienie krytyczne'
        }, {
            id: 18,
            bonus: '% do redukcji szansy na otrzymanie trafienia krytycznego'
        }, {
            id: 51,
            bonus: '% do obrażeń od technik'
        }, {
            id: 52,
            bonus: '% redukcji obrażeń od technik'
        }, {
            id: 53,
            bonus: '% do szansy na moc z walk PvM'
        }, {
            id: 54,
            bonus: '% do ilości mocy z walk PvM'
        }, {
            id: 55,
            bonus: '% do szansy na zdobycie przedmiotu z walk PvM'
        }, {
            id: 56,
            bonus: 'minut(a) krótsze wyprawy'
        }, {
            id: 57,
            bonus: '% do szansy powodzenia wypraw'
        }, {
            id: 58,
            bonus: '% do szansy na ulepszenie przedmiotów'
        }, {
            id: 59,
            bonus: '% do szansy na połączenie przedmiotów'
        }, {
            id: 60,
            bonus: '% do obrażeń od trafień krytycznych'
        }, {
            id: 61,
            bonus: '% redukcji obrażeń od trafień krytycznych'
        }, {
            id: 62,
            bonus: '% do mocy za wygrane walki wojenne'
        }, {
            id: 63,
            bonus: '% do skuteczności podpaleń'
        }, {
            id: 64,
            bonus: '% do skuteczności krwawień'
        }, {
            id: 65,
            bonus: '% do odporności na podpalenia'
        }, {
            id: 66,
            bonus: '% do odporności na krwawienia'
        }, {
            id: 67,
            bonus: '% do szansy na zdobycie PSK'
        }, {
            id: 68,
            bonus: '% do punktów PvP za wygrane walki'
        }, {
            id: 69,
            bonus: '% do szansy na 3x więcej punktów PvP za wygrane walki'
        }, {
            id: 70,
            bonus: '% do szansy na 3x więcej doświadczenia za wygrane walki PvM'
        }, {
            id: 71,
            bonus: '% do mocy za skompletowanie SK'
        }, {
            id: 72,
            bonus: '% do mocy za skompletowanie PSK'
        }, {
            id: 73,
            bonus: 'minut(y) do czasu trwania błogosławieństw'
        }, {
            id: 74,
            bonus: '% do szansy na spotkanie legendarnych potworów'
        }, {
            id: 75,
            bonus: 'minut(y) krótszy cooldown między walkami PvP'
        }, {
            id: 76,
            bonus: '% zwiększenie własnej szybkości'
        }, {
            id: 77,
            bonus: '% obniżenie szybkości przeciwnika'
        }, {
            id: 78,
            bonus: '% do szansy na zdobycie Niebieskiego Senzu'
        }, {
            id: 79,
            bonus: '% mniejsze obrażenia od podpaleń'
        }, {
            id: 80,
            bonus: '% mniejsze obrażenia od krwawień'
        }, {
            id: 81,
            bonus: '% do szansy na zdobycie Scoutera'
        }, {
            id: 91,
            bonus: '% do wtajemniczenia'
        }, {
            id: 99,
            bonus: '% większy limit dzienny Niebieskich Senzu'
        }, {
            id: 139,
            bonus: '% do ilości zdobywanych kryształów instancji'
        }, {
            id: 140,
            bonus: '% do przyrostu Punktów Akcji'
        }, {
            id: 154,
            bonus: '% do sławy za walki w wojnach imperiów'
        }, {
            id: 160,
            bonus: '% do boskiego atrybutu przewodniego'
        }, {
            id: 163,
            bonus: '% więcej Boskiej Ki za CSK'
        }, {
            id: 171,
            bonus: '% do max Punktów Akcji'
        }];
    }
}

class pet_bonch {
    constructor() {
        this.petCSS = `
            #bonusMenu {display: none; position: absolute; top: 80px; right: 5px; padding: 10px; background: rgba(48, 49, 49, 0.8); border: solid #ffffff7a 1px; border-radius: 5px; z-index: 10;}
            #bonusMenu div {color: #ffffff; font-size: 16px; font-weight: bold; margin-bottom: 10px; text-align: center; }
            #bonusMenu select {margin: 5px 0; background: #ffffff99; border: solid #6f6f6f 1px; border-radius: 5px; color: black; display: block; width: 100%;}
            .startButton {display: block; margin: 8px auto;}
            .stopButton {display: block; margin: 8px auto; margin-bottom: 1ch;}`;
        this.petHTML = `
            <div id="bonusMenu">
                <div><b>Wybierz bonusy:</b></div>
                ${this.generateBonusSelects(4)}
                <div><b>Wybierz ID Peta:</b></div>
                <select id="petIdSelect">${this.generatePetOptions()}</select>
                <button class="newBtn startButton">Start</button>
                <button class="newBtn stopButton">CLOSE</button>
            </div>`;
        this.isPetBonchActive = false;
        this.petInterval = null;

        this.initialize();
    }

    initialize() {
        this.attachButtonEvent();
        this.attachStartEvent();
        this.attachStopEvent();
    }

    generateBonusSelects(count) {
        let options = `
            <option value="0">Brak</option>
            <option value="1">% do siły</option>
            <option value="2">% do szybkości</option>
            <option value="3">% do wytrzymałości</option>
            <option value="4">% do siły woli</option>
            <option value="5">% do energii ki</option>
            <option value="6">% do wszystkich statystyk</option>
            <option value="7">% do efektywności treningu</option>
            <option value="8">% do rezultatu treningu</option>
            <option value="9">% do szansy na podwójnie efektywny bonus za ulepszenie treningu</option>
            <option value="10">% do max Punktów Akcji</option>
            <option value="11"> do przyrostu Punktów Akcji</option>
            <option value="12">% do przyrostu Punktów Akcji</option>
            <option value="13">% do doświadczenia</option>
            <option value="14">% do szansy na zdobycie przedmiotu z walk PvM</option>
            <option value="15">% do ilości mocy z walk PvM</option>
            <option value="16">% do szansy na moc z walk PvM</option>
            <option value="17">% do mocy za skompletowanie SK</option>
            <option value="18">% do mocy za skompletowanie PSK</option>
            <option value="19">% do mocy za wygrane walki wojenne</option>
            <option value="20">% do obrażeń</option>
            <option value="21">% do obrażeń od technik</option>
            <option value="22">% do obrażeń od trafień krytycznych</option>
            <option value="23">% do redukcji obrażeń</option>
            <option value="24">% redukcji obrażeń od technik</option>
            <option value="25">% do redukcji szansy na otrzymanie trafienia krytycznego</option>
            <option value="26">% redukcji obrażeń od trafień krytycznych</option>
            <option value="27">% do szansy na trafienie krytyczne</option>
            <option value="28">% do odporności na krwawienia</option>
            <option value="29">% do skuteczności krwawień</option>
            <option value="30">% do odporności na podpalenia</option>
            <option value="31">% do skuteczności podpaleń</option>
        `;
        let selects = "";
        for (let i = 0; i < count; i++) {
            selects += `<select>${options}</select>`;
        }
        return selects;
    }

    generatePetOptions() {
        let options = '';
        for (let i = 1; i <= 100; i++) {
            options += `<option value="${i}">Pet ${i}</option>`;
        }
        return options;
    }

    attachButtonEvent() {
        $("body").on("click", 'button[data-option="pet_bonch"]', () => {
            if (!$("#bonusMenu").length) {
                $("body").append(`<style>${this.petCSS}</style>${this.petHTML}`);
            }

            setTimeout(() => {
                if ($(".pet-number").length === 0) {
                    const petItems = document.querySelectorAll('.petItem');
                    petItems.forEach((petItem, index) => {
                        const numberLabel = document.createElement('div');
                        numberLabel.classList.add('pet-number');
                        numberLabel.textContent = `Pet #${index + 1}`;
                        numberLabel.style.fontWeight = 'bold';
                        numberLabel.style.marginBottom = '5px';
                        petItem.prepend(numberLabel);
                    });
                }
                this.isPetBonchActive = false;
                $("#bonusMenu").toggle();
            }, 333);
        });
    }

    attachStartEvent() {
        $("body").on("click", '.startButton', () => {
            this.isPetBonchActive = true;
            const selectedOptions = Array.from($('#bonusMenu select').not('#petIdSelect'))
                .map(select => {
                    const value = select.value;
                    const optionText = select.options[select.selectedIndex].text;
                    return value !== "0" ? optionText : null;
                })
                .filter(option => option !== null);

            const checkAndSendData = () => {
                const container = document.querySelector("#kom_con > div > div.content > div");
                const greenTextValues = Array.from(container.querySelectorAll("b.green")).map(el => {
                    return el.nextSibling ? el.nextSibling.textContent.trim() : "";
                });

                const allMatch = selectedOptions.every(option => greenTextValues.includes(option));
                const iloscKarmy = parseInt($("#ilosc_karm").text(), 10);

                if (iloscKarmy === 0) {
                    this.isPetBonchActive = false;
                    console.log("Brak Karmy.");
                }

                if (this.isPetBonchActive) {
                    if (allMatch) {
                        console.log("Wszystkie wybrane wartości pasują:", selectedOptions);
                        clearInterval(this.petInterval);
                        this.isPetBonchActive = false;
                    } else {
                        console.log("Brak pełnego dopasowania, ponawiam próbę...");
                        const petId = $('#petIdSelect').val();
                        const button = document.querySelector(`#pet_list > div:nth-child(${petId}) > div.rightSide > div > button:nth-child(2)`);
                        const petId2 = button.getAttribute("data-pet");
                        GAME.socket.emit('ga', { a: 43, type: 7, pet: petId2 });
                        kom_clear();
                    }
                } else {
                    clearInterval(this.petInterval);
                }
            };

            this.petInterval = setInterval(checkAndSendData, 2000);
        });
    }

    attachStopEvent() {
        $("body").on("click", '.stopButton', () => {
            $("#bonusMenu").hide();
            this.isPetBonchActive = false;
        });
    }
}

        class anielskaReset {
            constructor() {
                this.anielskaCSS = `
                    #AnielskaMenu {display: none; position: absolute; top: 80px; right: 5px; padding: 10px; background: rgba(48, 49, 49, 0.8); border: solid #ffffff7a 1px; border-radius: 5px; z-index: 10;}
                    #AnielskaMenu div {color: #ffffff; font-size: 16px; font-weight: bold; margin-bottom: 10px; text-align: center; }
                    #AnielskaMenu select {margin: 5px 0; margin-bottom: 2ch; background: #ffffff99; border: solid #6f6f6f 1px; border-radius: 5px; color: black; display: block; width: 100%;}
                    .startAnielska {display: block; margin: 8px auto;}
                    .stopAnielska {display: block; margin: 8px auto; margin-bottom: 1ch;}`;
                this.anielskaHTML = `
                    <div id="AnielskaMenu">
                        <div><b>Wybierz ustawienia Anielskiej Kuli:</b></div>
                        ${this.generateAnielskaSelects(5)}
                        <button class="newBtn startAnielska">Start</button>
                        <button class="newBtn stopAnielska">CLOSE</button>
                    </div>`;
                this.isAnielskaActive = false;
                this.anielskaInterval = null;
        
                this.initialize();
            }
        
            initialize() {
                this.attachResetEvent();
                this.attachStartEvent();
                this.attachStopEvent();
            }
        
            generateAnielskaSelects(count){
                let options = `<option value="0">Brak</option>
                 <option value="1">10% do boskiego atrybutu przewodniego</option>
                 <option value="2">15% do boskiego atrybutu przewodniego</option>
                 <option value="3">150% do doświadczenia</option>
                 <option value="4">200% do doświadczenia</option>
                 <option value="5">150% do efektywności treningu</option>
                 <option value="6">200% do efektywności treningu</option>
                 <option value="7">75% do ilości mocy z walk PvM</option>
                 <option value="8">100% do ilości mocy z walk PvM</option>
                 <option value="9">75% do ilości zdobywanych kryształów instancji</option>
                 <option value="10">100% do ilości zdobywanych kryształów instancji</option>
                 <option value="11">30% do max Punktów Akcji</option>
                 <option value="12">35% do max Punktów Akcji</option>
                 <option value="13">40% do obrażeń</option>
                 <option value="14">45% do obrażeń</option>
                 <option value="15">40% do obrażeń od technik</option>
                 <option value="16">45% do obrażeń od technik</option>
                 <option value="17">30% do przyrostu Punktów Akcji</option>
                 <option value="18">35% do przyrostu Punktów Akcji</option>
                 <option value="19">40% do redukcji obrażeń</option>
                 <option value="20">45% do redukcji obrażeń</option>
                 <option value="21">40% do sławy za walki w wojnach imperiów</option>
                 <option value="22">45% do sławy za walki w wojnach imperiów</option>
                 <option value="23">15% do szansy na 3x więcej doświadczenia za wygrane walki PvM</option>
                 <option value="24">20% do szansy na 3x więcej doświadczenia za wygrane walki PvM</option>
                 <option value="25">9% do szansy na połączenie przedmiotów</option>
                 <option value="26">12% do szansy na połączenie przedmiotów</option>
                 <option value="27">9% do szansy na spotkanie legendarnych potworów</option>
                 <option value="28">12% do szansy na spotkanie legendarnych potworów</option>
                 <option value="29">9% do szansy na ulepszenie przedmiotów</option>
                 <option value="30">12% do szansy na ulepszenie przedmiotów</option>
                 <option value="31">9% do szansy na zdobycie przedmiotu z walk PvM</option>
                 <option value="32">12% do szansy na zdobycie przedmiotu z walk PvM</option>
                 <option value="33">9% do szansy na zdobycie PSK</option>
                 <option value="34">12% do szansy na zdobycie PSK</option>
                 <option value="35">3% do szansy na zdobycie CSK</option>
                 <option value="36">5% do szansy na zdobycie CSK</option>
                 <option value="37">15% do wtajemniczenia</option>
                 <option value="38">20% do wtajemniczenia</option>
                 <option value="39">40% redukcji obrażeń od technik</option>
                 <option value="40">45% redukcji obrażeń od technik</option>
                 <option value="41">9% do szansy na moc z walk PvM</option>
                 <option value="42">12% do szansy na moc z walk PvM</option>
                 <option value="43">10% większy limit dzienny Niebieskich Senzu</option>
                 <option value="44">15% większy limit dzienny Niebieskich Senzu</option>
                 <option value="45">4% większy mnożnik SSJ</option>
                 <option value="46">6% większy mnożnik SSJ</option>
                 <option value="47">10% redukcja obrażeń od efektów czasowych</option>
                 <option value="48">12% redukcja obrażeń od efektów czasowych</option>
                 <option value="49">75 minut(y) do czasu trwania Błogosławieństw</option>
                 <option value="50">100 minut(y) do czasu trwania Błogosławieństw</option>
                 <option value="51">12 minut(y) krótszy cooldown między walkami PvP</option>
                 <option value="52">15 minut(y) krótszy cooldown między walkami PvP</option>
                 <option value="53">50% większa ilość boskiego atrybutu przewodniego z walk PvM</option>
                 <option value="54">60% większa ilość boskiego atrybutu przewodniego z walk PvM</option>
                 <option value="55">2% do szansy na ulepszenie przedmiotów M-borna</option>
                 <option value="56">4% do szansy na ulepszenie przedmiotów M-borna</option>
                 <option value="57">5% do rezultatu treningu</option>
                 <option value="58">10% do rezultatu treningu</option>
                 <option value="59">2% do szansy na podwójnie efektywny bonus za ulepszenie treningu</option>
                 <option value="60">3% do szansy na podwójnie efektywny bonus za ulepszenie treningu</option>
                 <option value="61">3% większa szansa na boski atrybut przewodni podczas walk PvM</option>
                 <option value="62">5% większa szansa na boski atrybut przewodni podczas walk PvM</option>
                 <option value="63">5% do wszystkich statystyk</option>
                 <option value="64">10% % do wszystkich statystyk</option>
                 <option value="65">4% większa szansa na pomyślne zebranie zasobu</option>
                 <option value="66">6% większa szansa na pomyślne zebranie zasobu</option>
                 `;
                let selects = '';
                for (let i = 0; i < count; i++) {
                    selects += `<select>${options}</select>`;
                }
                return selects;
            }
        
            attachResetEvent() {
                $("body").on("click", 'button[data-option="ss_page"][data-page="reset"]', () => {
                    if (document.querySelector("#ss_name") && document.querySelector("#ss_name").textContent.trim() === "Anielska Kula Energii") {
                        if ($("#ballResetPanel").length) {
                            setTimeout(() => {
                                document.querySelector("#ballResetPanel").style.display = "none";
                            }, 500);
                        }
                        if (!$("#AnielskaMenu").length) {
                            $("body").append(`<style>${this.anielskaCSS}</style>${this.anielskaHTML}`);
                            console.log("#AnielskaMenu Wczytano.");
                        }
                        setTimeout(() => {
                            this.isAnielskaActive = false;
                            $("#AnielskaMenu").toggle();
                        }, 333);
                    }
                });
            }
        
            attachStartEvent() {
                $("body").on("click", '.startAnielska', () => {
                    this.isAnielskaActive = true;
                    const selectedOptions2 = Array.from($('#AnielskaMenu select'))
                        .map(select => {
                            const value = select.value;
                            const optionText = select.options[select.selectedIndex].text;
                            if (value !== "0" && parseInt(value, 10) % 2 !== 0) {
                                const nextEvenValue = parseInt(value, 10) + 1;
                                const nextEvenText = select.options[select.selectedIndex + 1]?.text;
                                return [optionText, nextEvenText].filter(Boolean);
                            }
                            return value !== "0" ? [optionText] : null;
                        })
                        .filter(option => option !== null);
        
                    const checkAndSendData2 = () => {
                        const table = document.querySelector("table.ss_stats");
                        const statBonValues = Array.from(table.querySelectorAll("td[id^='stat'][id$='_bon']"))
                            .map(td => td.textContent.trim())
                            .filter(value => value !== "");
        
                        const statValValues = Array.from(table.querySelectorAll("b[id^='stat'][id$='_val']"))
                            .map(b => b.textContent.trim())
                            .filter(value => value !== "");
        
                        const combinedValues = statValValues.map((val, index) => `${val}${statBonValues[index]}`);
                        console.log(combinedValues);
                        console.log(selectedOptions2);
        
                        const toCheck = selectedOptions2.filter(options => {
                            return !options.some(option => combinedValues.includes(option));
                        });
        
                        if (toCheck.length === 0) {
                            if (this.isAnielskaActive) {
                                console.log("Wszystkie wybrane wartości pasują:", selectedOptions2);
                                clearInterval(this.anielskaInterval);
                            } else {
                                clearInterval(this.anielskaInterval);
                            }
                        } else {
                            console.log("Brak pełnego dopasowania, ponawiam próbę...");
                            GAME.socket.emit('ga', { a: 45, type: 1, bid: GAME.ball_id });
                        }
                    };
        
                    this.anielskaInterval = setInterval(checkAndSendData2, 1500);
                });
            }
        
            attachStopEvent() {
                $("body").on("click", '.stopAnielska', () => {
                    $("#AnielskaMenu").hide();
                    this.isAnielskaActive = false;
                    clearInterval(this.anielskaInterval);
                });
            }
        }