import { VehicleIndex, EPickupGadgetType } from '@ivanzaida/structures'

/**
 * VEHICLE:CREATE_PICK_UP_ROPE_FOR_CARGOBOB
 *
 * 0xD0E90E9B5A87913E

 * 
 * Drops the Hook/Magnet on a cargobob
 * 
 * state
 * enum eCargobobHook
 * {
 *   CARGOBOB_HOOK = 0,
 *     CARGOBOB_MAGNET = 1,
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {EPickupGadgetType} pickupType
 */
export function createPickUpRopeForCargobob(cargobob: VehicleIndex, pickupType: EPickupGadgetType | number = 0): void {
	const createPickUpRopeForCargobob_result = Citizen.invokeNative<void>('0xD0E90E9B5A87913E', cargobob, pickupType);
	return createPickUpRopeForCargobob_result;
}