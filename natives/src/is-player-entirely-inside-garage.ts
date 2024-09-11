import { PlayerIndex } from '@ivanzaida/structures'

/**
 * OBJECT:IS_PLAYER_ENTIRELY_INSIDE_GARAGE
 *
 * 0xA9BDD6C662512CA7

 * 
 * ------------------------------------------------------------------
 * @param {number} garageHash
 * @param {PlayerIndex} player
 * @param {number} margin
 * @param {number} box
 * @returns {boolean}  
 */
export function isPlayerEntirelyInsideGarage(garageHash: number, player: PlayerIndex, margin: number = 0, box: number = 1): boolean {
	const isPlayerEntirelyInsideGarage_result = Citizen.invokeNative<boolean>('0xA9BDD6C662512CA7', garageHash, player, margin, box);
	return isPlayerEntirelyInsideGarage_result;
}