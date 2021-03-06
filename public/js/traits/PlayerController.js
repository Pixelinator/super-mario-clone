import { Sides, Trait } from "../Entity.js";
import { Vec2 } from "../math.js";

export default class PlayerController extends Trait {
	constructor() {
		super("playerController");
		this.checkpoint = new Vec2(0, 0);
		this.player = null;
	}

	setPlayer(entity) {
		this.player = entity;
	}

	obstruct(entity, side) {}

	update(entity, deltaTime, level) {
		if (!level.entities.has(this.player)) {
			this.player.pos.set(this.checkpoint.x, this.checkpoint.y);
			this.player.killable.revive();
			level.entities.add(this.player);
		}
	}
}
