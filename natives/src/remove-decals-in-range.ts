/**
 * GRAPHICS:REMOVE_DECALS_IN_RANGE
 *
 * 0x5926A824AF54BCC3

 * 
 * Removes all decals in range from a position, it includes the bullet holes, blood pools, petrol...
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} range
 */
export function removeDecalsInRange(posX: number, posY: number, posZ: number, range: number): void {
	const removeDecalsInRange_result = Citizen.invokeNative<void>('0x5926A824AF54BCC3', posX, posY, posZ, range);
	return removeDecalsInRange_result;
}