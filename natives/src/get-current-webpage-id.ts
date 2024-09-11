/**
 * HUD:GET_CURRENT_WEBPAGE_ID
 *
 * 0x00216940DBDC6A74

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCurrentWebpageId(): number {
	const getCurrentWebpageId_result = Citizen.invokeNative<number>('0x00216940DBDC6A74', );
	return getCurrentWebpageId_result;
}