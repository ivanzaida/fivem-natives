import { PlayerIndex, EWrecklessType } from '@ivanzaida/structures'

/**
 * PLAYER:GET_IS_PLAYER_DRIVING_WRECKLESS
 *
 * 0x4A3BD6441F87BBF1

 * 
 * Only 1 occurrence. p1 was 2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EWrecklessType} wreckless
 * @returns {boolean}  
 */
export function getIsPlayerDrivingWreckless(player: PlayerIndex, wreckless: EWrecklessType | number): boolean {
	const getIsPlayerDrivingWreckless_result = Citizen.invokeNative<boolean>('0x4A3BD6441F87BBF1', player, wreckless);
	return getIsPlayerDrivingWreckless_result;
}