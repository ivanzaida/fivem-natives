/**
 * PED:IS_ANY_PED_NEAR_POINT
 *
 * 0x2DBCF31839B069B4

 * 
 * ------------------------------------------------------------------
 * @param {number} pointX
 * @param {number} pointY
 * @param {number} pointZ
 * @param {number} radius
 * @returns {boolean}  
 */
export function isAnyPedNearPoint(pointX: number, pointY: number, pointZ: number, radius: number): boolean {
	const isAnyPedNearPoint_result = Citizen.invokeNative<boolean>('0x2DBCF31839B069B4', pointX, pointY, pointZ, radius);
	return isAnyPedNearPoint_result;
}