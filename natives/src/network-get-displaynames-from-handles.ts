/**
 * NETWORK:NETWORK_GET_DISPLAYNAMES_FROM_HANDLES
 *
 * 0xD61DBE5217500D72

 * 
 * Takes a requestId issued by NETWORK_DISPLAYNAMES_FROM_HANDLES_START.
 * Returns an error code (-1=failed, 0=succeeded, 1=pending). Upon succeeding, displayNames is populated.
 * If pending is returned, then the request is still retrieving display names.
 * The requestId is no longer valid after this function returns succeeded or failed
 * (the request is considered completed and is added back to the request pool so it can be reused).
 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} requestId
 * @param {string} displayNames
 * @param {number} count
 * @returns {number}  
 */
export function networkGetDisplaynamesFromHandles(requestId: number, displayNames: string, count: number): number {
	const networkGetDisplaynamesFromHandles_result = Citizen.invokeNative<number>('0xD61DBE5217500D72', requestId, displayNames, count);
	return networkGetDisplaynamesFromHandles_result;
}