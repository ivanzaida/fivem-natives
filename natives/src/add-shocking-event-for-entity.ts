import { EEventNames, EntityIndex } from '@ivanzaida/structures'

/**
 * EVENT:ADD_SHOCKING_EVENT_FOR_ENTITY
 *
 * 0x378DEB95883BFE01

 * 
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEventNames} eventType
 * @param {EntityIndex} ent
 * @param {number} overrideLifeTime
 * @returns {number}  
 */
export function addShockingEventForEntity(eventType: EEventNames | number, ent: EntityIndex, overrideLifeTime: number = 1): number {
	const addShockingEventForEntity_result = Citizen.invokeNative<number>('0x378DEB95883BFE01', eventType, ent, overrideLifeTime);
	return addShockingEventForEntity_result;
}