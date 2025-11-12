import { VehicleIndex, ECrewemblemrequeststate } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_VEHICLE_CREW_EMBLEM_REQUEST_STATE
 *
 * 0xCF9D3F0358793BA8

 * 
 * Gets the current state of a vehicle crew emblem request made using ADD_VEHICLE_CREW_EMBLEM
 * CERS_NOT_ACTIVE			- means that an error has occured as no request is found for this vehicle
 * CERS_REQUESTING_BADGE	- means that the request is still in progress (still requesting the texture from the cloud)
 * CERS_APPLYING_DECAL		- means that the request is still in progress (still applying the decal)
 * CERS_SUCCEEDED			- means that the request has succeeded
 * CERS_FAILED				- means that the request has failed
 * Note that if CERS_SUCCEEDED or CERS_FAILED are returned the request will automatically be made not active (CERS_NOT_ACTIVE) so querying it again will produce an error
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} badge
 * @returns {ECrewemblemrequeststate}  
 */
export function getVehicleCrewEmblemRequestState(vehicle: VehicleIndex, badge: number = 0): ECrewemblemrequeststate {
	const getVehicleCrewEmblemRequestState_result = Citizen.invokeNative<ECrewemblemrequeststate>('0xCF9D3F0358793BA8', vehicle, badge);
	return getVehicleCrewEmblemRequestState_result;
}