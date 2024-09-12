import { VehicleIndex, EPickupGadgetType } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_PICKUP_ROPE_TYPE
 *
 * 0xAA54E339BD273E82

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {EPickupGadgetType} type
 */
export function setCargobobPickupRopeType(cargobob: VehicleIndex, type: EPickupGadgetType | number): void {
	const setCargobobPickupRopeType_result = Citizen.invokeNative<void>('0xAA54E339BD273E82', cargobob, type);
	return setCargobobPickupRopeType_result;
}