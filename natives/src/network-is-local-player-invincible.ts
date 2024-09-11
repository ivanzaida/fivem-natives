/**
 * NETWORK:NETWORK_IS_LOCAL_PLAYER_INVINCIBLE
 *
 * 0x72096E3388B1352A

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsLocalPlayerInvincible(): boolean {
	const networkIsLocalPlayerInvincible_result = Citizen.invokeNative<boolean>('0x72096E3388B1352A', );
	return networkIsLocalPlayerInvincible_result;
}