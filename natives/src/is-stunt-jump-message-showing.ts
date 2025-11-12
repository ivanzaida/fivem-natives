/**
 * MISC:IS_STUNT_JUMP_MESSAGE_SHOWING
 *
 * 0xB2E86D4871B30979

 * 
 * Returns true if the stunt jump message is currently being displayed.
 * This will normally start to return true the same frame that IS_STUNT_JUMP_IN_PROGRESS stops returning true
 * (unless the stunt jump was aborted for various reasons).
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isStuntJumpMessageShowing(): boolean {
	const isStuntJumpMessageShowing_result = Citizen.invokeNative<boolean>('0xB2E86D4871B30979', );
	return isStuntJumpMessageShowing_result;
}