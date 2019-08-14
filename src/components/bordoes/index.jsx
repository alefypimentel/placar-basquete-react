import React, { Component } from 'react'
import './style.css'
import Nba from '../../audio/nba-sound.mp3'
import KeyHandler, { KEYPRESS } from 'react-key-handler'

class Music extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		super();
	}

	playMusicAttack() {
		this.nba.play()
	}

	stopMusicAttack() {
		this.nba.pause()
		this.nba.currentTime = 0;
	}

	render() {
		return (
			<div>
				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="p"
					onKeyHandle={this.playMusicAttack.bind(this)}
				/>

				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="o"
					onKeyHandle={this.stopMusicAttack.bind(this)}
				/>

				<audio ref={(nba) => { this.nba = nba; }}>
					<source src={Nba} type="audio/mpeg" >
					</source>
				</audio>
			</div>
		);
	}
}

export default Music;
