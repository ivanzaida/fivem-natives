import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_WEAPON_DEFENSE_MODIFIER
 *
 * 0x43DFCD4B65960E46

 * 
 * This function will change the given players defense multiplier against damage
 * 
 * modifier's min value is 0.1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modifier
 */
export function setPlayerWeaponDefenseModifier(player: PlayerIndex, modifier: number): void {
	const setPlayerWeaponDefenseModifier_result = Citizen.invokeNative<void>('0x43DFCD4B65960E46', player, modifier);
	return setPlayerWeaponDefenseModifier_result;
}