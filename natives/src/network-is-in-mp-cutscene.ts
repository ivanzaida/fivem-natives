/**
 * NETWORK:NETWORK_IS_IN_MP_CUTSCENE
 *
 * 0x0721B5D4CF3ACD02

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsInMpCutscene(): boolean {
	const networkIsInMpCutscene_result = Citizen.invokeNative<boolean>('0x0721B5D4CF3ACD02', );
	return networkIsInMpCutscene_result;
}