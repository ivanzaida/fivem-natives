/**
 * CFX:SET_LIGHT_INTERIOR
 *
 * 0x1CC72443

 * Set the interior and room where the light should be active.
 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The ID of the interior where the light should be active
 * @param {boolean} isPortal Attach to a portal or room
 * @param {number} roomIndex The specific room
 */
export function setLightInterior(interiorId: number, isPortal: boolean, roomIndex: number): void {
	const setLightInterior_result = Citizen.invokeNative<void>('0x1CC72443', interiorId, isPortal, roomIndex);
	return setLightInterior_result;
}