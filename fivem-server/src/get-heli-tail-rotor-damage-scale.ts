import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_TAIL_ROTOR_DAMAGE_SCALE
 *
 * 0X22239130

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check
 * @returns {number}  Returns a value representing the damage scaling factor applied to the helicopter's tail rotor. The value ranges from `0.0` (no damage scaling) to` 1.0` (full damage scaling).
 */
export function getHeliTailRotorDamageScale(heli: VehicleIndex): number {
	const getHeliTailRotorDamageScale_result = Citizen.invokeNative<number>('0X22239130', heli);
	return getHeliTailRotorDamageScale_result;
}