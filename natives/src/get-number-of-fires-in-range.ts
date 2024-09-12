/**
 * FIRE:GET_NUMBER_OF_FIRES_IN_RANGE
 *
 * 0xE8D2BD34CCB74431

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @returns {number}  
 */
export function getNumberOfFiresInRange(posX: number, posY: number, posZ: number, radius: number): number {
	const getNumberOfFiresInRange_result = Citizen.invokeNative<number>('0xE8D2BD34CCB74431', posX, posY, posZ, radius);
	return getNumberOfFiresInRange_result;
}