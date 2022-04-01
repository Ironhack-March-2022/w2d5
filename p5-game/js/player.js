class Player {

	constructor() {
		this.width = 100
		this.height = 140
		this.x = 0
		this.y = 600 - this.height
		this.gravity = 0.2
		this.velocity = 0
	}

	draw() {
		// console.log(height)
		this.velocity += this.gravity
		this.y += this.velocity
		// if he is moving out of the canvas on the bottom
		if (this.y >= 600 - this.height) {
			// then we move him back to the starting position
			this.y = 600 - this.height
		}
		image(game.playerImage, this.x, this.y, this.width, this.height)
	}

	jump() {
		// console.log('jumping')
		this.velocity = - 10
	}
}