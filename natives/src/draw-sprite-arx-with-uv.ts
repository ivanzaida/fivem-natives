/**
 * GRAPHICS:DRAW_SPRITE_ARX_WITH_UV
 *
 * 0xF9AAC4780D507BBC

 * 
 * Similar to DRAW_SPRITE, but allows to specify the texture coordinates used to draw the sprite.
 * 
 * u1, v1 - texture coordinates for the top-left corner
 * u2, v2 - texture coordinates for the bottom-right corner
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textureDictionaryName
 * @param {string} textureName
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} width
 * @param {number} height
 * @param {number} ux
 * @param {number} uy
 * @param {number} vx
 * @param {number} vy
 * @param {number} rotation
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} useNearest
 */
export function drawSpriteArxWithUv(textureDictionaryName: string, textureName: string, centreX: number, centreY: number, width: number, height: number, ux: number, uy: number, vx: number, vy: number, rotation: number, r: number, g: number, b: number, a: number, useNearest: boolean = false): void {
	const drawSpriteArxWithUv_result = Citizen.invokeNative<void>('0xF9AAC4780D507BBC', textureDictionaryName, textureName, centreX, centreY, width, height, ux, uy, vx, vy, rotation, r, g, b, a, useNearest);
	return drawSpriteArxWithUv_result;
}