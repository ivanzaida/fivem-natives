import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:RESET_PLAYER_ARREST_STATE
 *
 * 0x3C2C878E6683CE75

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function resetPlayerArrestState(player: PlayerIndex): void {
	const resetPlayerArrestState_result = Citizen.invokeNative<void>('0x3C2C878E6683CE75', player);
	return resetPlayerArrestState_result;
}