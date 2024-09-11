import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_REAR_ROTOR_DAMAGE_SCALE
 *
 * 0XC40161E2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check
 * @returns {number}  Returns a value representing the damage scaling factor applied to the helicopter's rear rotor. The value ranges from `0.0` (no damage scaling) to` 1.0` (full damage scaling).
 */
export function getHeliRearRotorDamageScale(heli: VehicleIndex): number {
	const getHeliRearRotorDamageScale_result = Citizen.invokeNative<number>('0XC40161E2', heli);
	return getHeliRearRotorDamageScale_result;
}