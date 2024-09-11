/**
 * STATS:STAT_CLOUD_SLOT_SAVE_FAILED
 *
 * 0x64F5ED1652910707

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function statCloudSlotSaveFailed(slot: number): boolean {
	const statCloudSlotSaveFailed_result = Citizen.invokeNative<boolean>('0x64F5ED1652910707', slot);
	return statCloudSlotSaveFailed_result;
}