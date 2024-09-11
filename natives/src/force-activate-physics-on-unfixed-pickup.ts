import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:FORCE_ACTIVATE_PHYSICS_ON_UNFIXED_PICKUP
 *
 * 0x95ED454235D93943

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {boolean} force
 */
export function forceActivatePhysicsOnUnfixedPickup(pickupID: ObjectIndex, force: boolean): void {
	const forceActivatePhysicsOnUnfixedPickup_result = Citizen.invokeNative<void>('0x95ED454235D93943', pickupID, force);
	return forceActivatePhysicsOnUnfixedPickup_result;
}