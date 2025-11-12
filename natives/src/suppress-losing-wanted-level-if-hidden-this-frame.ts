import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SUPPRESS_LOSING_WANTED_LEVEL_IF_HIDDEN_THIS_FRAME
 *
 * 0x75690DF4B79CDDCC

 * 
 * This has been found in use in the decompiled files.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function suppressLosingWantedLevelIfHiddenThisFrame(player: PlayerIndex): void {
	const suppressLosingWantedLevelIfHiddenThisFrame_result = Citizen.invokeNative<void>('0x75690DF4B79CDDCC', player);
	return suppressLosingWantedLevelIfHiddenThisFrame_result;
}