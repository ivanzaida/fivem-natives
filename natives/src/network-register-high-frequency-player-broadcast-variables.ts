/**
 * NETWORK:NETWORK_REGISTER_HIGH_FREQUENCY_PLAYER_BROADCAST_VARIABLES
 *
 * 0x2F0F5E0292A89B1C

 * 
 * Registers the variables for each player running the script
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
export function networkRegisterHighFrequencyPlayerBroadcastVariables(address: DataView /* ptr */, size: number, debugName: string = null!): void {
	const networkRegisterHighFrequencyPlayerBroadcastVariables_result = Citizen.invokeNative<void>('0x2F0F5E0292A89B1C', address, size, debugName);
	return networkRegisterHighFrequencyPlayerBroadcastVariables_result;
}