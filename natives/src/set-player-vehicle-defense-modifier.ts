import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_VEHICLE_DEFENSE_MODIFIER
 *
 * 0x7754DB9F9579CEE4

 * 
 * This function will change the given players defense multiplier against vehicle damage (rammed by, collision damage).
 * 
 * modifier's min value is 0.1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modifier
 */
export function setPlayerVehicleDefenseModifier(player: PlayerIndex, modifier: number): void {
	const setPlayerVehicleDefenseModifier_result = Citizen.invokeNative<void>('0x7754DB9F9579CEE4', player, modifier);
	return setPlayerVehicleDefenseModifier_result;
}