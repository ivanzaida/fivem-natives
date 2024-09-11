import { ECloudLoadFailureCodes } from '@ivanzaida/structures'

/**
 * STATS:STAT_CLOUD_SLOT_LOAD_FAILED_CODE
 *
 * 0x2F2F3B8D58302682

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {ECloudLoadFailureCodes}  
 */
export function statCloudSlotLoadFailedCode(slot: number): ECloudLoadFailureCodes {
	const statCloudSlotLoadFailedCode_result = Citizen.invokeNative<ECloudLoadFailureCodes>('0x2F2F3B8D58302682', slot);
	return statCloudSlotLoadFailedCode_result;
}