import { EEventNames } from '@ivanzaida/structures'

/**
 * EVENT:IS_SHOCKING_EVENT_IN_SPHERE
 *
 * 0xD633AC6AD3D4D297

 * 
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEventNames} eventType
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @returns {boolean}  
 */
export function isShockingEventInSphere(eventType: EEventNames | number, posX: number, posY: number, posZ: number, radius: number): boolean {
	const isShockingEventInSphere_result = Citizen.invokeNative<boolean>('0xD633AC6AD3D4D297', eventType, posX, posY, posZ, radius);
	return isShockingEventInSphere_result;
}