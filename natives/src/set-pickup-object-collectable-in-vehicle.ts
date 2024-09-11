import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PICKUP_OBJECT_COLLECTABLE_IN_VEHICLE
 *
 * 0xCF4D057C2C049142

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 */
export function setPickupObjectCollectableInVehicle(pickupID: ObjectIndex): void {
	const setPickupObjectCollectableInVehicle_result = Citizen.invokeNative<void>('0xCF4D057C2C049142', pickupID);
	return setPickupObjectCollectableInVehicle_result;
}