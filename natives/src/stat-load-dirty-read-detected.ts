/**
 * STATS:STAT_LOAD_DIRTY_READ_DETECTED
 *
 * 0x31AE99BF71F99FDF

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statLoadDirtyReadDetected(): boolean {
	const statLoadDirtyReadDetected_result = Citizen.invokeNative<boolean>('0x31AE99BF71F99FDF', );
	return statLoadDirtyReadDetected_result;
}