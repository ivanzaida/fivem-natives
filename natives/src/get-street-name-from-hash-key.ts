/**
 * HUD:GET_STREET_NAME_FROM_HASH_KEY
 *
 * 0x816A63C007D39838

 * 
 * This functions converts the hash of a street name into a readable string.
 * 
 * For how to get the hashes, see PATHFIND::GET_STREET_NAME_AT_COORD.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hashKeyOfStreetName
 * @returns {string}  
 */
export function getStreetNameFromHashKey(hashKeyOfStreetName: number): string {
	const getStreetNameFromHashKey_result = Citizen.invokeNative<string>('0x816A63C007D39838', hashKeyOfStreetName);
	return getStreetNameFromHashKey_result;
}