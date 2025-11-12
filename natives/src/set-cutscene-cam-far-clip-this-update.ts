/**
 * CAM:SET_CUTSCENE_CAM_FAR_CLIP_THIS_UPDATE
 *
 * 0xF5EF5C15CE92F236

 * 
 * Hardcoded to only work in multiplayer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} farClip
 */
export function setCutsceneCamFarClipThisUpdate(farClip: number): void {
	const setCutsceneCamFarClipThisUpdate_result = Citizen.invokeNative<void>('0xF5EF5C15CE92F236', farClip);
	return setCutsceneCamFarClipThisUpdate_result;
}