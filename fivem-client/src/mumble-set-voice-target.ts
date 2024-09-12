/**
 * CFX:MUMBLE_SET_VOICE_TARGET
 *
 * 0X960A4A95

 * Sets the current Mumble voice target ID to broadcast voice to.
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive). 0 disables voice targets, and 31 is server loopback.
 */
export function mumbleSetVoiceTarget(targetId: number): void {
	const mumbleSetVoiceTarget_result = Citizen.invokeNative<void>('0X960A4A95', targetId);
	return mumbleSetVoiceTarget_result;
}