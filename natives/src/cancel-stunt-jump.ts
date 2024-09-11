/**
 * MISC:CANCEL_STUNT_JUMP
 *
 * 0xE751ECBA8573687A

 * 
 * ------------------------------------------------------------------
 */
export function cancelStuntJump(): void {
	const cancelStuntJump_result = Citizen.invokeNative<void>('0xE751ECBA8573687A', );
	return cancelStuntJump_result;
}