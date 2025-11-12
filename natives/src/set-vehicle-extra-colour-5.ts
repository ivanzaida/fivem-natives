import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_EXTRA_COLOUR_5
 *
 * 0xC0C8E6AAA00F1A58

 * 
 * Colour5 should be taken from the list in carcols.dat.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} extraColour5
 */
export function setVehicleExtraColour_5(vehicle: VehicleIndex, extraColour5: number): void {
	const setVehicleExtraColour_5_result = Citizen.invokeNative<void>('0xC0C8E6AAA00F1A58', vehicle, extraColour5);
	return setVehicleExtraColour_5_result;
}