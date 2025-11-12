/**
 * OBJECT:RENDER_FAKE_PICKUP_GLOW
 *
 * 0x60415964D3B19DC8

 * 
 * draws circular marker at pos
 * -1 = none
 * 0 = red
 * 1 = green
 * 2 = blue
 * 3 = green larger
 * 4 = nothing
 * 5 = green small
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} glowType
 */
export function renderFakePickupGlow(positionX: number, positionY: number, positionZ: number, glowType: number): void {
	const renderFakePickupGlow_result = Citizen.invokeNative<void>('0x60415964D3B19DC8', positionX, positionY, positionZ, glowType);
	return renderFakePickupGlow_result;
}