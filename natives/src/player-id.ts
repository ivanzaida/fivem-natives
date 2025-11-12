import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:PLAYER_ID
 *
 * 0x259BE71D8A81D4FA

 * 
 * This returns YOUR 'identity' as a Player type.
 * 
 * Always returns 0 in story mode.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {PlayerIndex}  
 */
export function playerId(): PlayerIndex {
	const playerId_result = Citizen.invokeNative<PlayerIndex>('0x259BE71D8A81D4FA', );
	return playerId_result;
}