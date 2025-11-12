/**
 * STREAMING:IS_SWITCH_TO_MULTI_FIRSTPART_FINISHED
 *
 * 0x846BCB82A586E3AA

 * 
 * returns true if ascent has finished (so it is OK to display multiplayer menu etc)
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSwitchToMultiFirstpartFinished(): boolean {
	const isSwitchToMultiFirstpartFinished_result = Citizen.invokeNative<boolean>('0x846BCB82A586E3AA', );
	return isSwitchToMultiFirstpartFinished_result;
}