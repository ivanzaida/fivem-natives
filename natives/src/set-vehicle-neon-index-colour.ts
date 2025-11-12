import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_NEON_INDEX_COLOUR
 *
 * 0x44612E772F9312E9

 * 
 * Index references CVehicleModelColor
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} colorIdx
 */
export function setVehicleNeonIndexColour(vehicle: VehicleIndex, colorIdx: number): void {
	const setVehicleNeonIndexColour_result = Citizen.invokeNative<void>('0x44612E772F9312E9', vehicle, colorIdx);
	return setVehicleNeonIndexColour_result;
}