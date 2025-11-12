/**
 * STREAMING:IS_NEW_LOAD_SCENE_LOADED
 *
 * 0x9E2D35FA908F57B4

 * 
 * check if a new load scene is fully loaded. this it never guaranteed to eventually return true
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isNewLoadSceneLoaded(): boolean {
	const isNewLoadSceneLoaded_result = Citizen.invokeNative<boolean>('0x9E2D35FA908F57B4', );
	return isNewLoadSceneLoaded_result;
}