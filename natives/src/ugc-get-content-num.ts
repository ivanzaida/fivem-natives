/**
 * NETWORK:UGC_GET_CONTENT_NUM
 *
 * 0xE5CECFB837D1F1B8

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function ugcGetContentNum(): number {
	const ugcGetContentNum_result = Citizen.invokeNative<number>('0xE5CECFB837D1F1B8', );
	return ugcGetContentNum_result;
}