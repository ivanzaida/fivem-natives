/**
 * CAM:BYPASS_CUTSCENE_CAM_RENDERING_THIS_UPDATE
 *
 * 0xD20491305F26874C

 * 
 * ------------------------------------------------------------------
 */
export function bypassCutsceneCamRenderingThisUpdate(): void {
	const bypassCutsceneCamRenderingThisUpdate_result = Citizen.invokeNative<void>('0xD20491305F26874C', );
	return bypassCutsceneCamRenderingThisUpdate_result;
}