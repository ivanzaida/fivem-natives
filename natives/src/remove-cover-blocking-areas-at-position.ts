/**
 * TASK:REMOVE_COVER_BLOCKING_AREAS_AT_POSITION
 *
 * 0x71CFAA5488AD3649

 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 */
export function removeCoverBlockingAreasAtPosition(positionX: number, positionY: number, positionZ: number): void {
	const removeCoverBlockingAreasAtPosition_result = Citizen.invokeNative<void>('0x71CFAA5488AD3649', positionX, positionY, positionZ);
	return removeCoverBlockingAreasAtPosition_result;
}