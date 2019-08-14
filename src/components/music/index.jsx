import React, { Component } from 'react'
import './style.css'
import Nba from '../../audio/nba-sound.mp3'
import Gol from '../../audio/gol.mp3'
import Romulo1 from '../../audio/que_homem.mp3'
import Romulo2 from '../../audio/por_que_voce_me_deixa_tao_solto.mp3'
import Romulo3 from '../../audio/minha_mae_do_ceu.mp3'
import Romulo4 from '../../audio/macho_alfa.mp3'
import Romulo5 from '../../audio/doutrinador_selvagem.mp3'
import Romulo6 from '../../audio/com_licenca_pra_matar.mp3'
import Romulo7 from '../../audio/caos_2.mp3'
import Romulo8 from '../../audio/feroz.mp3'
import Romulo9 from '../../audio/aqui_nao_lambisgoia.mp3'
import Romulo0 from '../../audio/porteiro_do_enem.mp3'
import Romulo10 from '../../audio/mensageiro_do_caos.mp3'
import Romulo11 from '../../audio/manda_nudes.mp3'
import Romulo12 from '../../audio/onde_esta_seu_deus.mp3'
import KeyHandler, { KEYPRESS } from 'react-key-handler'

class Music extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		super();
	}

	playMusicAttack() {
		this.nba.play()
	}

	gol() {
		this.gol.play()
	}

	music1() {
		this.romulo1.play()
	}

	music2() {
		this.romulo2.play()
	}

	music3() {
		this.romulo3.play()
	}

	music4() {
		this.romulo4.play()
	}

	music5() {
		this.romulo5.play()
	}

	music6() {
		this.romulo6.play()
	}

	music7() {
		this.romulo7.play()
	}

	music8() {
		this.romulo8.play()
	}

	music9() {
		this.romulo9.play()
	}

	music10() {
		this.romulo10.play()
	}

	music11() {
		this.romulo11.play()
	}

	music12() {
		this.romulo12.play()
	}

	music0() {
		this.romulo0.play()
	}

	stopMusic() {
		this.nba.pause()
		this.gol.pause()
		this.romulo1.pause()
		this.romulo2.pause()
		this.romulo3.pause()
		this.romulo4.pause()
		this.romulo5.pause()
		this.romulo6.pause()
		this.romulo7.pause()
		this.romulo8.pause()
		this.romulo9.pause()
		this.romulo10.pause()
		this.romulo11.pause()
		this.romulo12.pause()
		this.romulo0.pause()
		this.nba.currentTime = 0
		this.romulo1.currentTime = 0
		this.romulo2.currentTime = 0
		this.romulo3.currentTime = 0
		this.romulo4.currentTime = 0
		this.romulo5.currentTime = 0
		this.romulo6.currentTime = 0
		this.romulo7.currentTime = 0
		this.romulo8.currentTime = 0
		this.romulo9.currentTime = 0
		this.romulo10.currentTime = 0
		this.romulo11.currentTime = 0
		this.romulo12.currentTime = 0
		this.romulo0.currentTime = 0
		this.gol.currentTime = 0
	}

	render() {
		return (
			<div>
				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="q"
					onKeyHandle={this.playMusicAttack.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="1"
					onKeyHandle={this.music1.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="2"
					onKeyHandle={this.music2.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="3"
					onKeyHandle={this.music3.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="4"
					onKeyHandle={this.music4.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="5"
					onKeyHandle={this.music5.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="6"
					onKeyHandle={this.music6.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="7"
					onKeyHandle={this.music7.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="8"
					onKeyHandle={this.music8.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="9"
					onKeyHandle={this.music9.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="0"
					onKeyHandle={this.music0.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="-"
					onKeyHandle={this.music10.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="="
					onKeyHandle={this.music11.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="w"
					onKeyHandle={this.music12.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="p"
					onKeyHandle={this.stopMusic.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="f"
					onKeyHandle={this.gol.bind(this)}
				/>

				<audio ref={(gol) => { this.gol = gol; }}>
					<source src={Gol} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(nba) => { this.nba = nba; }}>
					<source src={Nba} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo1) => { this.romulo1 = romulo1; }}>
					<source src={Romulo1} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo2) => { this.romulo2 = romulo2; }}>
					<source src={Romulo2} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo3) => { this.romulo3 = romulo3; }}>
					<source src={Romulo3} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo4) => { this.romulo4 = romulo4; }}>
					<source src={Romulo4} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo5) => { this.romulo5 = romulo5; }}>
					<source src={Romulo5} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo6) => { this.romulo6 = romulo6; }}>
					<source src={Romulo6} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo7) => { this.romulo7 = romulo7; }}>
					<source src={Romulo7} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo8) => { this.romulo8 = romulo8; }}>
					<source src={Romulo8} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo9) => { this.romulo9 = romulo9; }}>
					<source src={Romulo9} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo10) => { this.romulo10 = romulo10; }}>
					<source src={Romulo10} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo11) => { this.romulo11 = romulo11; }}>
					<source src={Romulo11} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo12) => { this.romulo12 = romulo12; }}>
					<source src={Romulo12} type="audio/mpeg" >
					</source>
				</audio>

				<audio ref={(romulo0) => { this.romulo0 = romulo0; }}>
					<source src={Romulo0} type="audio/mpeg" >
					</source>
				</audio>
			</div>
		);
	}
}

export default Music;
