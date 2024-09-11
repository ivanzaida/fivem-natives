/**
 * MISC:GET_POINT_AREA_OVERLAP
 *
 * 0x298E7BBD04F29848

 * 
 * ------------------------------------------------------------------
 * @param {number} a1X
 * @param {number} a1Y
 * @param {number} a1Z
 * @param {number} a2X
 * @param {number} a2Y
 * @param {number} a2Z
 * @param {number} aWidth
 * @param {number} b1X
 * @param {number} b1Y
 * @param {number} b1Z
 * @param {number} b2X
 * @param {number} b2Y
 * @param {number} b2Z
 * @param {number} bWidth
 * @returns {boolean}  
 */
export function getPointAreaOverlap(a1X: number, a1Y: number, a1Z: number, a2X: number, a2Y: number, a2Z: number, aWidth: number, b1X: number, b1Y: number, b1Z: number, b2X: number, b2Y: number, b2Z: number, bWidth: number): boolean {
	const getPointAreaOverlap_result = Citizen.invokeNative<boolean>('0x298E7BBD04F29848', a1X, a1Y, a1Z, a2X, a2Y, a2Z, aWidth, b1X, b1Y, b1Z, b2X, b2Y, b2Z, bWidth);
	return getPointAreaOverlap_result;
}