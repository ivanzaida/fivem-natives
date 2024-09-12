/**
 * CFX:MUMBLE_CLEAR_VOICE_TARGET_CHANNELS
 *
 * 0x5EA72E76

 * Clears channels from the target list for the specified Mumble voice target ID.
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 */
export function mumbleClearVoiceTargetChannels(targetId: number): void {
	const mumbleClearVoiceTargetChannels_result = Citizen.invokeNative<void>('0x5EA72E76', targetId);
	return mumbleClearVoiceTargetChannels_result;
}