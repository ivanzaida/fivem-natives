/**
 * MISC:REMOVE_POP_MULTIPLIER_AREA
 *
 * 0x78640FB2D4298B2D

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @param {boolean} localOnly
 */
export function removePopMultiplierArea(index: number, localOnly: boolean): void {
	const removePopMultiplierArea_result = Citizen.invokeNative<void>('0x78640FB2D4298B2D', index, localOnly);
	return removePopMultiplierArea_result;
}