/**
 * NETWORK:IS_COMMERCE_STORE_OPEN
 *
 * 0x2B8BAF9BA2A3D36B

 * 
 * Returns if the commerce store has been opened (includes both ad and main screen)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCommerceStoreOpen(): boolean {
	const isCommerceStoreOpen_result = Citizen.invokeNative<boolean>('0x2B8BAF9BA2A3D36B', );
	return isCommerceStoreOpen_result;
}