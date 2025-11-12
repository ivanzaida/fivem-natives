import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_RIDING_TRAIN
 *
 * 0x94CC17D69C81292D

 * 
 * Returns true if the player is riding a train.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerRidingTrain(player: PlayerIndex): boolean {
	const isPlayerRidingTrain_result = Citizen.invokeNative<boolean>('0x94CC17D69C81292D', player);
	return isPlayerRidingTrain_result;
}