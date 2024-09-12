/**
 * RECORDING:REPLAY_CANCEL_EVENT
 *
 * 0xD1CEC1802EBF7D03

 * 
 * ------------------------------------------------------------------
 */
export function replayCancelEvent(): void {
	const replayCancelEvent_result = Citizen.invokeNative<void>('0xD1CEC1802EBF7D03', );
	return replayCancelEvent_result;
}