/**
 * CUTSCENE:IS_CUTSCENE_ACTIVE
 *
 * 0x0CB7695268A7F50F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCutsceneActive(): boolean {
	const isCutsceneActive_result = Citizen.invokeNative<boolean>('0x0CB7695268A7F50F', );
	return isCutsceneActive_result;
}