import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_CHEAT_POWER_INCREASE
 *
 * 0XC3C93F28

 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#_0xB59E4BD37AE292DB).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @returns {number}  Returns vehicle's cheat power increase modifier value.
 */
export function getVehicleCheatPowerIncrease(vehicle: VehicleIndex): number {
	const getVehicleCheatPowerIncrease_result = Citizen.invokeNative<number>('0XC3C93F28', vehicle);
	return getVehicleCheatPowerIncrease_result;
}