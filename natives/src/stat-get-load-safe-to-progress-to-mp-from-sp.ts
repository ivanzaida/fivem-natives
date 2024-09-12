/**
 * STATS:STAT_GET_LOAD_SAFE_TO_PROGRESS_TO_MP_FROM_SP
 *
 * 0xDD07F250CCC73F1A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statGetLoadSafeToProgressToMpFromSp(): boolean {
	const statGetLoadSafeToProgressToMpFromSp_result = Citizen.invokeNative<boolean>('0xDD07F250CCC73F1A', );
	return statGetLoadSafeToProgressToMpFromSp_result;
}