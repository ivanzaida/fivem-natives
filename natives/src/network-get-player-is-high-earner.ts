/**
 * MONEY:NETWORK_GET_PLAYER_IS_HIGH_EARNER
 *
 * 0xFEC8CAEC2F9A60B5

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkGetPlayerIsHighEarner(): boolean {
	const networkGetPlayerIsHighEarner_result = Citizen.invokeNative<boolean>('0xFEC8CAEC2F9A60B5', );
	return networkGetPlayerIsHighEarner_result;
}