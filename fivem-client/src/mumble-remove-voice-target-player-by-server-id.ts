/**
 * CFX:MUMBLE_REMOVE_VOICE_TARGET_PLAYER_BY_SERVER_ID
 *
 * 0x930BD34B

 * Removes the specified player from the user's voice targets.Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#_0x25F2B65F)
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param {number} serverId The player's server id to remove from the target.
 */
export function mumbleRemoveVoiceTargetPlayerByServerId(targetId: number, serverId: number): void {
	const mumbleRemoveVoiceTargetPlayerByServerId_result = Citizen.invokeNative<void>('0x930BD34B', targetId, serverId);
	return mumbleRemoveVoiceTargetPlayerByServerId_result;
}