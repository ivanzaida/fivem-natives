import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_MAP_COLLISION
 *
 * 0x75627043C6AA90AD

 * 
 * Disables collision for this vehicle (maybe it also supports other entities, not sure).
 * Only world/building/fixed world objects will have their collisions disabled, props, peds, or any other entity still collides with the vehicle.
 * Example: https://streamable.com/6n45d5
 * Not sure if there is a native (and if so, which one) that resets the collisions.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setDisableMapCollision(vehicle: VehicleIndex): void {
	const setDisableMapCollision_result = Citizen.invokeNative<void>('0x75627043C6AA90AD', vehicle);
	return setDisableMapCollision_result;
}