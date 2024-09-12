/**
 * NETWORK:UGC_GET_CONTENT_TOTAL
 *
 * 0x1EE4CB0B5FD3927E

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function ugcGetContentTotal(): number {
	const ugcGetContentTotal_result = Citizen.invokeNative<number>('0x1EE4CB0B5FD3927E', );
	return ugcGetContentTotal_result;
}