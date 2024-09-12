import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_GEAR_RATIO
 *
 * 0x82E794B7

 * Gets vehicles gear ratio on choosen gear.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 * @param {number} gear The vehicles gear you want to get.
 * @returns {number}  
 */
export function getVehicleGearRatio(vehicle: VehicleIndex, gear: number): number {
	const getVehicleGearRatio_result = Citizen.invokeNative<number>('0x82E794B7', vehicle, gear);
	return getVehicleGearRatio_result;
}