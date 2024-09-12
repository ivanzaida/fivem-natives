import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ACTIVATE_PHYSICS
 *
 * 0x79B52EC5A9AB6229

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityID
 */
export function activatePhysics(entityID: EntityIndex): void {
	const activatePhysics_result = Citizen.invokeNative<void>('0x79B52EC5A9AB6229', entityID);
	return activatePhysics_result;
}