/**
 * NETWORK:UGC_HAS_DESCRIPTION_REQUEST_FINISHED
 *
 * 0x28F3FD2263FCE777

 * 
 * ------------------------------------------------------------------
 * @param {number} hash
 * @returns {boolean}  
 */
export function ugcHasDescriptionRequestFinished(hash: number): boolean {
	const ugcHasDescriptionRequestFinished_result = Citizen.invokeNative<boolean>('0x28F3FD2263FCE777', hash);
	return ugcHasDescriptionRequestFinished_result;
}