/**
 * STREAMING:NEW_LOAD_SCENE_STOP
 *
 * 0x6981C3213B841071

 * 
 * stops the new load scene, if it is active
 * 
 * 
 * ------------------------------------------------------------------
 */
export function newLoadSceneStop(): void {
	const newLoadSceneStop_result = Citizen.invokeNative<void>('0x6981C3213B841071', );
	return newLoadSceneStop_result;
}