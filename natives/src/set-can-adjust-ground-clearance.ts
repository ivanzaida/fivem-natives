import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CAN_ADJUST_GROUND_CLEARANCE
 *
 * 0x30825986EF0F9E48

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canAdjust
 */
export function setCanAdjustGroundClearance(vehicle: VehicleIndex, canAdjust: boolean): void {
	const setCanAdjustGroundClearance_result = Citizen.invokeNative<void>('0x30825986EF0F9E48', vehicle, canAdjust);
	return setCanAdjustGroundClearance_result;
}