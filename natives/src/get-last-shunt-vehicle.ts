import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_LAST_SHUNT_VEHICLE
 *
 * 0xC4DBC6C793A97252

 * 
 * Returns last vehicle that was rammed by the given vehicle using the shunt boost.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {VehicleIndex}  
 */
export function getLastShuntVehicle(vehicle: VehicleIndex): VehicleIndex {
	const getLastShuntVehicle_result = Citizen.invokeNative<VehicleIndex>('0xC4DBC6C793A97252', vehicle);
	return getLastShuntVehicle_result;
}