import { PlayerIndex } from '@ivanzaida/structures'

/**
 * OBJECT:IS_PLAYER_PARTIALLY_INSIDE_GARAGE
 *
 * 0x3DF64ECB2401B9C1

 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {PlayerIndex} player
 * @param {number} box
 * @returns {boolean}  
 */
export function isPlayerPartiallyInsideGarage(garageHash: number, player: PlayerIndex, box: number = 1): boolean {
	const isPlayerPartiallyInsideGarage_result = Citizen.invokeNative<boolean>('0x3DF64ECB2401B9C1', garageHash, player, box);
	return isPlayerPartiallyInsideGarage_result;
}