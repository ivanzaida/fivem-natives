/**
 * HUD:SET_MP_GAMER_TAGS_POINT_HEALTH
 *
 * 0x3BB39BA279D65666

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {number} points
 * @param {number} maxPoints
 */
export function setMpGamerTagsPointHealth(playerNum: number, points: number, maxPoints: number): void {
	const setMpGamerTagsPointHealth_result = Citizen.invokeNative<void>('0x3BB39BA279D65666', playerNum, points, maxPoints);
	return setMpGamerTagsPointHealth_result;
}