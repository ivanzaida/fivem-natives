/**
 * NETWORK:NETWORK_REGISTER_HOST_BROADCAST_VARIABLES
 *
 * 0x6F4A865F87C7A3AD

 * 
 * ------------------------------------------------------------------
 * @param {DataView} address [Ref]
 * @param {number} size
 * @param {string} debugName
 */
export function networkRegisterHostBroadcastVariables(address: DataView /* ptr */, size: number, debugName: string = null!): void {
	const networkRegisterHostBroadcastVariables_result = Citizen.invokeNative<void>('0x6F4A865F87C7A3AD', address, size, debugName);
	return networkRegisterHostBroadcastVariables_result;
}