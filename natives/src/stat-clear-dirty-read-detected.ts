/**
 * STATS:STAT_CLEAR_DIRTY_READ_DETECTED
 *
 * 0xF05E12C1DE78B9F2

 * 
 * ------------------------------------------------------------------
 */
export function statClearDirtyReadDetected(): void {
	const statClearDirtyReadDetected_result = Citizen.invokeNative<void>('0xF05E12C1DE78B9F2', );
	return statClearDirtyReadDetected_result;
}