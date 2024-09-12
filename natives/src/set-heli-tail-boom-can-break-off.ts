import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_TAIL_BOOM_CAN_BREAK_OFF
 *
 * 0xF8190C7705154D4D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canBreakOff
 * @returns {boolean}  
 */
export function setHeliTailBoomCanBreakOff(vehicle: VehicleIndex, canBreakOff: boolean): boolean {
	const setHeliTailBoomCanBreakOff_result = Citizen.invokeNative<boolean>('0xF8190C7705154D4D', vehicle, canBreakOff);
	return setHeliTailBoomCanBreakOff_result;
}