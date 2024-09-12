import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_TYPE
 *
 * 0xA273060E

 * Returns the type of the passed vehicle.For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#_0xDE73BC10) native.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle's entity handle.
 * @returns {string}  If the entity is a vehicle, the vehicle type. If it is not a vehicle, the return value will be null.
 */
export function getVehicleType(vehicle: VehicleIndex): string {
	const getVehicleType_result = Citizen.invokeNative<string>('0xA273060E', vehicle);
	return getVehicleType_result;
}