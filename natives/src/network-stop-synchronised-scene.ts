/**
 * NETWORK:NETWORK_STOP_SYNCHRONISED_SCENE
 *
 * 0xF2E51EC84D76A2B6

 * 
 * ------------------------------------------------------------------
 * @param {number} networkSceneID
 */
export function networkStopSynchronisedScene(networkSceneID: number): void {
	const networkStopSynchronisedScene_result = Citizen.invokeNative<void>('0xF2E51EC84D76A2B6', networkSceneID);
	return networkStopSynchronisedScene_result;
}