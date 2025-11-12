/**
 * STREAMING:IPL_GROUP_SWAP_IS_ACTIVE
 *
 * 0x808A7B80951975C3

 * 
 * indicates that there is a scripted IPL group swap active
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function iplGroupSwapIsActive(): boolean {
	const iplGroupSwapIsActive_result = Citizen.invokeNative<boolean>('0x808A7B80951975C3', );
	return iplGroupSwapIsActive_result;
}