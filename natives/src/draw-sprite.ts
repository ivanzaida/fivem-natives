/**
 * GRAPHICS:DRAW_SPRITE
 *
 * 0xFFA2B456A81EA1EB

 * 
 * Draws a 2D sprite on the screen.
 * 
 * Parameters:
 * textureDict - Name of texture dictionary to load texture from (e.g. "CommonMenu", "MPWeaponsCommon", etc.)
 * 
 * textureName - Name of texture to load from texture dictionary (e.g. "last_team_standing_icon", "tennis_icon", etc.)
 * 
 * screenX/Y - Screen offset (0.5 = center)
 * scaleX/Y - Texture scaling. Negative values can be used to flip the texture on that axis. (0.5 = half)
 * 
 * heading - Texture rotation in degrees (default = 0.0) positive is clockwise, measured in degrees
 * 
 * red,green,blue - Sprite color (default = 255/255/255)
 * 
 * alpha - opacity level
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
export function drawSprite(textureDictionaryName: string, textureName: string, centreX: number, centreY: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number, doStereorize: boolean = false, useNearest: boolean = false): void {
	const drawSprite_result = Citizen.invokeNative<void>('0xFFA2B456A81EA1EB', textureDictionaryName, textureName, centreX, centreY, width, height, rotation, r, g, b, a, doStereorize, useNearest);
	return drawSprite_result;
}