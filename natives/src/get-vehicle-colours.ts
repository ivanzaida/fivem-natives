import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_COLOURS
 *
 * 0xFF4B16F297D9CB3E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} outColour1 [Ref]
 * @param {IntRef} outColour2 [Ref]
 */
export function getVehicleColours(vehicle: VehicleIndex, outColour1: IntRef /* ptr */, outColour2: IntRef /* ptr */): void {
	const getVehicleColours_result = Citizen.invokeNative<void>('0xFF4B16F297D9CB3E', vehicle, outColour1.dataView, outColour2.dataView);
	return getVehicleColours_result;
}