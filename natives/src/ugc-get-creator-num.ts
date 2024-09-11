/**
 * NETWORK:UGC_GET_CREATOR_NUM
 *
 * 0x403513BADB247F14

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function ugcGetCreatorNum(): number {
	const ugcGetCreatorNum_result = Citizen.invokeNative<number>('0x403513BADB247F14', );
	return ugcGetCreatorNum_result;
}