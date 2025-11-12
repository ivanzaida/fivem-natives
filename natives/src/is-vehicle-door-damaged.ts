import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_DOOR_DAMAGED
 *
 * 0xAD830DCD82C63F31

 * 
 * doorID starts at 0, not seeming to skip any numbers. Four door vehicles intuitively range from 0 to 3.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @returns {boolean}  
 */
export function isVehicleDoorDamaged(vehicle: VehicleIndex, doorNumber: EScDoorList | number): boolean {
	const isVehicleDoorDamaged_result = Citizen.invokeNative<boolean>('0xAD830DCD82C63F31', vehicle, doorNumber);
	return isVehicleDoorDamaged_result;
}