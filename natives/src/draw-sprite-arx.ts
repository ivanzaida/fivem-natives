/**
 * GRAPHICS:DRAW_SPRITE_ARX
 *
 * 0xC54B91005A54695F

 * 
 * Used in arcade games and Beam hack minigame in Doomsday Heist. I will most certainly dive into this to try replicate arcade games.
 * x position must be between 0.0 and 1.0 (1.0 being the most right side of the screen)
 * y position must be between 0.0 and 1.0 (1.0 being the most bottom side of the screen)
 * width 0.0 - 1.0 is the reasonable amount generally
 * height 0.0 - 1.0 is the reasonable amount generally
 * p6 almost always 0.0
 * p11 seems to be unknown but almost always 0 int
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textureDictionaryName
 * @param {string} textureName
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} width
 * @param {number} height
 * @param {number} rotation
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} doStereorize
 * @param {boolean} useNearest
 */
export function drawSpriteArx(textureDictionaryName: string, textureName: string, centreX: number, centreY: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number, doStereorize: boolean = false, useNearest: boolean = false): void {
	const drawSpriteArx_result = Citizen.invokeNative<void>('0xC54B91005A54695F', textureDictionaryName, textureName, centreX, centreY, width, height, rotation, r, g, b, a, doStereorize, useNearest);
	return drawSpriteArx_result;
}