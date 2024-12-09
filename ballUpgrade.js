class ballUpgrade {
    constructor() {
        this.upgradeAllText = 'Ulepszaj wszystkie';
        this.stopText = 'STOP';
        this.waitingForResponse = false;
        this.bonuses = [];
        this.synergy = parseInt($("#ss_synergy_lvl").html());
        this.hasStarted = false;
        $("body").on("click", `button[data-option="ss_page"][data-page="upgrade"]`, () => {
            this.showCheckboxes();
            this.showUpgradeAllButton();
        });
        $("body").on("click", `button[data-option="ss_page"][data-page="reset"], #soulstone_interface .closeicon`, () => {
            if (this.hasStarted) {
                this.stopUpgrading();
            }
            this.hideCheckboxes();
            this.hideUpgradeAllButton();
        });
        $("body").on("click", `button[data-option="ss_upgrade_all"]`, () => {
            this.controller();
        });
    }

    controller() {
        if (this.hasStarted) {
            this.hasStarted = false;
            this.stopUpgrading();
        } else {
            this.hasStarted = true;
            this.startUpgrading();
        }
        this.switchCheckboxesState();
        this.switchButtonText();
    }

    startUpgrading() {
        if (this.hasStarted) {
            GAME.completeProgress = () => {
                var res = GAME.progress;
                switch (res.a) {
                    case 45:
                        if (res.ball) {
                            GAME.parseData(55, res);
                            if (this.hasStarted) {
                                if(this.waitingForResponse) {
                                    this.waitingForResponse = false;
                                }
                                this.upgrade();
                            }
                        }
                        break;
                }
                delete GAME.progress;
            }
            this.bonuses = [];
            this.upgrade();
        }
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

        this.waitingForResponse = false;

        if (this.hasStarted) {
            this.controller()
        }
    }

    upgrade() {
        if(this.waitingForResponse) {
            return;
        }

        this.rateUpgrade();
    }

    sendUpgrade() {
        GAME.emitOrder({ a: 45, type: 3, bid: GAME.ball_id });
        this.waitingForResponse = true;
    }

    rateUpgrade() {
        var shouldAcceptUpgrade = false;
        this.markBonuses();
        shouldAcceptUpgrade = this.evaluateBonuses();
        if (shouldAcceptUpgrade) {
            GAME.emitOrder({ a: 45, type: 5, bid: GAME.ball_id });
        }

        setTimeout(this.sendUpgrade, shouldAcceptUpgrade ? 300 : 0);
    }

    markBonuses() {
        this.bonuses = [];
        $('.ball_stats.stat_page tr[id]:not([style*="display: none"])').each((value, index, array) => {
            this.bonuses.push($(`#bon${value + 1}_upgrade`)[0].checked);
        }, this);

        let allUnchecked = this.bonuses.every((value, index, array) => {
            value == false;
        }, this);

        if(allUnchecked) {
            this.stopUpgrading
        }
    }

    evaluateBonuses() {
        var sum = 0;
        this.bonuses.forEach((shouldInclude, index, array) => {
            if(shouldInclude) {
                sum += parseFloat($(`#ss_change_${index+1}`).text());
            }
        }, this);

        return sum >= 0;
    }

    showCheckboxes() {
        $('.ball_stats.stat_page tr[id]:not([style*="display: none"])').each(function (index) {
            $(`#stat${index + 1}_bon`).after(`<input type="checkbox" id="bon${index + 1}_upgrade" value=${index + 1}>`);
        });
    }

    switchCheckboxesState() {
        $(".ball_stats.stat_page input[type=checkbox]").each((index) => {
            $(`#bon${index + 1}_upgrade`).prop('disabled', this.hasStarted);
        });
    }

    hideCheckboxes() {
        $(".ball_stats.stat_page input[type=checkbox]").each((index) => {
            $(`#bon${index + 1}_upgrade`).remove();
        });
    }

    showUpgradeAllButton() {
        $("#ss_page_upgrade > button").after('<button class="newBtn option" data-option="ss_upgrade_all">Ulepszaj wszystkie</button>');
    }

    switchButtonText() {
        $('#ss_page_upgrade button[data-option="ss_upgrade_all"]').html(`${this.hasStarted ? this.stopText : this.upgradeAllText}`);
    }

    hideUpgradeAllButton() {
        $('#ss_page_upgrade button[data-option="ss_upgrade_all"]').remove();
    }
}
