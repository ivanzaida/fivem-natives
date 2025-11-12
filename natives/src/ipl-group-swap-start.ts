/**
 * STREAMING:IPL_GROUP_SWAP_START
 *
 * 0x9D8913BC7BA1265D

 * 
 * Allows user to pre-stream the end state IPL group. once it is ready the swap can be performed. Once a swap
 * has been started, it must either be cancelled or finished to release the streaming resources.
 * starts pre-streaming for a seamless swap from first IPL group to second
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} iplGroupBefore
 * @param {string} iplGroupAfter
 */
export function iplGroupSwapStart(iplGroupBefore: string, iplGroupAfter: string): void {
	const iplGroupSwapStart_result = Citizen.invokeNative<void>('0x9D8913BC7BA1265D', iplGroupBefore, iplGroupAfter);
	return iplGroupSwapStart_result;
}