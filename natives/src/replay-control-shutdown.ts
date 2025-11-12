/**
 * REPLAY:REPLAY_CONTROL_SHUTDOWN
 *
 * 0xCE9266D07017085A

 * 
 * Sets (almost, not sure) all Rockstar Editor values (bIsRecording etc) to 0.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function replayControlShutdown(): void {
	const replayControlShutdown_result = Citizen.invokeNative<void>('0xCE9266D07017085A', );
	return replayControlShutdown_result;
}