import Phaser from 'phaser';

let  game_music;

class Menu extends Phaser.Scene {
	constructor(){
		super('menu');
	}

	// Audio
	play_sound(id, scope){
		if(game_config.sound){
			scope.sound.play(id);
		}
	}
	
	stop_music(){
		if(typeof game_music !== 'undefined'){
			game_music.stop();
		}
	}

	switch_audio(e,obj,scope){
		if(e === 'music' || e === 'menu_music'){
			if(game_config.music){
				game_config.music = false;
				obj.setTexture('btn_'+e+'_off');
				stop_music();
			} else {
				game_config.music = true;
				obj.setTexture('btn_'+e);
				this.play_music('music', scope);
			}
		} else {
			if(game_config.sound){
				game_config.sound = false;
				obj.setTexture('btn_'+e+'_off');
			} else {
				game_config.sound = true;
				obj.setTexture('btn_'+e);
			}
		}
	}

	play_music(id, scope){
		let next = true;
		if(game_config.music){
			if(game_music){
				if(game_music.isPlaying){
					next = false;
				}
			}
		}
		if(next && game_config.music){
			game_music = scope.sound.add(id, {
				loop: true,
			})
			game_music.play();
		}
	}

	draw_button(x, y, id, scope){
		var o = scope.add.sprite(x, y, 'btn_'+id).setInteractive();
		o.button = true;
		o.name = id;
		return o;
	}

	create(){
		this.play_music('music', this);
		let state = 'menu';
		let popup;
		let self = this;
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
		this.tweens.add({
			targets: title,
			scaleX: 0.9,
			scaleY: 0.9,
			yoyo: true,
			duration: 700,
			repeat: -1,
			ease: 'Sine.easeInOut',
		});
		this.draw_button(800, 476, 'play', this);
		//draw_button(685, 585, 'about', this);
		//let b_music = draw_button(889, 585, 'menu_music', this);
		//let b_sound = draw_button(1019, 585, 'menu_sound', this);
		if(!game_config.music){
			b_music.setTexture('btn_menu_music_off');
		}
		if(!game_config.sound){
			b_sound.setTexture('btn_menu_sound_off');
		}
		this.input.on('gameobjectdown', function(pointer, obj){
			let self = this;
			if(obj.button){
				//Button clicked
				this.play_sound('click2', self);
				this.tweens.add({
					targets: obj,
					scaleX: 0.9,
					scaleY: 0.9,
					duration: 100,
					ease: 'Linear',
					yoyo: true,
					onComplete: function(){
						if(state = 'menu'){
							if(obj.name === 'play'){
								self.scene.start('game');
							} else if(obj.name === 'menu_sound'){
								switch_audio(obj.name, obj, self);
							} else if(obj.name === 'menu_music'){
								switch_audio(obj.name, obj, self);
							} else if(obj.name === 'about'){
								show_info();
							}
						}
					},
				});
			}
		}, this);
		this.input.on('pointerdown', ()=> {
			if(state === 'info'){
				hide_info();
			}
		})
		function show_info(){
			state = 'preinfo';
			popup = self.add.container(0,0);
			popup.setDepth(1);
			var dark = self.add.rectangle(game_config.width/2,game_config.height/2,game_config.width,game_config.height,0x00000);
			dark.alpha = 0;
			dark.name = 'dark';
			self.tweens.add({
				targets: dark,
				alpha: 0.7,
				duration: 200,
			});
			let table = self.add.sprite(game_config.width/2,game_config.height/2,'about_window');
			table.alpha = 0;
			table.setScale(0.7);
			self.tweens.add({
				targets: table,
				alpha: 1,
				duration: 400,
				scaleX: 1,
				scaleY: 1,
				ease: 'Back.easeOut',
				onComplete: function(){
					state = 'info';
				}
			});
			let content = self.add.sprite(game_config.width/2,game_config.height/2+40,'about');
			content.alpha = 0;
			content.setScale(0.7);
			self.tweens.add({
				targets: content,
				alpha: 1,
				duration: 400,
				scaleX: 1,
				scaleY: 1,
				ease: 'Back.easeOut',
			});
			popup.add([dark, table, content]);
		}
		function hide_info(){
			self.tweens.add({
				targets: popup,
				alpha: 0,
				duration: 300,
				onComplete: ()=>{
					popup.destroy(true,true);
					state = 'menu';
				}
			});
		}
	}
}