import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:MUMBLE_ADD_VOICE_TARGET_PLAYER
 *
 * 0X32C5355A

 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * 
 * ------------------------------------------------------------------
 * @param {number} targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param {PlayerIndex} player A game player index.
 */
export function mumbleAddVoiceTargetPlayer(targetId: number, player: PlayerIndex): void {
	const mumbleAddVoiceTargetPlayer_result = Citizen.invokeNative<void>('0X32C5355A', targetId, player);
	return mumbleAddVoiceTargetPlayer_result;
}