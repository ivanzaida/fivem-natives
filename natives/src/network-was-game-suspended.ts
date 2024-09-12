/**
 * NETWORK:NETWORK_WAS_GAME_SUSPENDED
 *
 * 0xC8D0FF9225C03E0E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkWasGameSuspended(): boolean {
	const networkWasGameSuspended_result = Citizen.invokeNative<boolean>('0xC8D0FF9225C03E0E', );
	return networkWasGameSuspended_result;
}