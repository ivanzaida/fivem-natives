/**
 * MISC:GET_HASH_KEY
 *
 * 0x70E57E9927B6BA58

 * 
 * This native converts its past string to hash. It is hashed using jenkins one at a time method.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} inputString
 * @returns {number}  
 */
export function getHashKey(inputString: string): number {
	const getHashKey_result = Citizen.invokeNative<number>('0x70E57E9927B6BA58', inputString);
	return getHashKey_result;
}