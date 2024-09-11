/**
 * MISC:NETWORK_SET_SCRIPT_IS_SAFE_FOR_NETWORK_GAME
 *
 * 0x51CC1333A10C4E09

 * 
 * ------------------------------------------------------------------
 */
export function networkSetScriptIsSafeForNetworkGame(): void {
	const networkSetScriptIsSafeForNetworkGame_result = Citizen.invokeNative<void>('0x51CC1333A10C4E09', );
	return networkSetScriptIsSafeForNetworkGame_result;
}