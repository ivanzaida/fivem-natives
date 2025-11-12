import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_PED_IS_IN
 *
 * 0xAFE92319

 * 
 * Gets the vehicle the specified Ped is in. Returns 0 if the ped is/was not in a vehicle.
 * If the Ped is not in a vehicle and includeLastVehicle is true, the vehicle they were last in is returned.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {boolean} lastVehicle False = CurrentVehicle, True = LastVehicle
 * @returns {VehicleIndex}  
 */
export function getVehiclePedIsIn(ped: PedIndex, lastVehicle: boolean): VehicleIndex {
	const getVehiclePedIsIn_result = Citizen.invokeNative<VehicleIndex>('0xAFE92319', ped, lastVehicle);
	return getVehiclePedIsIn_result;
}