/**
 * NETWORK:NETWORK_IS_MULTIPLAYER_DISABLED
 *
 * 0xB1839CEE630503F9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsMultiplayerDisabled(): boolean {
	const networkIsMultiplayerDisabled_result = Citizen.invokeNative<boolean>('0xB1839CEE630503F9', );
	return networkIsMultiplayerDisabled_result;
}