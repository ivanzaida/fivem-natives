/**
 * STATS:STAT_STOP_RECORD_STAT
 *
 * 0x77DAA17F34FDE49D

 * 
 * -
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statStopRecordStat(): boolean {
	const statStopRecordStat_result = Citizen.invokeNative<boolean>('0x77DAA17F34FDE49D', );
	return statStopRecordStat_result;
}