import { VehicleIndex, EModKitType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD_KIT_TYPE
 *
 * 0xB79F51ED32ADD424

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {EModKitType}  
 */
export function getVehicleModKitType(vehicle: VehicleIndex): EModKitType {
	const getVehicleModKitType_result = Citizen.invokeNative<EModKitType>('0xB79F51ED32ADD424', vehicle);
	return getVehicleModKitType_result;
}