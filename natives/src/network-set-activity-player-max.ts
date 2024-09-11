/**
 * NETWORK:NETWORK_SET_ACTIVITY_PLAYER_MAX
 *
 * 0xE637CC36B406C3BD

 * 
 * ------------------------------------------------------------------
 * @param {number} playerMax
 */
export function networkSetActivityPlayerMax(playerMax: number): void {
	const networkSetActivityPlayerMax_result = Citizen.invokeNative<void>('0xE637CC36B406C3BD', playerMax);
	return networkSetActivityPlayerMax_result;
}