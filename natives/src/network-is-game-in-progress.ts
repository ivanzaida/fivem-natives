/**
 * NETWORK:NETWORK_IS_GAME_IN_PROGRESS
 *
 * 0x76CD105BCAC6EB9F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsGameInProgress(): boolean {
	const networkIsGameInProgress_result = Citizen.invokeNative<boolean>('0x76CD105BCAC6EB9F', );
	return networkIsGameInProgress_result;
}