/**
 * PLAYER:SET_ACHIEVEMENT_PROGRESS
 *
 * 0xE3872E56266EDEDC

 * 
 * For Steam.
 * Does nothing and always returns false in the retail version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} achievementId
 * @param {number} progress
 * @returns {boolean}  
 */
export function setAchievementProgress(achievementId: number, progress: number): boolean {
	const setAchievementProgress_result = Citizen.invokeNative<boolean>('0xE3872E56266EDEDC', achievementId, progress);
	return setAchievementProgress_result;
}