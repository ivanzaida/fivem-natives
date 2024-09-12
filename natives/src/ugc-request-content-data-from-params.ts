/**
 * NETWORK:UGC_REQUEST_CONTENT_DATA_FROM_PARAMS
 *
 * 0x7FD2990AF016795E

 * 
 * ------------------------------------------------------------------
 * @param {string} szContentType
 * @param {string} szContentID
 * @param {number} fileID
 * @param {number} fileVersion
 * @param {number} language
 * @returns {number}  
 */
export function ugcRequestContentDataFromParams(szContentType: string, szContentID: string, fileID: number, fileVersion: number, language: number): number {
	const ugcRequestContentDataFromParams_result = Citizen.invokeNative<number>('0x7FD2990AF016795E', szContentType, szContentID, fileID, fileVersion, language);
	return ugcRequestContentDataFromParams_result;
}