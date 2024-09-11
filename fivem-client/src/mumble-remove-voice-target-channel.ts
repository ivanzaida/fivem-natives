/**
 * CFX:MUMBLE_REMOVE_VOICE_TARGET_CHANNEL
 *
 * 0X268DB867

 * Removes the specified voice channel from the user's voice targets.Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#_0x4D386C9E)
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param {number} channel The game voice channel ID to remove from the target.
 */
export function mumbleRemoveVoiceTargetChannel(targetId: number, channel: number): void {
	const mumbleRemoveVoiceTargetChannel_result = Citizen.invokeNative<void>('0X268DB867', targetId, channel);
	return mumbleRemoveVoiceTargetChannel_result;
}