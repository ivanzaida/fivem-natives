/**
 * MISC:GET_NUM_SUCCESSFUL_STUNT_JUMPS
 *
 * 0x2FED6B8DCEAE8D75

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumSuccessfulStuntJumps(): number {
	const getNumSuccessfulStuntJumps_result = Citizen.invokeNative<number>('0x2FED6B8DCEAE8D75', );
	return getNumSuccessfulStuntJumps_result;
}