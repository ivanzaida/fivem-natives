/**
 * GRAPHICS:GET_IS_PETROL_DECAL_IN_RANGE
 *
 * 0x5713DE6DB59E98EB

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} range
 * @returns {boolean}  
 */
export function getIsPetrolDecalInRange(posX: number, posY: number, posZ: number, range: number): boolean {
	const getIsPetrolDecalInRange_result = Citizen.invokeNative<boolean>('0x5713DE6DB59E98EB', posX, posY, posZ, range);
	return getIsPetrolDecalInRange_result;
}