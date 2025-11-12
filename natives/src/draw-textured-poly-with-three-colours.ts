/**
 * GRAPHICS:DRAW_TEXTURED_POLY_WITH_THREE_COLOURS
 *
 * 0xCAB0D2338E17B2AB

 * 
 * Call this command every frame.
 * 
 * Used for drawling Deadline trailing lights, see deadline.ytd
 * 
 * Each vertex has its own colour that is blended/illuminated on the texture. Additionally, the R, G, and B components are floats that are int-casted internally.
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
 * @param {number} rgb1X
 * @param {number} rgb1Y
 * @param {number} rgb1Z
 * @param {number} a1
 * @param {number} rgb2X
 * @param {number} rgb2Y
 * @param {number} rgb2Z
 * @param {number} a2
 * @param {number} rgb3X
 * @param {number} rgb3Y
 * @param {number} rgb3Z
 * @param {number} a3
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
export function drawTexturedPolyWithThreeColours(coorsFirstX: number, coorsFirstY: number, coorsFirstZ: number, coorsSecondX: number, coorsSecondY: number, coorsSecondZ: number, coorsThirdX: number, coorsThirdY: number, coorsThirdZ: number, rgb1X: number, rgb1Y: number, rgb1Z: number, a1: number, rgb2X: number, rgb2Y: number, rgb2Z: number, a2: number, rgb3X: number, rgb3Y: number, rgb3Z: number, a3: number, textureDictionaryName: string, textureName: string, uv1X: number, uv1Y: number, uv1Z: number, uv2X: number, uv2Y: number, uv2Z: number, uv3X: number, uv3Y: number, uv3Z: number): void {
	const drawTexturedPolyWithThreeColours_result = Citizen.invokeNative<void>('0xCAB0D2338E17B2AB', coorsFirstX, coorsFirstY, coorsFirstZ, coorsSecondX, coorsSecondY, coorsSecondZ, coorsThirdX, coorsThirdY, coorsThirdZ, rgb1X, rgb1Y, rgb1Z, a1, rgb2X, rgb2Y, rgb2Z, a2, rgb3X, rgb3Y, rgb3Z, a3, textureDictionaryName, textureName, uv1X, uv1Y, uv1Z, uv2X, uv2Y, uv2Z, uv3X, uv3Y, uv3Z);
	return drawTexturedPolyWithThreeColours_result;
}