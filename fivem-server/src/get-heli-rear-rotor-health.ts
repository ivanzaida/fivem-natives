import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_REAR_ROTOR_HEALTH
 *
 * 0X33EE6E2B

 * This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#_0xFE205F38AAA58E5B)
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @returns {number}  Returns the health of the helicopter's rear rotor. The maximum health value is `1000`.
 */
export function getHeliRearRotorHealth(vehicle: VehicleIndex): number {
	const getHeliRearRotorHealth_result = Citizen.invokeNative<number>('0X33EE6E2B', vehicle);
	return getHeliRearRotorHealth_result;
}