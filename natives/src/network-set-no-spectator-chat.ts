/**
 * NETWORK:NETWORK_SET_NO_SPECTATOR_CHAT
 *
 * 0x651F95F7EDE35255

 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function networkSetNoSpectatorChat(override: boolean): void {
	const networkSetNoSpectatorChat_result = Citizen.invokeNative<void>('0x651F95F7EDE35255', override);
	return networkSetNoSpectatorChat_result;
}