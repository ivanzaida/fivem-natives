/**
 * OBJECT:ALLOW_DAMAGE_EVENTS_FOR_NON_NETWORKED_OBJECTS
 *
 * 0x137D2653DD6FE9A2

 * 
 * ------------------------------------------------------------------
 * @param {boolean} allow
 */
export function allowDamageEventsForNonNetworkedObjects(allow: boolean): void {
	const allowDamageEventsForNonNetworkedObjects_result = Citizen.invokeNative<void>('0x137D2653DD6FE9A2', allow);
	return allowDamageEventsForNonNetworkedObjects_result;
}