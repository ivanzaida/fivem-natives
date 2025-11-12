/**
 * RECORDING:IS_REPLAY_AVAILABLE
 *
 * 0x0E46E59812BDC8B7

 * 
 * Returns true if the replay system is currently availiable
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isReplayAvailable(): boolean {
	const isReplayAvailable_result = Citizen.invokeNative<boolean>('0x0E46E59812BDC8B7', );
	return isReplayAvailable_result;
}