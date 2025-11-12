/**
 * PLAYER:HAS_ACHIEVEMENT_BEEN_PASSED
 *
 * 0x37088D2C63AC4C01

 * 
 * See GIVE_ACHIEVEMENT_TO_PLAYER
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} achievementId
 * @returns {boolean}  
 */
export function hasAchievementBeenPassed(achievementId: number): boolean {
	const hasAchievementBeenPassed_result = Citizen.invokeNative<boolean>('0x37088D2C63AC4C01', achievementId);
	return hasAchievementBeenPassed_result;
}