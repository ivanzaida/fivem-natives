import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_WEAPON_TAKEDOWN_DEFENSE_MODIFIER
 *
 * 0xF1617CCA9785B3DA

 * 
 * This function will change the given players defense multiplier against armed weapon takedowns, potentially making it non-lethal
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modifier
 */
export function setPlayerWeaponTakedownDefenseModifier(player: PlayerIndex, modifier: number): void {
	const setPlayerWeaponTakedownDefenseModifier_result = Citizen.invokeNative<void>('0xF1617CCA9785B3DA', player, modifier);
	return setPlayerWeaponTakedownDefenseModifier_result;
}