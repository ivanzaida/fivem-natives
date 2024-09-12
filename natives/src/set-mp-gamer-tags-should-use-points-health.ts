/**
 * HUD:SET_MP_GAMER_TAGS_SHOULD_USE_POINTS_HEALTH
 *
 * 0x9AADBEC7664AF43A

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {boolean} usePointsHealth
 */
export function setMpGamerTagsShouldUsePointsHealth(playerNum: number, usePointsHealth: boolean): void {
	const setMpGamerTagsShouldUsePointsHealth_result = Citizen.invokeNative<void>('0x9AADBEC7664AF43A', playerNum, usePointsHealth);
	return setMpGamerTagsShouldUsePointsHealth_result;
}