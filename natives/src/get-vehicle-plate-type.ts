import { VehicleIndex, EVehiclePlateType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_PLATE_TYPE
 *
 * 0xA42AC01E0317ED99

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {EVehiclePlateType}  
 */
export function getVehiclePlateType(vehicle: VehicleIndex): EVehiclePlateType {
	const getVehiclePlateType_result = Citizen.invokeNative<EVehiclePlateType>('0xA42AC01E0317ED99', vehicle);
	return getVehiclePlateType_result;
}