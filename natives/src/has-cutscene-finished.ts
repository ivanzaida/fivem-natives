/**
 * CUTSCENE:HAS_CUTSCENE_FINISHED
 *
 * 0xC9BA6D804FA4FAAA

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasCutsceneFinished(): boolean {
	const hasCutsceneFinished_result = Citizen.invokeNative<boolean>('0xC9BA6D804FA4FAAA', );
	return hasCutsceneFinished_result;
}