/**
 * STATS:STAT_SLOT_IS_LOADED
 *
 * 0x7A207DD1AEF9D26E

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function statSlotIsLoaded(slot: number): boolean {
	const statSlotIsLoaded_result = Citizen.invokeNative<boolean>('0x7A207DD1AEF9D26E', slot);
	return statSlotIsLoaded_result;
}