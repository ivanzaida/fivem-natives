/**
 * SOCIALCLUB:SC_HAS_ACHIEVEMENT_BEEN_PASSED
 *
 * 0xF841B04B93D27BA9

 * 
 * Same as HAS_ACHIEVEMENT_BEEN_PASSED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} id
 * @returns {boolean}  
 */
export function scHasAchievementBeenPassed(id: number): boolean {
	const scHasAchievementBeenPassed_result = Citizen.invokeNative<boolean>('0xF841B04B93D27BA9', id);
	return scHasAchievementBeenPassed_result;
}