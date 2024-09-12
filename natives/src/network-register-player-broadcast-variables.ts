/**
 * NETWORK:NETWORK_REGISTER_PLAYER_BROADCAST_VARIABLES
 *
 * 0x7B13DC83218D9AF5

 * 
 * ------------------------------------------------------------------
 * @param {DataView} address [Ref]
 * @param {number} size
 * @param {string} debugName
 */
export function networkRegisterPlayerBroadcastVariables(address: DataView /* ptr */, size: number, debugName: string = null!): void {
	const networkRegisterPlayerBroadcastVariables_result = Citizen.invokeNative<void>('0x7B13DC83218D9AF5', address, size, debugName);
	return networkRegisterPlayerBroadcastVariables_result;
}