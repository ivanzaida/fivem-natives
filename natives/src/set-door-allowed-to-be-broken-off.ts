import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DOOR_ALLOWED_TO_BE_BROKEN_OFF
 *
 * 0xBDE75E2FCBF91A6C

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @param {boolean} doorBreakageAllowed
 */
export function setDoorAllowedToBeBrokenOff(vehicle: VehicleIndex, doorNumber: EScDoorList | number, doorBreakageAllowed: boolean): void {
	const setDoorAllowedToBeBrokenOff_result = Citizen.invokeNative<void>('0xBDE75E2FCBF91A6C', vehicle, doorNumber, doorBreakageAllowed);
	return setDoorAllowedToBeBrokenOff_result;
}