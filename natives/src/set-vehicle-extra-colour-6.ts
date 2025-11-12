import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_EXTRA_COLOUR_6
 *
 * 0x77B012A683295B6E

 * 
 * Colour6 should be taken from the list in carcols.dat.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} extraColour6
 */
export function setVehicleExtraColour_6(vehicle: VehicleIndex, extraColour6: number): void {
	const setVehicleExtraColour_6_result = Citizen.invokeNative<void>('0x77B012A683295B6E', vehicle, extraColour6);
	return setVehicleExtraColour_6_result;
}