import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_GEAR_RATIO
 *
 * 0X496EF2F2

 * Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 * @param {number} gear The vehicles gear you want to change.
 * @param {number} ratio The gear ratio you want to use.
 */
export function setVehicleGearRatio(vehicle: VehicleIndex, gear: number, ratio: number): void {
	const setVehicleGearRatio_result = Citizen.invokeNative<void>('0X496EF2F2', vehicle, gear, ratio);
	return setVehicleGearRatio_result;
}