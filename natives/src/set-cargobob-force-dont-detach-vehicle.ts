import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_FORCE_DONT_DETACH_VEHICLE
 *
 * 0xA205F1BC1E1E70CF

 * 
 * Sets an entity to never be picked up by a specific cargobob
 * 
 * Stops cargobob from being able to detach the attached vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {boolean} noDetach
 */
export function setCargobobForceDontDetachVehicle(cargobob: VehicleIndex, noDetach: boolean): void {
	const setCargobobForceDontDetachVehicle_result = Citizen.invokeNative<void>('0xA205F1BC1E1E70CF', cargobob, noDetach);
	return setCargobobForceDontDetachVehicle_result;
}