/**
 * NETWORK:NETWORK_GET_LOCAL_SCENE_FROM_NETWORK_ID
 *
 * 0x643DC062EE904FCA

 * 
 * Returns a local synchronised scene ID (for use with single player synced scene commands) from the network ID created by
 * NETWORK_CREATE_SYNCHRONISED_SCENE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} networkSceneID
 * @returns {number}  
 */
export function networkGetLocalSceneFromNetworkId(networkSceneID: number): number {
	const networkGetLocalSceneFromNetworkId_result = Citizen.invokeNative<number>('0x643DC062EE904FCA', networkSceneID);
	return networkGetLocalSceneFromNetworkId_result;
}