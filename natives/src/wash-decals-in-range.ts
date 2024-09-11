/**
 * GRAPHICS:WASH_DECALS_IN_RANGE
 *
 * 0xA2EEF7A44465A04D

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} range
 * @param {number} washAmount
 */
export function washDecalsInRange(posX: number, posY: number, posZ: number, range: number, washAmount: number): void {
	const washDecalsInRange_result = Citizen.invokeNative<void>('0xA2EEF7A44465A04D', posX, posY, posZ, range, washAmount);
	return washDecalsInRange_result;
}