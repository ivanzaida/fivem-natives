import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * PED:GET_VEHICLE_PED_IS_IN
 *
 * 0x6EF03BE64E058E2F

 * 
 * Gets the vehicle the specified Ped is in. Returns 0 if the ped is/was not in a vehicle.
 * If the Ped is not in a vehicle and includeLastVehicle is true, the vehicle they were last in is returned.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} considerEnteringAsInVehicle
 * @returns {VehicleIndex}  
 */
export function getVehiclePedIsIn(ped: PedIndex, considerEnteringAsInVehicle: boolean = false): VehicleIndex {
	const getVehiclePedIsIn_result = Citizen.invokeNative<VehicleIndex>('0x6EF03BE64E058E2F', ped, considerEnteringAsInVehicle);
	return getVehiclePedIsIn_result;
}