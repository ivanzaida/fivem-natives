/**
 * NETWORK:UGC_GET_CONTENT_HASH
 *
 * 0x7BC6776F828F022C

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function ugcGetContentHash(): number {
	const ugcGetContentHash_result = Citizen.invokeNative<number>('0x7BC6776F828F022C', );
	return ugcGetContentHash_result;
}