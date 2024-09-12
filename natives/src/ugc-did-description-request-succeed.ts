/**
 * NETWORK:UGC_DID_DESCRIPTION_REQUEST_SUCCEED
 *
 * 0x16C0B173B472AF71

 * 
 * ------------------------------------------------------------------
 * @param {number} hash
 * @returns {boolean}  
 */
export function ugcDidDescriptionRequestSucceed(hash: number): boolean {
	const ugcDidDescriptionRequestSucceed_result = Citizen.invokeNative<boolean>('0x16C0B173B472AF71', hash);
	return ugcDidDescriptionRequestSucceed_result;
}