/**
 * STATS:STAT_CLOUD_SLOT_LOAD_FAILED
 *
 * 0x219ED949271099BA

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function statCloudSlotLoadFailed(slot: number): boolean {
	const statCloudSlotLoadFailed_result = Citizen.invokeNative<boolean>('0x219ED949271099BA', slot);
	return statCloudSlotLoadFailed_result;
}