/**
 * STREAMING:SET_SRL_POST_CUTSCENE_CAMERA
 *
 * 0xEB6D4B648B4DD588

 * 
 * Call this at any time before or during a cutscene (but ideally at least 5 seconds before it ends) to indicate where
 * the camera will be after the cutscene is over. The streaming system will make sure that scene is in memory before the
 * cutscene switches back to normal gameplay.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} camPosX
 * @param {number} camPosY
 * @param {number} camPosZ
 * @param {number} camDirX
 * @param {number} camDirY
 * @param {number} camDirZ
 */
export function setSrlPostCutsceneCamera(camPosX: number, camPosY: number, camPosZ: number, camDirX: number, camDirY: number, camDirZ: number): void {
	const setSrlPostCutsceneCamera_result = Citizen.invokeNative<void>('0xEB6D4B648B4DD588', camPosX, camPosY, camPosZ, camDirX, camDirY, camDirZ);
	return setSrlPostCutsceneCamera_result;
}