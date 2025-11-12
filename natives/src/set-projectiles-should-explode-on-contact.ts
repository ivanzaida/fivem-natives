import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_PROJECTILES_SHOULD_EXPLODE_ON_CONTACT
 *
 * 0x78CDDDB2C832ADEF

 * 
 * Makes projectiles, such as grenades, automatically explode when this hit this object
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} explode
 */
export function setProjectilesShouldExplodeOnContact(object: ObjectIndex, explode: boolean): void {
	const setProjectilesShouldExplodeOnContact_result = Citizen.invokeNative<void>('0x78CDDDB2C832ADEF', object, explode);
	return setProjectilesShouldExplodeOnContact_result;
}