import { IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:DELETE_VEHICLE
 *
 * 0x8C1F7D7A31B2A38E

 * 
 * Deletes a vehicle.
 * The vehicle must be a mission entity to delete, so call this before deleting: SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 * 
 * eg how to use:
 * SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 * DELETE_VEHICLE(&vehicle);
 * 
 * Deletes the specified vehicle, then sets the handle pointed to by the pointer to NULL.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} vehicle [Ref]
 */
export function deleteVehicle(vehicle: IntRef /* ptr */): void {
	const deleteVehicle_result = Citizen.invokeNative<void>('0x8C1F7D7A31B2A38E', vehicle.dataView);
	return deleteVehicle_result;
}