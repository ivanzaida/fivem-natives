/**
 * STREAMING:IPL_GROUP_SWAP_CANCEL
 *
 * 0xF9B380FD07A8B67E

 * 
 * In certain cases (time out, z-skip, script termination etc) it may be desirable to simply abandon the active
 * IPL group swap and release its streaming resources.
 * abandon a currently active IPL group swap
 * 
 * 
 * ------------------------------------------------------------------
 */
export function iplGroupSwapCancel(): void {
	const iplGroupSwapCancel_result = Citizen.invokeNative<void>('0xF9B380FD07A8B67E', );
	return iplGroupSwapCancel_result;
}