import { EEventNames } from '@ivanzaida/structures'

/**
 * EVENT:ADD_SHOCKING_EVENT_AT_POSITION
 *
 * 0x18B384412B836744

 * 
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEventNames} eventType
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} overrideLifeTime
 * @returns {number}  
 */
export function addShockingEventAtPosition(eventType: EEventNames | number, posX: number, posY: number, posZ: number, overrideLifeTime: number = 1): number {
	const addShockingEventAtPosition_result = Citizen.invokeNative<number>('0x18B384412B836744', eventType, posX, posY, posZ, overrideLifeTime);
	return addShockingEventAtPosition_result;
}