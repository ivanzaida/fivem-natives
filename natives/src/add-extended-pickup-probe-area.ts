/**
 * OBJECT:ADD_EXTENDED_PICKUP_PROBE_AREA
 *
 * 0xB7E1B262DB074229

 * 
 * Adds an area that seems to be related to pickup physics behavior.
 * Max amount of areas is 10. Only works in multiplayer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} radius
 */
export function addExtendedPickupProbeArea(positionX: number, positionY: number, positionZ: number, radius: number): void {
	const addExtendedPickupProbeArea_result = Citizen.invokeNative<void>('0xB7E1B262DB074229', positionX, positionY, positionZ, radius);
	return addExtendedPickupProbeArea_result;
}