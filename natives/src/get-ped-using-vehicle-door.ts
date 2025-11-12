import { VehicleIndex, EScDoorList, PedIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_PED_USING_VEHICLE_DOOR
 *
 * 0x11AEF334072BBF99

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @returns {PedIndex}  
 */
export function getPedUsingVehicleDoor(vehicle: VehicleIndex, doorNumber: EScDoorList | number): PedIndex {
	const getPedUsingVehicleDoor_result = Citizen.invokeNative<PedIndex>('0x11AEF334072BBF99', vehicle, doorNumber);
	return getPedUsingVehicleDoor_result;
}