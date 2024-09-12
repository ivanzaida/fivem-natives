/**
 * NETWORK:UGC_DID_CREATE_SUCCEED
 *
 * 0x368A167655B5B44A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcDidCreateSucceed(): boolean {
	const ugcDidCreateSucceed_result = Citizen.invokeNative<boolean>('0x368A167655B5B44A', );
	return ugcDidCreateSucceed_result;
}