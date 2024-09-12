import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_TYPE_RAW
 *
 * 0xDE73BC10

 * Returns the model type of the vehicle as defined by:```cppenum VehicleType{VEHICLE_TYPE_NONE = -1,VEHICLE_TYPE_CAR = 0,VEHICLE_TYPE_PLANE = 1,VEHICLE_TYPE_TRAILER = 2,VEHICLE_TYPE_QUADBIKE = 3,VEHICLE_TYPE_DRAFT = 4,VEHICLE_TYPE_SUBMARINECAR = 5,VEHICLE_TYPE_AMPHIBIOUS_AUTOMOBILE = 6,VEHICLE_TYPE_AMPHIBIOUS_QUADBIKE = 7,VEHICLE_TYPE_HELI = 8,VEHICLE_TYPE_BLIMP = 9,VEHICLE_TYPE_AUTOGYRO = 10,VEHICLE_TYPE_BIKE = 11,VEHICLE_TYPE_BICYCLE = 12,VEHICLE_TYPE_BOAT = 13,VEHICLE_TYPE_TRAIN = 14,VEHICLE_TYPE_SUBMARINE = 15,};```
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle's entity handle.
 * @returns {number}  Returns the vehicles model type
 */
export function getVehicleTypeRaw(vehicle: VehicleIndex): number {
	const getVehicleTypeRaw_result = Citizen.invokeNative<number>('0xDE73BC10', vehicle);
	return getVehicleTypeRaw_result;
}