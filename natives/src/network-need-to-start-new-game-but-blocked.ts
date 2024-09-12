/**
 * NETWORK:NETWORK_NEED_TO_START_NEW_GAME_BUT_BLOCKED
 *
 * 0xEF3203CB3CD405D3

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkNeedToStartNewGameButBlocked(): boolean {
	const networkNeedToStartNewGameButBlocked_result = Citizen.invokeNative<boolean>('0xEF3203CB3CD405D3', );
	return networkNeedToStartNewGameButBlocked_result;
}