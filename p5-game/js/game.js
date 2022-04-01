class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.obstacles = []
		this.backgroundImages = []
		this.playerImage = ''
	}
	draw() {
		clear()
		this.background.draw()
		this.player.draw()
		// frameCount is a P5 variable
		if (frameCount % 90 === 0) {
			// add an element to the obstacles array
			this.obstacles.push(new Obstacle(this.coinImage))
			// console.log(this.obstacles)
		}

		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

		this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player) || obstacle.x < 0) {
				return false
			} else {
				return true
			}
		})
		console.log(this.obstacles.length)
	}
	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
			{ src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
			{ src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
			{ src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 },
			{ src: loadImage('assets/background/plx-5.png'), x: 0, speed: 4 }
		]
		this.playerImage = loadImage('assets/player/bb8.gif')
		this.coinImage = loadImage('assets/coins/tile000.png')
	}
}
