/**
 * PED:IS_COP_PED_IN_AREA_3D
 *
 * 0x59A8C2AB2084CAF7

 * 
 * xyz - relative to the world origin.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} firstCoorsX
 * @param {number} firstCoorsY
 * @param {number} firstCoorsZ
 * @param {number} secondCoorsX
 * @param {number} secondCoorsY
 * @param {number} secondCoorsZ
 * @returns {boolean}  
 */
export function isCopPedInArea_3D(firstCoorsX: number, firstCoorsY: number, firstCoorsZ: number, secondCoorsX: number, secondCoorsY: number, secondCoorsZ: number): boolean {
	const isCopPedInArea_3D_result = Citizen.invokeNative<boolean>('0x59A8C2AB2084CAF7', firstCoorsX, firstCoorsY, firstCoorsZ, secondCoorsX, secondCoorsY, secondCoorsZ);
	return isCopPedInArea_3D_result;
}