import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_OVERRIDE_VEHICLE_DOOR_TORQUE
 *
 * 0x66E3AAFACE2D1EB8

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @param {boolean} overrideTorque
 */
export function setOverrideVehicleDoorTorque(vehicle: VehicleIndex, doorNumber: EScDoorList | number, overrideTorque: boolean): void {
	const setOverrideVehicleDoorTorque_result = Citizen.invokeNative<void>('0x66E3AAFACE2D1EB8', vehicle, doorNumber, overrideTorque);
	return setOverrideVehicleDoorTorque_result;
}