import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_DOOR_ANGLE_RATIO
 *
 * 0x7BFB76C576628F3D

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @returns {number}  
 */
export function getVehicleDoorAngleRatio(vehicle: VehicleIndex, doorNumber: EScDoorList | number): number {
	const getVehicleDoorAngleRatio_result = Citizen.invokeNative<number>('0x7BFB76C576628F3D', vehicle, doorNumber);
	return getVehicleDoorAngleRatio_result;
}