import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_VEHICLE_DAMAGE_MODIFIER
 *
 * 0x1BB5389ACC6BFCFC

 * 
 * This function will change the given players vehicle damage multiplier
 * 
 * modifier's min value is 0.1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modifier
 */
export function setPlayerVehicleDamageModifier(player: PlayerIndex, modifier: number): void {
	const setPlayerVehicleDamageModifier_result = Citizen.invokeNative<void>('0x1BB5389ACC6BFCFC', player, modifier);
	return setPlayerVehicleDamageModifier_result;
}