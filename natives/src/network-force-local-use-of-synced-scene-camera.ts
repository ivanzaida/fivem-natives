/**
 * NETWORK:NETWORK_FORCE_LOCAL_USE_OF_SYNCED_SCENE_CAMERA
 *
 * 0xB505DDE34E5179B8

 * 
 * Forces the local use of any camera attached to the synchronised scene to play, even if the local
 * player ped has not been added to the scene. If this is not called the camera will only animate for
 * scenes with the player ped involved. This only affects the local player as this data is not synced
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} networkSceneID
 */
export function networkForceLocalUseOfSyncedSceneCamera(networkSceneID: number): void {
	const networkForceLocalUseOfSyncedSceneCamera_result = Citizen.invokeNative<void>('0xB505DDE34E5179B8', networkSceneID);
	return networkForceLocalUseOfSyncedSceneCamera_result;
}