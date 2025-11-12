import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_DOOR_FULLY_OPEN
 *
 * 0x6B0915C0DDD2954F

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @returns {boolean}  
 */
export function isVehicleDoorFullyOpen(vehicle: VehicleIndex, doorNumber: EScDoorList | number): boolean {
	const isVehicleDoorFullyOpen_result = Citizen.invokeNative<boolean>('0x6B0915C0DDD2954F', vehicle, doorNumber);
	return isVehicleDoorFullyOpen_result;
}