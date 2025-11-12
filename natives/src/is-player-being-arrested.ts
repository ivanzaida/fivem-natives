import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_BEING_ARRESTED
 *
 * 0x6652E84A43F51B8B

 * 
 * Return true while player is being arrested / busted.
 * 
 * If atArresting is set to 1, this function will return 1 when player is being arrested (while player is putting his hand up, but still have control)
 * 
 * If atArresting is set to 0, this function will return 1 only when the busted screen is shown.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} checkBustedTask If this is set to FALSE then we'll only rely on the player's game state, which is set to arrested
 * @returns {boolean}  
 */
export function isPlayerBeingArrested(player: PlayerIndex, checkBustedTask: boolean = true): boolean {
	const isPlayerBeingArrested_result = Citizen.invokeNative<boolean>('0x6652E84A43F51B8B', player, checkBustedTask);
	return isPlayerBeingArrested_result;
}