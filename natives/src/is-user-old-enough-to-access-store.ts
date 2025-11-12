/**
 * NETWORK:IS_USER_OLD_ENOUGH_TO_ACCESS_STORE
 *
 * 0xB83285E02B6331A7

 * 
 * Retrieves if this user has permissions to use the store
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isUserOldEnoughToAccessStore(): boolean {
	const isUserOldEnoughToAccessStore_result = Citizen.invokeNative<boolean>('0xB83285E02B6331A7', );
	return isUserOldEnoughToAccessStore_result;
}