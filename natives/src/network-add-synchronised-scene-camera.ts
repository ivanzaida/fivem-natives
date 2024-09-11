/**
 * NETWORK:NETWORK_ADD_SYNCHRONISED_SCENE_CAMERA
 *
 * 0x9E6111F1B7E0986E

 * 
 * ------------------------------------------------------------------
 * @param {number} networkSceneID
 * @param {string} animDictionary
 * @param {string} anim
 */
export function networkAddSynchronisedSceneCamera(networkSceneID: number, animDictionary: string, anim: string): void {
	const networkAddSynchronisedSceneCamera_result = Citizen.invokeNative<void>('0x9E6111F1B7E0986E', networkSceneID, animDictionary, anim);
	return networkAddSynchronisedSceneCamera_result;
}