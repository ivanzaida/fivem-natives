import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_EXTRA_COLOURS
 *
 * 0xBB361D7264AC4FD8

 * 
 * Colour3 and Colour4 should be taken from the list in carcols.dat.
 * 
 * They use the same color indexs as SET_VEHICLE_COLOURS.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} extraColour1
 * @param {number} extraColour2
 */
export function setVehicleExtraColours(vehicle: VehicleIndex, extraColour1: number, extraColour2: number): void {
	const setVehicleExtraColours_result = Citizen.invokeNative<void>('0xBB361D7264AC4FD8', vehicle, extraColour1, extraColour2);
	return setVehicleExtraColours_result;
}