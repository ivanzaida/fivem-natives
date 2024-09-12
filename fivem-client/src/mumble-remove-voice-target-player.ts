import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:MUMBLE_REMOVE_VOICE_TARGET_PLAYER
 *
 * 0x88CD646F

 * Removes the specified player from the user's voice targets.Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#_0x32C5355A)
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param {PlayerIndex} player The player index to remove from the target.
 */
export function mumbleRemoveVoiceTargetPlayer(targetId: number, player: PlayerIndex): void {
	const mumbleRemoveVoiceTargetPlayer_result = Citizen.invokeNative<void>('0x88CD646F', targetId, player);
	return mumbleRemoveVoiceTargetPlayer_result;
}