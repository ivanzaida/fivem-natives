/**
 * CFX:MUMBLE_CLEAR_VOICE_TARGET_PLAYERS
 *
 * 0x912E21DA

 * Clears players from the target list for the specified Mumble voice target ID.
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 */
export function mumbleClearVoiceTargetPlayers(targetId: number): void {
	const mumbleClearVoiceTargetPlayers_result = Citizen.invokeNative<void>('0x912E21DA', targetId);
	return mumbleClearVoiceTargetPlayers_result;
}