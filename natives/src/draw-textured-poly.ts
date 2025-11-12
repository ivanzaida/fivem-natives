/**
 * GRAPHICS:DRAW_TEXTURED_POLY
 *
 * 0x7FB3FBAF75E52D57

 * 
 * Call this command every frame.
 * 
 * Used for drawling Deadline trailing lights, see deadline.ytd
 * 
 * p15 through p23 are values that appear to be related to illiumation, scaling, and rotation; more testing required.
 * For UVW mapping (u,v,w parameters), reference your favourite internet resource for more details.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsFirstX
 * @param {number} coorsFirstY
 * @param {number} coorsFirstZ
 * @param {number} coorsSecondX
 * @param {number} coorsSecondY
 * @param {number} coorsSecondZ
 * @param {number} coorsThirdX
 * @param {number} coorsThirdY
 * @param {number} coorsThirdZ
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @param {string} textureDictionaryName
 * @param {string} textureName
 * @param {number} uv1X
 * @param {number} uv1Y
 * @param {number} uv1Z
 * @param {number} uv2X
 * @param {number} uv2Y
 * @param {number} uv2Z
 * @param {number} uv3X
 * @param {number} uv3Y
 * @param {number} uv3Z
 */
export function drawTexturedPoly(coorsFirstX: number, coorsFirstY: number, coorsFirstZ: number, coorsSecondX: number, coorsSecondY: number, coorsSecondZ: number, coorsThirdX: number, coorsThirdY: number, coorsThirdZ: number, red: number, green: number, blue: number, alpha: number, textureDictionaryName: string, textureName: string, uv1X: number, uv1Y: number, uv1Z: number, uv2X: number, uv2Y: number, uv2Z: number, uv3X: number, uv3Y: number, uv3Z: number): void {
	const drawTexturedPoly_result = Citizen.invokeNative<void>('0x7FB3FBAF75E52D57', coorsFirstX, coorsFirstY, coorsFirstZ, coorsSecondX, coorsSecondY, coorsSecondZ, coorsThirdX, coorsThirdY, coorsThirdZ, red, green, blue, alpha, textureDictionaryName, textureName, uv1X, uv1Y, uv1Z, uv2X, uv2Y, uv2Z, uv3X, uv3Y, uv3Z);
	return drawTexturedPoly_result;
}