import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_EXTRA_COLOURS
 *
 * 0X80E4659B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} outExtraCarColour1
 * @param {number} outExtraCarColour2
 */
export function getVehicleExtraColours(vehicle: VehicleIndex, outExtraCarColour1: number, outExtraCarColour2: number): void {
	const getVehicleExtraColours_result = Citizen.invokeNative<void>('0X80E4659B', vehicle, outExtraCarColour1, outExtraCarColour2);
	return getVehicleExtraColours_result;
}