/**
 * NETWORK:UGC_DID_QUERY_CREATORS_SUCCEED
 *
 * 0xA447FE863BC5F3D0

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcDidQueryCreatorsSucceed(): boolean {
	const ugcDidQueryCreatorsSucceed_result = Citizen.invokeNative<boolean>('0xA447FE863BC5F3D0', );
	return ugcDidQueryCreatorsSucceed_result;
}