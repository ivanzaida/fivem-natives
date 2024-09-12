/**
 * MISC:GET_TOTAL_SUCCESSFUL_STUNT_JUMPS
 *
 * 0x356BDA6BB9847878

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getTotalSuccessfulStuntJumps(): number {
	const getTotalSuccessfulStuntJumps_result = Citizen.invokeNative<number>('0x356BDA6BB9847878', );
	return getTotalSuccessfulStuntJumps_result;
}