/**
 * FIRE:STOP_FIRE_IN_RANGE
 *
 * 0xD7ABE01242C5B8E3

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 */
export function stopFireInRange(posX: number, posY: number, posZ: number, radius: number): void {
	const stopFireInRange_result = Citizen.invokeNative<void>('0xD7ABE01242C5B8E3', posX, posY, posZ, radius);
	return stopFireInRange_result;
}