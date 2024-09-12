/**
 * CFX:MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID
 *
 * 0X25F2B65F

 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param {number} serverId The player's server id.
 */
export function mumbleAddVoiceTargetPlayerByServerId(targetId: number, serverId: number): void {
	const mumbleAddVoiceTargetPlayerByServerId_result = Citizen.invokeNative<void>('0X25F2B65F', targetId, serverId);
	return mumbleAddVoiceTargetPlayerByServerId_result;
}