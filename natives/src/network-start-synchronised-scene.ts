/**
 * NETWORK:NETWORK_START_SYNCHRONISED_SCENE
 *
 * 0xE7101255AD6F1952

 * 
 * ------------------------------------------------------------------
 * @param {number} networkSceneID
 */
export function networkStartSynchronisedScene(networkSceneID: number): void {
	const networkStartSynchronisedScene_result = Citizen.invokeNative<void>('0xE7101255AD6F1952', networkSceneID);
	return networkStartSynchronisedScene_result;
}