import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_MAIN_ROTOR_DAMAGE_SCALE
 *
 * 0xC37D668

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check
 * @returns {number}  Returns a value representing the damage scaling factor applied to the helicopter's main rotor. The value ranges from `0.0` (no damage scaling) to` 1.0` (full damage scaling).
 */
export function getHeliMainRotorDamageScale(heli: VehicleIndex): number {
	const getHeliMainRotorDamageScale_result = Citizen.invokeNative<number>('0xC37D668', heli);
	return getHeliMainRotorDamageScale_result;
}