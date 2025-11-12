/**
 * STREAMING:IS_NEW_LOAD_SCENE_ACTIVE
 *
 * 0x787F8EE1F6FBDC6D

 * 
 * check if a new load scene is currently running
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isNewLoadSceneActive(): boolean {
	const isNewLoadSceneActive_result = Citizen.invokeNative<boolean>('0x787F8EE1F6FBDC6D', );
	return isNewLoadSceneActive_result;
}