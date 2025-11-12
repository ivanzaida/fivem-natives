/**
 * STREAMING:IPL_GROUP_SWAP_IS_READY
 *
 * 0xE2B94989E87636A6

 * 
 * indicates that the end state IPL group assets are all in memory and the swap is ready to be finished
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function iplGroupSwapIsReady(): boolean {
	const iplGroupSwapIsReady_result = Citizen.invokeNative<boolean>('0xE2B94989E87636A6', );
	return iplGroupSwapIsReady_result;
}