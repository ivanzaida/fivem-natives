/**
 * PLAYER:GET_ACHIEVEMENT_PROGRESS
 *
 * 0xB3E8CE9ABB5AD331

 * 
 * For Steam.
 * Always returns 0 in retail version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} achievementId
 * @returns {number}  
 */
export function getAchievementProgress(achievementId: number): number {
	const getAchievementProgress_result = Citizen.invokeNative<number>('0xB3E8CE9ABB5AD331', achievementId);
	return getAchievementProgress_result;
}