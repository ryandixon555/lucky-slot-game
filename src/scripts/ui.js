let txt_cash
let txt_line
let txt_bet
let txt_win
let txt_total

export function initUI(_this) {
  

    let fix = {
        x: game_config.width / 2,
        y: game_config.height / 2,
    };

    let _m1 = _this.add.sprite(419+fix.x, 35,'money_bar');
    let _m2 = _this.add.sprite(735+fix.x, 670,'res_bar');
    let _m3 = _this.add.sprite(480+fix.x, 670,'bet_bar');
    let _m4 = _this.add.sprite(221+fix.x, 670,'lines_bar');
    let b_spin = draw_button(1110+fix.x, 670,'spin',_this);

    //draw_button(1110+fix.x, 670,'spin',_this);
    //Draw buttons
    //let b_max = draw_button(920+fix.x, 670,'max',_this);
    let b_payout = draw_button(950+fix.x,35,'payout',_this);
    let b_plusb = draw_button(561+fix.x, 668,'plus_bet',_this);
    let b_minusb = draw_button(399+fix.x, 669,'minus_bet',_this);
    //let b_sound = draw_button(1100+fix.x, 35,'sound',_this);

    //let b_music = draw_button(1170+fix.x, 35,'music',_this);
    //draw_button(120+fix.x, 35,'back',_this);
    //draw_button(200+fix.x, 35,'full',_this);
    //End button
    if(!game_config.music){
        b_music.setTexture('btn_music_off');
    }
    if(!game_config.sound){
        b_music.setTexture('btn_sound_off');
    }
    //Draw text
    txt_cash = _this.add.text(530+fix.x, 35, String(game_config.cur_cash), {fontFamily: 'bebas', fontSize: 30, align: 'right',color: '#FFFFFF'}).setOrigin(1, 0.5);
    txt_line = _this.add.text(221+fix.x, 680, String(game_config.cur_payline), {fontFamily: 'bebas', fontSize: 30, align: 'center',color: '#FFFFFF'}).setOrigin(0.5);
    txt_bet = _this.add.text(480+fix.x, 680, String(game_config.cur_bet), {fontFamily: 'bebas', fontSize: 30, align: 'center',color: '#FFFFFF'}).setOrigin(0.5);
    txt_win = _this.add.text(820+fix.x, 682, '0', {fontFamily: 'bebas', fontSize: 30, align: 'right',color: '#FFFFFF'}).setOrigin(1,0.5);
    txt_total = _this.add.text(820+fix.x, 656, String(0), {fontFamily: 'bebas', fontSize: 30, align: 'right',color: '#FFFFFF'}).setOrigin(1,0.5);
}

export function updatetxtCash(val) {
    txt_cash.setText(val);
}

export function updatetxtLine(val) {
    txt_line.setText(val);
}
export function updatetxtBet(val) {
	txt_bet.setText(val);
}

export function updatetxtWin(val) {
    txt_win.setText(val);
}

export function updatetxtTotal(val) {
    txt_total.setText(val);
}

function draw_button(x, y, id, scope) {
    var o = scope.add.sprite(x, y, 'btn_'+id).setInteractive();
    o.button = true;
    o.name = id;
    return o;
}