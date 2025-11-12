/**
 * CFX:SET_LIGHT_DIRECTION
 *
 * 0xA6FE1977

 * Set the forward and tangent direction vectors for an existing light, allowing control over its orientation (useful for spotlights and directional lights).
 * 
 * ------------------------------------------------------------------
 * @param {number} xDir
 * @param {number} yDir
 * @param {number} zDir
 * @param {number} xTanDir
 * @param {number} yTanDir
 * @param {number} zTanDir
 */
export function setLightDirection(xDir: number, yDir: number, zDir: number, xTanDir: number, yTanDir: number, zTanDir: number): void {
	const setLightDirection_result = Citizen.invokeNative<void>('0xA6FE1977', xDir, yDir, zDir, xTanDir, yTanDir, zTanDir);
	return setLightDirection_result;
}