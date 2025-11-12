/**
 * NETWORK:IS_STORE_AVAILABLE_TO_USER
 *
 * 0xD553FC562BDEBE1E

 * 
 * Retrieves if this user has permissions to use the store
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isStoreAvailableToUser(): boolean {
	const isStoreAvailableToUser_result = Citizen.invokeNative<boolean>('0xD553FC562BDEBE1E', );
	return isStoreAvailableToUser_result;
}