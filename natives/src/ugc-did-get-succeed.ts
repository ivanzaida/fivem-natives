/**
 * NETWORK:UGC_DID_GET_SUCCEED
 *
 * 0xB615B19E3B1CB800

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcDidGetSucceed(): boolean {
	const ugcDidGetSucceed_result = Citizen.invokeNative<boolean>('0xB615B19E3B1CB800', );
	return ugcDidGetSucceed_result;
}