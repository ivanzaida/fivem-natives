/**
 * CFX:SET_RESOURCE_KVP_FLOAT_NO_SYNC
 *
 * 0x3517BFBE

 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#_0x5240DA5A).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to set
 * @param {number} value The value to write
 */
export function setResourceKvpFloatNoSync(key: string, value: number): void {
	const setResourceKvpFloatNoSync_result = Citizen.invokeNative<void>('0x3517BFBE', key, value);
	return setResourceKvpFloatNoSync_result;
}