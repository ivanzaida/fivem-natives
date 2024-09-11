/**
 * NETWORK:UGC_IS_DESCRIPTION_REQUEST_IN_PROGRESS
 *
 * 0x66CB39FD84C5ED21

 * 
 * ------------------------------------------------------------------
 * @param {number} hash
 * @returns {boolean}  
 */
export function ugcIsDescriptionRequestInProgress(hash: number): boolean {
	const ugcIsDescriptionRequestInProgress_result = Citizen.invokeNative<boolean>('0x66CB39FD84C5ED21', hash);
	return ugcIsDescriptionRequestInProgress_result;
}