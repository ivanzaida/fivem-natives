import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_EXPLOSIVE_DAMAGE_MODIFIER
 *
 * 0x05DDADC6F9EA8B04

 * 
 * This function will change the given players explosive damage multiplier.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modifier Reset this to 1.0f when finished!
 */
export function setPlayerExplosiveDamageModifier(player: PlayerIndex, modifier: number = 1): void {
	const setPlayerExplosiveDamageModifier_result = Citizen.invokeNative<void>('0x05DDADC6F9EA8B04', player, modifier);
	return setPlayerExplosiveDamageModifier_result;
}