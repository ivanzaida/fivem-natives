import { PlayerIndex, ModelNames } from '@ivanzaida/structures'

/**
 * CFX:SET_PLAYER_MODEL
 *
 * 0X774A4C54

 * Set the model for a specific Player. Be aware that this will destroy the current Ped for the Player and create a new one, any reference to the old ped should be reset
 * Make sure to request the model first and wait until it has loaded.
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {ModelNames} playerModelHashKey
 */
export function setPlayerModel(player: PlayerIndex, playerModelHashKey: ModelNames): void {
	const setPlayerModel_result = Citizen.invokeNative<void>('0X774A4C54', player, playerModelHashKey);
	return setPlayerModel_result;
}