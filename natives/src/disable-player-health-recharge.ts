import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:DISABLE_PLAYER_HEALTH_RECHARGE
 *
 * 0x090F2F734B18CEBF

 * 
 * Needs to be called every frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function disablePlayerHealthRecharge(player: PlayerIndex): void {
	const disablePlayerHealthRecharge_result = Citizen.invokeNative<void>('0x090F2F734B18CEBF', player);
	return disablePlayerHealthRecharge_result;
}