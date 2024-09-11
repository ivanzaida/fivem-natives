/**
 * CFX:PROFILER_IS_RECORDING
 *
 * 0XF8B7D7BB

 * Returns true if the profiler is active.
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  True or false.
 */
export function profilerIsRecording(): boolean {
	const profilerIsRecording_result = Citizen.invokeNative<boolean>('0XF8B7D7BB', );
	return profilerIsRecording_result;
}