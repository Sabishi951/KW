class ballExp {
    constructor() {
        this.expText = 'Exp do NEXT';
        this.expNonStopText = 'Exp no stop';
        this.stopText = 'STOP';
        this.synergy = parseInt($("#ss_synergy_lvl").html());
        this.hasStarted = false;
        this.nonStopExp = false;
        $("body").on("click", `button[data-option="ss_page"][data-page="upgrade"]`, () => {
            this.showExpButtons();
        });
        $("body").on("click", `button[data-option="ss_page"][data-page="reset"], #soulstone_interface .closeicon`, () => {
            if(this.hasStarted) {
                this.stopUpgrading();
            }
            this.hideExpButtons();
        });
        $("body").on("click", `button[data-option="ss_lvlup_next"]`, () => {
            this.controller();
        });
        $("body").on("click", `button[data-option="ss_lvlup_nonstop"]`, () => {
            this.nonStopExp = true;
            this.controller();
        });
    }

    controller() {
        if (this.hasStarted) {
            this.hasStarted = false;
            this.nonStopExp = false;
            this.stopUpgrading();
        } else {
            this.hasStarted = true;
            this.startUpgrading()
        }
        this.switchButtonText();
    }

    startUpgrading() {
        GAME.completeProgress = () => {
            var res = GAME.progress;
            switch (res.a) {
                case 45:
                    if (res.ball) {
                        GAME.parseData(55, res);
                        if (this.hasStarted) {
                            this.upgrade();
                        }
                    }
                    break;
            }
            delete GAME.progress;
        }

        this.upgrade();
    }

    stopUpgrading() {
        GAME.completeProgress = () => {
            var res = GAME.progress;
            switch (res.a) {
                case 45:
                    if (res.ball) {
                        GAME.parseData(55, res);
                    }
                    break;
            }
            delete GAME.progress;
        }

        if (this.hasStarted) {
            this.controller()
        }
    }

    upgrade() {
        var expKuli = $('#ss_exp').text();
        var expKuliBezSpacji = expKuli.replace(/\s/g, '');
        var expKuliPodzielony = expKuliBezSpacji.split('/');
        var expKuli = parseInt(expKuliPodzielony[0]);
        var expKuliPotrzebny = parseInt(expKuliPodzielony[1]);
        
        if (expKuli < expKuliPotrzebny || this.nonStopExp) {
            GAME.emitOrder({ a: 45, type: 3, bid: GAME.ball_id });
        } else {
            this.stopUpgrading();
        }
    }

    showExpButtons() {
        $("#soulstone_interface > div.pull-left.ball_stats > div > div.main_bar").after('<button id="ss_lvlup_next" class="btn_small_gold option" data-option="ss_lvlup_next">Exp do NEXT</button>');
        $("#soulstone_interface > div.pull-left.ball_stats > div > div.main_bar").after('<button id="ss_lvlup_nonstop" class="btn_small_gold option" data-option="ss_lvlup_nonstop">Exp no stop</button>');
    }

    switchButtonText() {
        $("#ss_lvlup_next").html(this.hasStarted ? this.stopText : this.expText);
        $("#ss_lvlup_nonstop").html(this.hasStarted ? this.stopText : this.expNonStopText);
    }

    hideExpButtons() {
        $("#ss_lvlup_next").remove();
        $("#ss_lvlup_nonstop").remove();
    }
}
