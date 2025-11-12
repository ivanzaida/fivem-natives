import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_CAN_PICKUP_ENTITY_THAT_HAS_PICK_UP_DISABLED
 *
 * 0x94A68DA412C4007D

 * 
 * Stops the cargobob from being able to attach any vehicle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canPickUp
 */
export function setHeliCanPickupEntityThatHasPickUpDisabled(vehicle: VehicleIndex, canPickUp: boolean): void {
	const setHeliCanPickupEntityThatHasPickUpDisabled_result = Citizen.invokeNative<void>('0x94A68DA412C4007D', vehicle, canPickUp);
	return setHeliCanPickupEntityThatHasPickUpDisabled_result;
}