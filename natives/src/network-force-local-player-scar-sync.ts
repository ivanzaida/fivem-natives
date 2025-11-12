/**
 * NETWORK:NETWORK_FORCE_LOCAL_PLAYER_SCAR_SYNC
 *
 * 0xBF561BB44F8AFA5C

 * 
 * Forces a sync update of the player scar data to all remote players - THIS IS A VERY BANDWIDTH INTENSIVE FUNCTION - PLEASE USE WITH CARE
 * 
 * NETWORK_F[I-O]
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkForceLocalPlayerScarSync(): void {
	const networkForceLocalPlayerScarSync_result = Citizen.invokeNative<void>('0xBF561BB44F8AFA5C', );
	return networkForceLocalPlayerScarSync_result;
}