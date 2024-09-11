/**
 * NETWORK:UGC_DID_MODIFY_SUCCEED
 *
 * 0x7911A5D34DD65F5B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcDidModifySucceed(): boolean {
	const ugcDidModifySucceed_result = Citizen.invokeNative<boolean>('0x7911A5D34DD65F5B', );
	return ugcDidModifySucceed_result;
}