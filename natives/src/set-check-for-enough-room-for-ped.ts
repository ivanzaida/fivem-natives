import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CHECK_FOR_ENOUGH_ROOM_FOR_PED
 *
 * 0x6A9E89C17033E79E

 * 
 * Only used in R Script fm_content_cargo
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} shouldCheckForEnoughRoomToFitPed
 */
export function setCheckForEnoughRoomForPed(vehicle: VehicleIndex, shouldCheckForEnoughRoomToFitPed: boolean): void {
	const setCheckForEnoughRoomForPed_result = Citizen.invokeNative<void>('0x6A9E89C17033E79E', vehicle, shouldCheckForEnoughRoomToFitPed);
	return setCheckForEnoughRoomForPed_result;
}