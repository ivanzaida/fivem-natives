/**
 * NETWORK:UGC_PUBLISH
 *
 * 0x29D58EEB6D24D5FB

 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {string} szBaseContentID
 * @param {string} szContentType
 * @returns {boolean}  
 */
export function ugcPublish(szContentID: string, szBaseContentID: string, szContentType: string): boolean {
	const ugcPublish_result = Citizen.invokeNative<boolean>('0x29D58EEB6D24D5FB', szContentID, szBaseContentID, szContentType);
	return ugcPublish_result;
}