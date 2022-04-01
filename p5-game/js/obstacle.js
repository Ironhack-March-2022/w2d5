class Obstacle {
	constructor(image) {
		this.image = image
		this.x = 600
		// this sets the y position of the coins to a random value
		this.y = (Math.random() * 600) / 2.5
		this.width = 50
		this.height = 50
	}

	collision(playerInfo) {
		console.log('collision', playerInfo)
		// get the middle of the obstacle
		const obstacleX = this.x + this.width / 2
		const obstacleY = this.y + this.height / 2
		// get the middle of the player
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		// measure the distance
		// dist() is a p5 function
		if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
			return false
		} else {
			// increment the score
			return true
		}
	}

	draw() {
		this.x--
		image(this.image, this.x, this.y, this.width, this.height)
	}
}