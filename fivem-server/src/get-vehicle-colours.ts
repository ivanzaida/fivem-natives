import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_COLOURS
 *
 * 0X40D82D88

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} outColour1
 * @param {number} outColour2
 */
export function getVehicleColours(vehicle: VehicleIndex, outColour1: number, outColour2: number): void {
	const getVehicleColours_result = Citizen.invokeNative<void>('0X40D82D88', vehicle, outColour1, outColour2);
	return getVehicleColours_result;
}