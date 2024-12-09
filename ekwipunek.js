class ekwipunekMenager {
    constructor() {
        const otwieranieKart = new cardOpen();
        const mapWrapper = new locationWrapper();
        const questFilter = new filterQuest();
        this.setupCalculatePA();
        const lvl12all = new lv12all();
        lvl12all.initialize();
    }

    setupCalculatePA() {
        const ekwipunekButton = document.querySelector('button.select_page[data-page="game_ekw"]');

        if (ekwipunekButton) {
            ekwipunekButton.addEventListener('click', () => {
                this.createOrUpdatePADisplay();
            });
        } else {
            console.error("Nie znaleziono przycisku Ekwipunek!");
        }
    }

    createOrUpdatePADisplay() {
        const titleDiv = document.querySelector("#page_game_ekw > div.title");
        if (!titleDiv) return;

        let paDiv = document.getElementById("pa_display");

        if (!paDiv) {
            paDiv = document.createElement("div");
            paDiv.id = "pa_display";
            paDiv.innerText = `POSIADANE PA: OBLICZ`;
            paDiv.style.display = "inline-block";
            paDiv.style.color = "lightblue";
            paDiv.style.fontSize = "16px";
            paDiv.style.fontWeight = "bold";
            paDiv.style.cursor = "pointer";
            paDiv.style.position = "relative";
            paDiv.style.left = "40%";
            titleDiv.appendChild(paDiv);
            paDiv.addEventListener("click", () => {
                new calculatePA();
            });
        }
    }
}

class lv12all {
    constructor() {
        this.stopUpgrading = false; // Global variable to control the loop
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getAllCardsByType(cardType) {
        const sc_upgrades = document.getElementById("sc_upgrades");
        const cardsSameType = Array.from(sc_upgrades.querySelectorAll('div')).filter(function(div) {
            const img = div.querySelector('img');
            return img && img.src.includes(cardType);
        });

        return cardsSameType.map(function(div) {
            const level = div.querySelector('span') ? div.querySelector('span').textContent : null;
            const stack = div.querySelector('i') ? div.querySelector('i').textContent : null;
            const cardId = div.getAttribute('data-card_id');

            return {
                level: parseInt(level),
                stack: parseInt(stack),
                cardId: cardId
            };
        });
    }

    upgradeCard(cardId) {
        GAME.socket.emit('ga', {a: 58, type: 3, card: cardId});
        kom_clear();
        GAME.komunikat2(`Upgrading card...`);
        let komunikatElement = document.querySelector('#kom_con .kom');
            if (komunikatElement) {
                if (!komunikatElement.querySelector('.stop')) {
                    komunikatElement.innerHTML += `
                    <button class="newBtn stop">STOP ULEPSZANIA</button>`;
                }
            }
            $("body").on("click", '.stop', () => {
                this.stopUpgrading = false;
                kom_clear();
            });
    }

    /**
     * Upgrade card to max level
     * @param {string} cardType - card type to upgrade
     * @param {number} maxLevel - max level to upgrade
     * @param {boolean} useExistingWeakerCard - if true, upgrade weaker card first, closest to max level
     * @param {number} forceUpgradeCardLevel - if provided, upgrade card with this level
     * @returns {boolean} - true if card was upgraded, false otherwise
     */
    upgrader(cardType, maxLevel, useExistingWeakerCard = false, forceUpgradeCardLevel = undefined) {
        const cards = this.getAllCardsByType(cardType);

        // no cards to upgrade
        if (cards.length === 0) {
            return false;
        }

        // return false if there is no level 1
        if (cards.filter(card => card.level === 1).length === 0) {
            return false;
        }

        let cardToUpgrade;

        // upgrade card with provided level
        if (forceUpgradeCardLevel) {
            cardToUpgrade = cards
                .filter(card => card.level === forceUpgradeCardLevel)
                .sort((a, b) => a.stack - b.stack)
                .shift();
        }
        else if (useExistingWeakerCard) {
            cardToUpgrade = cards
                .filter(card => card.level < maxLevel)
                .sort((a, b) => b.level - a.level)
                .shift();
        }

        if (cardToUpgrade) {
            if (cardToUpgrade.level === 1 && cardToUpgrade.stack === 1) {
                GAME.komunikat2('Card level is 1 and stack is 1. Stopping upgrade process.');
                this.stopUpgrading = false;
                setTimeout(() => { kom_clear(); }, 2000);
                return false;
            }
            this.upgradeCard(cardToUpgrade.cardId);
            return true;
        }

        return false;
    }

    async startStopButton() {
        const button = document.createElement('button');
        button.className = 'option btn_small_gold';
        button.setAttribute('data-option', 'map_cards');
        button.textContent = 'lv12ALL';
        button.addEventListener("click", async () => {
            this.stopUpgrading = !this.stopUpgrading; // Toggle the state
            if (!this.stopUpgrading) {
                GAME.komunikat2('Card upgrading stopped.');
                return;
            }
            const selected_card = $(`div[data-card_id="${GAME.selected_card}"]`);
            const cardType = selected_card.find('img').attr('src');
            let continueUpgrading = true;
            do {
                // Upgrade cards to level 12 until there are no more cards to upgrade or the process is stopped
                continueUpgrading = this.upgrader(cardType, 12, true);
                await this.delay(1000);
            } while (continueUpgrading && this.stopUpgrading);

            if (this.stopUpgrading) {
                GAME.komunikat2('All cards used');
                this.stopUpgrading = false;
                setTimeout(() => {kom_clear();}, 2000);
            }
        });

        document.getElementById("soulcard_menu").appendChild(button);
    }

    initialize() {
        if (!document.getElementById("soulcard_menu").querySelector('button[data-option="map_cards"]')) {
            this.startStopButton();
        }
    }
}

class cardOpen {
    constructor() {
        $("body").on("click", '#ekw_page_items div[data-base_item_id="1784"]', () => {
            $("#ekw_menu_use").one("click", () => { 
                setTimeout(() => {
                    $(`<button class="btn_small_gold otwieranie_kart" style="margin-right:4ch;">X100 OPEN</button>`).insertBefore("#kom_con > div > div.content > div:nth-child(1) > button.option.btn_small_gold");
                }, 500);
            });
        });

        $("body").on("click", '.otwieranie_kart', () => {
            let upperLimit = parseInt(document.querySelector("#item_am").value, 10);
            if (!isNaN(upperLimit) && upperLimit > 0) {
                let stopOpening = false;
                for (let i = 0; i < upperLimit; i++) {
                    setTimeout(() => {
                        if (stopOpening) return;
                        let cards = $(`#ekw_page_items div[data-base_item_id="1784"]`);
                        if (cards.length === 0) {
                            setTimeout(() => { GAME.komunikat("Karty się skończyły.");}, 1000);
                            stopOpening = true;
                            return;
                        }
                        let cards_id = parseInt(cards.attr("data-item_id"));
                        let stack = parseInt(cards.attr('data-stack'), 10);
                        if (stack < 100) {
                            GAME.socket.emit('ga', { a: 12, type: 14, iid: cards_id, page: GAME.ekw_page, page2: GAME.ekw_page2, am: stack });
                            setTimeout(() => { GAME.komunikat("Karty się skończyły.");}, 1000);
                            stopOpening = true;
                            return;
                        }
                        GAME.socket.emit('ga', { a: 12, type: 14, iid: cards_id, page: GAME.ekw_page, page2: GAME.ekw_page2, am: '100' });
                    }, i * 2000);
                }
            } else {
                console.error("Wartość #item_am nie jest poprawną liczbą lub jest mniejsza niż 1.");
            }
        });     
    }
}



class calculatePA {
    constructor() {
        this.calculateFinalNumber().catch(error => {
            console.error("Błąd podczas obliczania PA:", error);
        });
    }

    async calculateFinalNumber() {
        const initialPA = parseInt(document.querySelector("#char_pa_max").innerText.replace(/\s+/g, ''), 10);
        let finalNumber = initialPA;

        const itemStacks = await this.getItemStacks([1244, 1242, 1259, 1473, 1260, 1472, 1243, 1471, 1494, 1493, 1492, 1489, 1485, 1484, 1483]);

        finalNumber += itemStacks[1244] * 100;
        finalNumber += itemStacks[1242] * 2000;
        finalNumber += itemStacks[1259] * 5000 + (initialPA * 0.03);
        finalNumber += itemStacks[1473] * 5000 + (initialPA * 0.03);
        finalNumber += itemStacks[1260] * 10000 + (initialPA * 0.15);
        finalNumber += itemStacks[1472] * 10000 + (initialPA * 0.15);
        finalNumber += itemStacks[1243] * initialPA;
        finalNumber += itemStacks[1471] * initialPA;
        finalNumber += (itemStacks[1489] * 5000 + (initialPA * 0.03)) * 20;
        finalNumber += (itemStacks[1489] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1494] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1493] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1492] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1485] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1483] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1484] * 10000 + (initialPA * 0.15)) * 3;
        finalNumber += (itemStacks[1484] * initialPA) * 4;

        this.updatePA(GAME.dots(finalNumber));
        //console.log("MAX PA:" + initialPA + " Łączna ilość:" + finalNumber);
    }

    async getItemStacks(itemIds) {
        const stacks = {};
        itemIds.forEach(id => stacks[id] = 0);
        const pages = [
            { page: 0, page2: 0 },
            { page: 0, page2: 1 },
            { page: 0, page2: 2 }
        ];
        for (let page of pages) {
            await GAME.socket.emit('ga', { a: 12, page: page.page, page2: page.page2, used: 1 });
            await new Promise(resolve => setTimeout(resolve, 1500));
            itemIds.forEach(itemId => {
                const itemElement = document.querySelector(`#ekw_page_items [data-base_item_id="${itemId}"]`);
                if (itemElement) {
                    const stack = parseInt(itemElement.getAttribute('data-stack'), 10) || 0;
                    stacks[itemId] += stack;
                }
            });
        }
        console.log(stacks);
        return stacks;
    }

    updatePA(finalNumber) {
        const paDiv = document.getElementById("pa_display");
        if (paDiv) {
            paDiv.innerText = `POSIADANE PA: ${finalNumber}`;
        }
    }
}

class locationWrapper {
    constructor() {
        this.locationsGathered = false;
        $("body").on("click", '#map_link_btn', () => {
            if ($("#changeLocationWrapper").length === 0) {
                let locationWrapperCSS = `
                #changeLocationWrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    margin-top: -50px;
                    position: relative; /* Pozycjonowanie względne */
                    z-index: 10; /* Wyższy z-index, aby kontener był nad innymi elementami */
                }
                #changeLocationWrapper .arrow {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, rgb(36 210 210 / 80%), rgb(46 215 215 / 10%));
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    border: none;
                    border-radius: 50%;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    position: relative; /* Pozycjonowanie względne */
                    z-index: 20; /* Zwiększamy z-index, aby strzałki były na wierzchu */
                }
                #changeLocationWrapper .arrow:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
                }
                #changeLocationText {
                    font-size: 18px;
                    color: rgb(36 210 210 / 80%);
                    font-weight: bold;
                    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
                    white-space: nowrap; /* Zapobiega zawijaniu tekstu */
                }
                #loc_bons {
                    z-index: 20; /* Najwyższy możliwy z-index */
                }`;
                let locationWrapperHTML = `
                <div id="changeLocationWrapper">
                    <button id="leftArrow" class="arrow">← </button>
                    <span id="changeLocationText" class="green"> ZMIEŃ LOKACJĘ </span>
                    <button id="rightArrow" class="arrow"> →</button>
                </div>`;

                $('#map_y').after(`<style>${locationWrapperCSS}</style>${locationWrapperHTML}`);
            }
            if (!this.locationsGathered) {
                this.locationsGathered = true;
                setTimeout(() => {
                    GAME.emitOrder({a: 19, type: 1});
                    setTimeout(() => {document.querySelector("#map_link_btn").click();}, 1000);
                    setTimeout(() => {
                        const dataLocArray = [];
                        const list = document.querySelector('#tp_list');
                        if (list) {
                            const items = list.querySelectorAll("[data-loc]");
                            items.forEach(item => {
                                const dataLocValue = item.getAttribute("data-loc");
                                if (dataLocValue && /^\d{1,4}$/.test(dataLocValue)) {
                                    dataLocArray.push(dataLocValue);
                                }
                            });
                            console.log("Zebrane lokalizacje:", dataLocArray);
                        } else {
                            console.error("Element o ID #tp_list nie został znaleziony.");
                        }
                        $('#rightArrow').on('click', function() {
                            const currentLoc = String(GAME.char_data.loc);
                            const currentIndex = dataLocArray.indexOf(currentLoc);
                            if (currentIndex === -1) {
                                console.error("BRAK");
                            } else if (currentIndex > 0) {
                                const previousLoc = dataLocArray[currentIndex - 1];
                                GAME.emitOrder({a: 12, type: 18, loc: previousLoc});
                            }
                        });
                        $('#leftArrow').on('click', function() {
                            const currentLoc = String(GAME.char_data.loc);
                            const currentIndex = dataLocArray.indexOf(currentLoc);
                            if (currentIndex === -1) {
                                console.error("BRAK");
                            } else if (currentIndex < dataLocArray.length - 1) {
                                const nextLoc = dataLocArray[currentIndex + 1];
                                GAME.emitOrder({a: 12, type: 18, loc: nextLoc});
                            }
                        });
                    }, 1000);
                }, 2000);
            }
        });
    }
}

class filterQuest {
    constructor() {
        $("body").on("click", '#map_link_btn', () => {
            if ($("#quest-filter-input").length === 0) {
                let questFilterHTML = `<input type="text" id="quest-filter-input" placeholder="Wpisz coś..." autocomplete="off"/>`;
                let questFilterCSS = { 
                    position: 'absolute', 
                    top: '45px', 
                    right: '120px', 
                    backgroundSize: '100% 100%', 
                    border: '1px solid rgb(42 173 173 / 44%)', 
                    color: 'white',
                    width: '200px',
                    height: '30px',
                    background: 'rgb(249 249 249 / 10%)',
                    textAlign: 'center',
                    lineHeight: '40px',
                    textTransform: 'uppercase',
                };
                $('#rightArrow').after(questFilterHTML);
                $("#quest-filter-input").css(questFilterCSS);
                $("#quest-filter-input").on("input", this.filterQuests);
            }
            this.filterQuests();
        });
        const questContainer = document.querySelector('#drag_con');
        const observer = new MutationObserver(this.filterQuests.bind(this));
        observer.observe(questContainer, { childList: true, subtree: true });
    }
    filterQuests() {
        const inputField = $("#quest-filter-input")[0]; 
        const searchText = inputField.value.toLowerCase();
        const questContainer = document.querySelector('#drag_con');
        const quests = questContainer.querySelectorAll('.qtrack');
        quests.forEach(quest => {
            const questText = quest.textContent.toLowerCase(); 
            if (questText.includes(searchText)) {
                quest.style.display = '';
            } else {
                quest.style.display = 'none';
            }
        });
    }
}




