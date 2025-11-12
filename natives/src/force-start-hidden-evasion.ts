import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:FORCE_START_HIDDEN_EVASION
 *
 * 0x6B6014A58DEBCCF3

 * 
 * This has been found in use in the decompiled files.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function forceStartHiddenEvasion(player: PlayerIndex): void {
	const forceStartHiddenEvasion_result = Citizen.invokeNative<void>('0x6B6014A58DEBCCF3', player);
	return forceStartHiddenEvasion_result;
}