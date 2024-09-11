/**
 * STATS:STAT_IS_RECORDING_STAT
 *
 * 0xC3051E9423297E5C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statIsRecordingStat(): boolean {
	const statIsRecordingStat_result = Citizen.invokeNative<boolean>('0xC3051E9423297E5C', );
	return statIsRecordingStat_result;
}