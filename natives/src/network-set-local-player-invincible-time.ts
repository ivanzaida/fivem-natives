/**
 * NETWORK:NETWORK_SET_LOCAL_PLAYER_INVINCIBLE_TIME
 *
 * 0xC522FBE9CCC8C20E

 * 
 * ------------------------------------------------------------------
 * @param {number} invincibilityTime
 */
export function networkSetLocalPlayerInvincibleTime(invincibilityTime: number): void {
	const networkSetLocalPlayerInvincibleTime_result = Citizen.invokeNative<void>('0xC522FBE9CCC8C20E', invincibilityTime);
	return networkSetLocalPlayerInvincibleTime_result;
}