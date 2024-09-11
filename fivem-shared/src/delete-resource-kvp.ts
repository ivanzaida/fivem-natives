/**
 * CFX:DELETE_RESOURCE_KVP
 *
 * 0X7389B5DF

 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to delete
 */
export function deleteResourceKvp(key: string): void {
	const deleteResourceKvp_result = Citizen.invokeNative<void>('0X7389B5DF', key);
	return deleteResourceKvp_result;
}