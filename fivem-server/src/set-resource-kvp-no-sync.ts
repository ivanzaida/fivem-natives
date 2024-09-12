/**
 * CFX:SET_RESOURCE_KVP_NO_SYNC
 *
 * 0xCF9A2FF

 * Nonsynchronous [SET_RESOURCE_KVP](#_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#_0x5240DA5A).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to set
 * @param {string} value The value to write
 */
export function setResourceKvpNoSync(key: string, value: string): void {
	const setResourceKvpNoSync_result = Citizen.invokeNative<void>('0xCF9A2FF', key, value);
	return setResourceKvpNoSync_result;
}