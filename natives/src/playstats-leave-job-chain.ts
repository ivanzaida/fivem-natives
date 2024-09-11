/**
 * STATS:PLAYSTATS_LEAVE_JOB_CHAIN
 *
 * 0x7B6C12F588333BA9

 * 
 * ------------------------------------------------------------------
 * @param {number} macaddresshash
 * @param {number} posixtime
 * @param {number} currMacaddresshash
 * @param {number} currPosixtime
 * @param {number} leavereason
 */
export function playstatsLeaveJobChain(macaddresshash: number, posixtime: number, currMacaddresshash: number, currPosixtime: number, leavereason: number): void {
	const playstatsLeaveJobChain_result = Citizen.invokeNative<void>('0x7B6C12F588333BA9', macaddresshash, posixtime, currMacaddresshash, currPosixtime, leavereason);
	return playstatsLeaveJobChain_result;
}