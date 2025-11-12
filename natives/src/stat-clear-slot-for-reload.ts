/**
 * STATS:STAT_CLEAR_SLOT_FOR_RELOAD
 *
 * 0xF253153116210E81

 * 
 * Example:
 * 
 * for (v_2 = 0; v_2 <= 4; v_2 += 1) {
 *     STATS::STAT_CLEAR_SLOT_FOR_RELOAD(v_2);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function statClearSlotForReload(slot: number): boolean {
	const statClearSlotForReload_result = Citizen.invokeNative<boolean>('0xF253153116210E81', slot);
	return statClearSlotForReload_result;
}