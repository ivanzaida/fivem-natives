/**
 * NETWORK:NETWORK_REGISTER_HIGH_FREQUENCY_HOST_BROADCAST_VARIABLES
 *
 * 0x2867D5E1AD29963D

 * 
 * Registers the variables that the host alters and that the clients need to be updated on.
 * This high frequency data will be updated every frame and send out updates as soon as possible.
 * This feature is currently restricted to arrays of 20 script vars or less.
 * Please only use this when strictly necessary!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {DataView} address [Ref]
 * @param {number} size
 * @param {string} debugName
 */
export function networkRegisterHighFrequencyHostBroadcastVariables(address: DataView /* ptr */, size: number, debugName: string = null!): void {
	const networkRegisterHighFrequencyHostBroadcastVariables_result = Citizen.invokeNative<void>('0x2867D5E1AD29963D', address, size, debugName);
	return networkRegisterHighFrequencyHostBroadcastVariables_result;
}