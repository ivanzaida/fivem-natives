/**
 * CAM:SET_USE_HI_DOF_ON_SYNCED_SCENE_THIS_UPDATE
 *
 * 0xB6D9A8668A9B769C

 * 
 * Only used in R Script fm_mission_controller_2020
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setUseHiDofOnSyncedSceneThisUpdate(): void {
	const setUseHiDofOnSyncedSceneThisUpdate_result = Citizen.invokeNative<void>('0xB6D9A8668A9B769C', );
	return setUseHiDofOnSyncedSceneThisUpdate_result;
}