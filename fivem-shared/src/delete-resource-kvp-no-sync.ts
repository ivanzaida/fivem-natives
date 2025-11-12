/**
 * CFX:DELETE_RESOURCE_KVP_NO_SYNC
 *
 * 0x4152C90

 * Nonsynchronous [DELETE_RESOURCE_KVP](#_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#_0x5240DA5A).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to delete
 */
export function deleteResourceKvpNoSync(key: string): void {
	const deleteResourceKvpNoSync_result = Citizen.invokeNative<void>('0x4152C90', key);
	return deleteResourceKvpNoSync_result;
}