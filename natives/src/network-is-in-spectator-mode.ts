/**
 * NETWORK:NETWORK_IS_IN_SPECTATOR_MODE
 *
 * 0xAD15761928FCF79C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsInSpectatorMode(): boolean {
	const networkIsInSpectatorMode_result = Citizen.invokeNative<boolean>('0xAD15761928FCF79C', );
	return networkIsInSpectatorMode_result;
}