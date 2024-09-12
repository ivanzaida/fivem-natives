/**
 * CFX:SET_CALMING_QUAD_BOUNDS
 *
 * 0XC5945BD9

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The calming quad index
 * @param {number} minX The minX coordinate
 * @param {number} minY The minY coordinate
 * @param {number} maxX The maxX coordinate
 * @param {number} maxY The maxY coordinate
 * @returns {boolean}  Returns true on success.
 */
export function setCalmingQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
	const setCalmingQuadBounds_result = Citizen.invokeNative<boolean>('0XC5945BD9', waterQuad, minX, minY, maxX, maxY);
	return setCalmingQuadBounds_result;
}