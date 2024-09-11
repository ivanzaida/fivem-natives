/**
 * NETWORK:NETWORK_IS_ACTIVITY_SPECTATOR
 *
 * 0x8B6869C5EC0F62C3

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsActivitySpectator(): boolean {
	const networkIsActivitySpectator_result = Citizen.invokeNative<boolean>('0x8B6869C5EC0F62C3', );
	return networkIsActivitySpectator_result;
}