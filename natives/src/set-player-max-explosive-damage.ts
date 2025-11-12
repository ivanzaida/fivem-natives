import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_MAX_EXPLOSIVE_DAMAGE
 *
 * 0x14EBA27C5B556497

 * 
 * This function will set the max amount of damage the given playrer will receive when it receives an explosive damage event.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} maxExplosiveDamage Reset this to 1.0 when finished!
 */
export function setPlayerMaxExplosiveDamage(player: PlayerIndex, maxExplosiveDamage: number = 1): void {
	const setPlayerMaxExplosiveDamage_result = Citizen.invokeNative<void>('0x14EBA27C5B556497', player, maxExplosiveDamage);
	return setPlayerMaxExplosiveDamage_result;
}