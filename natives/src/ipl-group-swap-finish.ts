/**
 * STREAMING:IPL_GROUP_SWAP_FINISH
 *
 * 0x32BBBA949DBE76E8

 * 
 * Returns true if the currently active script-owned IPL group swap is ready to perform the swap
 * ie the end state IPL group has all its assets in memory. This disables the start state and enables the end state.
 * complete an active IPL group swap that is ready
 * 
 * 
 * ------------------------------------------------------------------
 */
export function iplGroupSwapFinish(): void {
	const iplGroupSwapFinish_result = Citizen.invokeNative<void>('0x32BBBA949DBE76E8', );
	return iplGroupSwapFinish_result;
}