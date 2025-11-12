import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOOR_SHUT
 *
 * 0x6515021478088FBC

 * 
 * enum eDoorId
 * {
 * 	VEH_EXT_DOOR_INVALID_ID = -1,
 * 	VEH_EXT_DOOR_DSIDE_F,
 * 	VEH_EXT_DOOR_DSIDE_R,
 * 	VEH_EXT_DOOR_PSIDE_F,
 * 	VEH_EXT_DOOR_PSIDE_R,
 * 	VEH_EXT_BONNET,
 * 	VEH_EXT_BOOT
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @param {boolean} shutInstantly
 */
export function setVehicleDoorShut(vehicle: VehicleIndex, doorNumber: EScDoorList | number, shutInstantly: boolean = true): void {
	const setVehicleDoorShut_result = Citizen.invokeNative<void>('0x6515021478088FBC', vehicle, doorNumber, shutInstantly);
	return setVehicleDoorShut_result;
}