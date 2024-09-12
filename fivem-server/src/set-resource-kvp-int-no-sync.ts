/**
 * CFX:SET_RESOURCE_KVP_INT_NO_SYNC
 *
 * 0x26AEB707

 * Nonsynchronous [SET_RESOURCE_KVP_INT](#_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#_0x5240DA5A).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to set
 * @param {number} value The value to write
 */
export function setResourceKvpIntNoSync(key: string, value: number): void {
	const setResourceKvpIntNoSync_result = Citizen.invokeNative<void>('0x26AEB707', key, value);
	return setResourceKvpIntNoSync_result;
}