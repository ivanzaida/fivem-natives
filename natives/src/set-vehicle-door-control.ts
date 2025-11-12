import { VehicleIndex, EScDoorList, EDoorDamage } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOOR_CONTROL
 *
 * 0x3E13A302AA0F06BF

 * 
 * fAngleRatio should be between (0.0=shut 1.0=open ) or use -1.0 to ignore.
 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @param {EDoorDamage} doorStatus
 * @param {number} angleRatio
 */
export function setVehicleDoorControl(vehicle: VehicleIndex, doorNumber: EScDoorList | number, doorStatus: EDoorDamage | number, angleRatio: number): void {
	const setVehicleDoorControl_result = Citizen.invokeNative<void>('0x3E13A302AA0F06BF', vehicle, doorNumber, doorStatus, angleRatio);
	return setVehicleDoorControl_result;
}