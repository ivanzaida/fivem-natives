/**
 * CUTSCENE:IS_CUTSCENE_AUTHORIZED
 *
 * 0xAEF10EAFB97F5540

 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneName
 * @returns {boolean}  
 */
export function isCutsceneAuthorized(sceneName: string): boolean {
	const isCutsceneAuthorized_result = Citizen.invokeNative<boolean>('0xAEF10EAFB97F5540', sceneName);
	return isCutsceneAuthorized_result;
}