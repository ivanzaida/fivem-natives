import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PLAYER_MODEL
 *
 * 0x774A4C54

 * 
 * Set the model for a specific Player. Be aware that this will destroy the current Ped for the Player and create a new one, any reference to the old ped should be reset
 * Make sure to request the model first and wait until it has loaded.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player The player to set the model for
 * @param {number} model The model to use
 */
export function setPlayerModel(player: PlayerIndex, model: number): void {
	const setPlayerModel_result = Citizen.invokeNative<void>('0x774A4C54', player, model);
	return setPlayerModel_result;
}