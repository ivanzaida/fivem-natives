import { VehicleIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:ABORT_VEHICLE_CREW_EMBLEM_REQUEST
 *
 * 0x932EFF1079425E72

 * 
 * Aborts crew emblem requests from a vehicle (the requests must be stuck in a "requesting badge" state)
 * If the abort is successful this command will return true - otherwise it'll return false
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function abortVehicleCrewEmblemRequest(vehicle: VehicleIndex): boolean {
	const abortVehicleCrewEmblemRequest_result = Citizen.invokeNative<boolean>('0x932EFF1079425E72', vehicle);
	return abortVehicleCrewEmblemRequest_result;
}