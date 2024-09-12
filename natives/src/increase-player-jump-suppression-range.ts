import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:INCREASE_PLAYER_JUMP_SUPPRESSION_RANGE
 *
 * 0x2B5801E768BECF3C

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function increasePlayerJumpSuppressionRange(player: PlayerIndex): void {
	const increasePlayerJumpSuppressionRange_result = Citizen.invokeNative<void>('0x2B5801E768BECF3C', player);
	return increasePlayerJumpSuppressionRange_result;
}