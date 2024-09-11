/**
 * MISC:IS_STUNT_JUMP_IN_PROGRESS
 *
 * 0xF6D8C7059C3C2495

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isStuntJumpInProgress(): boolean {
	const isStuntJumpInProgress_result = Citizen.invokeNative<boolean>('0xF6D8C7059C3C2495', );
	return isStuntJumpInProgress_result;
}