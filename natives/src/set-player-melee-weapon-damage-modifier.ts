import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER
 *
 * 0xA8762533460B016B

 * 
 * This function will change the given players melee damage multiplier
 * 
 * modifier's min value is 0.1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modifier
 * @param {boolean} affectsUnarmed
 */
export function setPlayerMeleeWeaponDamageModifier(player: PlayerIndex, modifier: number, affectsUnarmed: boolean = true): void {
	const setPlayerMeleeWeaponDamageModifier_result = Citizen.invokeNative<void>('0xA8762533460B016B', player, modifier, affectsUnarmed);
	return setPlayerMeleeWeaponDamageModifier_result;
}