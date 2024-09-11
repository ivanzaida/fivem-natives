/**
 * NETWORK:UGC_GET_CREATORS_BY_USER_ID
 *
 * 0x2D6CAE334C3034FD

 * 
 * ------------------------------------------------------------------
 * @param {string} szUserID
 * @param {string} szContentType
 * @returns {boolean}  
 */
export function ugcGetCreatorsByUserId(szUserID: string, szContentType: string): boolean {
	const ugcGetCreatorsByUserId_result = Citizen.invokeNative<boolean>('0x2D6CAE334C3034FD', szUserID, szContentType);
	return ugcGetCreatorsByUserId_result;
}