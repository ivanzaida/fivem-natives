/**
 * MISC:GET_REAL_WORLD_TIME
 *
 * 0x093F26D866EFF997

 * 
 * Returns the real world time in seconds
 * 
 * GET_GAME_TIMER() / 1000
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getRealWorldTime(): number {
	const getRealWorldTime_result = Citizen.invokeNative<number>('0x093F26D866EFF997', );
	return getRealWorldTime_result;
}