/**
 * CFX:MUMBLE_ADD_VOICE_TARGET_CHANNEL
 *
 * 0x4D386C9E

 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param {number} channel A game voice channel ID.
 */
export function mumbleAddVoiceTargetChannel(targetId: number, channel: number): void {
	const mumbleAddVoiceTargetChannel_result = Citizen.invokeNative<void>('0x4D386C9E', targetId, channel);
	return mumbleAddVoiceTargetChannel_result;
}