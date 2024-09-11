/**
 * RECORDING:REPLAY_STOP_EVENT
 *
 * 0x3B327805C3CAF8DC

 * 
 * ------------------------------------------------------------------
 */
export function replayStopEvent(): void {
	const replayStopEvent_result = Citizen.invokeNative<void>('0x3B327805C3CAF8DC', );
	return replayStopEvent_result;
}