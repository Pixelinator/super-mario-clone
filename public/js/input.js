import Keyboard from "./KeyboardState.js";

export function setupKeyboard(mario) {
	const input = new Keyboard();

	input.addMapping("Space", keyState => {
		if (keyState) {
			mario.jump.start();
		} else {
			mario.jump.cancel();
		}
	});

	["KeyE", "KeyO"].forEach(keyName => {
		input.addMapping(keyName, keyState => {
			mario.turbo(keyState);
		});
	});

	["ArrowRight", "KeyD"].forEach(keyName => {
		input.addMapping(keyName, keyState => {
			mario.go.direction += keyState ? 1 : -1;
		});
	});

	["ArrowLeft", "KeyA"].forEach(keyName => {
		input.addMapping(keyName, keyState => {
			mario.go.direction += keyState ? -1 : 1;
		});
	});

	return input;
}
