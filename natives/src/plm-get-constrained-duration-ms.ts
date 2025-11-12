/**
 * MISC:PLM_GET_CONSTRAINED_DURATION_MS
 *
 * 0x4DDCC681612459A6

 * 
 * Returns the amount of time in ms that we've been in constrained mode. Should only be called when PLM_IS_IN_CONSTRAINED_MODE() returns true.
 * 
 * Returns duration of how long the game has been in power-saving mode (aka "constrained") in milliseconds.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function plmGetConstrainedDurationMs(): number {
	const plmGetConstrainedDurationMs_result = Citizen.invokeNative<number>('0x4DDCC681612459A6', );
	return plmGetConstrainedDurationMs_result;
}