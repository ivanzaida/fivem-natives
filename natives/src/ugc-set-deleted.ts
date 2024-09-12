/**
 * NETWORK:UGC_SET_DELETED
 *
 * 0x8FA5AF26CEA0CF0C

 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {boolean} isDeleted
 * @param {string} szContentType
 * @returns {boolean}  
 */
export function ugcSetDeleted(szContentID: string, isDeleted: boolean, szContentType: string): boolean {
	const ugcSetDeleted_result = Citizen.invokeNative<boolean>('0x8FA5AF26CEA0CF0C', szContentID, isDeleted, szContentType);
	return ugcSetDeleted_result;
}