/**
 * CFX:GET_HASH_KEY
 *
 * 0x98EFF6F1

 * 
 * This native converts its past string to hash. It is hashed using jenkins one at a time method.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} model
 * @returns {number}  
 */
export function getHashKey(model: string): number {
	const getHashKey_result = Citizen.invokeNative<number>('0x98EFF6F1', model);
	return getHashKey_result;
}