import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER
 *
 * 0xECD5F8110C183253

 * 
 * This function will change the given players defense multiplier against melee damage
 * 
 * modifier's min value is 0.1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modifier
 */
export function setPlayerMeleeWeaponDefenseModifier(player: PlayerIndex, modifier: number): void {
	const setPlayerMeleeWeaponDefenseModifier_result = Citizen.invokeNative<void>('0xECD5F8110C183253', player, modifier);
	return setPlayerMeleeWeaponDefenseModifier_result;
}