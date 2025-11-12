import { EClearobjectsFlags } from '@ivanzaida/structures'

/**
 * MISC:CLEAR_AREA_OF_OBJECTS
 *
 * 0xBAAB54D57B40765E

 * 
 * I looked through the PC scripts that this site provides you with a link to find. It shows the last param mainly uses, (0, 2, 6, 16, and 17) so I am going to assume it is a type of flag.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} radius
 * @param {EClearobjectsFlags} controlFlags
 */
export function clearAreaOfObjects(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, radius: number, controlFlags: EClearobjectsFlags | number = 0): void {
	const clearAreaOfObjects_result = Citizen.invokeNative<void>('0xBAAB54D57B40765E', centreCoorsX, centreCoorsY, centreCoorsZ, radius, controlFlags);
	return clearAreaOfObjects_result;
}