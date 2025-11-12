/**
 * CUTSCENE:HAS_CUTSCENE_CUT_THIS_FRAME
 *
 * 0xF1FEB57E542C41F1

 * 
 * Possibly HAS_CUTSCENE_CUT_THIS_FRAME, needs more research.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasCutsceneCutThisFrame(): boolean {
	const hasCutsceneCutThisFrame_result = Citizen.invokeNative<boolean>('0xF1FEB57E542C41F1', );
	return hasCutsceneCutThisFrame_result;
}