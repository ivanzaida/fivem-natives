import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_BATTLE_AWARE
 *
 * 0x1AF2787435531EA9

 * 
 * Returns true if an unk value is greater than 0.0f
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerBattleAware(player: PlayerIndex): boolean {
	const isPlayerBattleAware_result = Citizen.invokeNative<boolean>('0x1AF2787435531EA9', player);
	return isPlayerBattleAware_result;
}