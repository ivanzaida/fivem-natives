import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_OVERRIDE_COORDS_AND_HEADING
 *
 * 0x819DFDEDB0378F60

 * 
 * Sets a ped to a specified heading and position and will set override blend for a period
 * This function is recommended for use when updating a clone every frame to a tightly controlled position such as
 * required for hands clasped with close in camera in arm-wrestling
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {number} newHeading
 */
export function networkOverrideCoordsAndHeading(entity: EntityIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number, newHeading: number): void {
	const networkOverrideCoordsAndHeading_result = Citizen.invokeNative<void>('0x819DFDEDB0378F60', entity, newCoorsX, newCoorsY, newCoorsZ, newHeading);
	return networkOverrideCoordsAndHeading_result;
}