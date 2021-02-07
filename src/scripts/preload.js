class Load extends Phaser.Scene {
	constructor(){
		super('load');
	}

	draw_button(x, y, id, scope){
		var o = scope.add.sprite(x, y, 'btn_'+id).setInteractive();
		o.button = true;
		o.name = id;
		return o;
	}

	preload(){
		this.add.tileSprite(0,0,game_config.width,game_config.height,'tilebg').setOrigin(0,0);
		this.add.sprite(game_config.width/2,game_config.height/2,'bg_menu');
		this.anims.create({
		    key: 'title',
		    frames: this.anims.generateFrameNumbers('game_title2'),
		    frameRate: 5,
		    repeat: -1,
		});
		let title = this.add.sprite(800, 215, 'game_title2');
		title.play('title');
		let bar = this.add.rectangle(game_config.width/2, 500, 600, 20);
		bar.setStrokeStyle(4, 0xffffff);
		bar.alpha = 0.7;
		let progress = this.add.rectangle(game_config.width/2, 500, 590, 10, 0xffffff);
		progress.alpha = 0.8;
		this.load.on('progress', (value)=>{
			progress.width = 590*value;
		});
		this.load.on('complete', ()=>{
			bar.destroy();
			progress.destroy();
			let o = this.draw_button(game_config.width/2, 510, 'start', this);
			this.tweens.add({
				targets: o,
				scaleX: 0.9,
				scaleY: 0.9,
				yoyo: true,
				duration: 800,
				repeat: -1,
				ease: 'Sine.easeInOut',
			});
		}, this);
		this.input.on('gameobjectdown', ()=>{
			this.scene.start('menu');
		}, this);
		//
		this.load.image('symbols','img/symbols.png');
		this.load.image('symbols_blur','img/symbols_blur.png');
		this.load.image('machine','img/machine.png');
		this.load.image('bg','img/bg.png');
		this.load.image('game_title','img/game_title.png');
		this.load.image('btn_play','img/btn_play.png');
		//this.load.image('btn_about','img/btn_about.png');
		this.load.image('btn_menu_sound','img/btn_menu_sound.png');
		this.load.image('btn_menu_sound_off','img/btn_menu_sound_off.png');
		this.load.image('btn_menu_music','img/btn_menu_music.png');
		this.load.image('btn_menu_music_off','img/btn_menu_music_off.png');
		this.load.image('footer','img/footer.png');
		this.load.image('header','img/header.png');
		this.load.image('money_bar','img/money_bar.png');
		this.load.image('btn_payout','img/btn_payout.png');
		this.load.image('btn_spin','img/btn_spin.png');
		this.load.image('btn_max','img/btn_max.png');
		this.load.image('btn_back','img/btn_back.png');
		this.load.image('btn_sound','img/btn_sound.png');
		this.load.image('btn_sound_off','img/btn_sound_off.png');
		this.load.image('btn_music','img/btn_music.png');
		this.load.image('btn_music_off','img/btn_music_off.png');
		this.load.image('btn_plus_bet','img/btn_plus_bet.png');
		this.load.image('btn_minus_bet','img/btn_minus_bet.png');
		this.load.image('btn_plus_lines','img/btn_plus_lines.png');
		this.load.image('btn_minus_lines','img/btn_minus_lines.png');
		this.load.image('btn_full','img/btn_full.png');
		this.load.image('btn_no','img/btn_no.png');
		this.load.image('btn_yes','img/btn_yes.png');
		this.load.image('win_prompt','img/win_prompt.png');
		this.load.image('res_bar','img/res_bar.png');
		this.load.image('lines_bar','img/lines_bar.png');
		this.load.image('bet_bar','img/bet_bar.png');
		this.load.image('paytable','img/paytable.png');
		//this.load.image('circle','img/circle.png');
		this.load.image('line1','img/line1.png');
		this.load.image('line2','img/line2.png');
		this.load.image('line3','img/line3.png');
		this.load.image('star','img/star.png');
		this.load.image('you_win','img/you_win.png');
		this.load.image('big_win','img/big_win.png');
		this.load.image('light1','img/light1.png');
		this.load.image('coin','img/coin.png');
		this.load.image('mask','img/mask.png');
		this.load.image('separate','img/separate.png');
		this.load.image('about','img/about.png');
		this.load.image('about_window','img/about_window.png');
		this.load.spritesheet('coins', 'img/coins.png', {frameWidth: 70, frameHeight: 70});
		//this.load.spritesheet('lever', 'img/lever.png', {frameWidth: 77, frameHeight: 351});
		//this.load.spritesheet('li', 'img/li.png', {frameWidth: 115/2, frameHeight: 397});
		//AUDIO
		this.load.audio('Slot Machine Spin Loop', 'audio/Slot Machine Spin Loop.mp3');
		this.load.audio('Slot Machine Mega Win', 'audio/Slot Machine Mega Win.mp3');
		this.load.audio('Slot Arm Start', 'audio/Slot Arm Start.mp3');
		this.load.audio('Get Coins', 'audio/Get Coins.mp3');
		this.load.audio('Slot line', 'audio/Slot line.mp3');
		this.load.audio('click2', 'audio/click2.mp3');
		this.load.audio('music', 'audio/music.mp3');
		this.load.audio('Button', 'audio/Button.mp3');
		this.load.audio('Bonus Lose', 'audio/Bonus Lose.mp3');
		this.load.audio('Slot coins', 'audio/Slot coins.mp3');
		this.load.audio('Slot Machine Spin Button', 'audio/Slot Machine Spin Button.mp3');
		this.load.audio('Slot Machine Bonus Lose', 'audio/Slot Machine Bonus Lose.mp3');
		for(let i=1; i<=5; i++){
			this.load.audio('Slot Machine Stop '+i, 'audio/Slot Machine Stop '+i+'.mp3');
		}

		
	}
	create(){
		//this.scene.start('menu');
	}
}