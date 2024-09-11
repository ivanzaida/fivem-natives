/**
 * CFX:MUMBLE_CLEAR_VOICE_TARGET
 *
 * 0X8555DCBA

 * Clears the target list for the specified Mumble voice target ID.
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 */
export function mumbleClearVoiceTarget(targetId: number): void {
	const mumbleClearVoiceTarget_result = Citizen.invokeNative<void>('0X8555DCBA', targetId);
	return mumbleClearVoiceTarget_result;
}