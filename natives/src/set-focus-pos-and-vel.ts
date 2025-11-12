/**
 * STREAMING:SET_FOCUS_POS_AND_VEL
 *
 * 0x2D8D239B3F1D13F9

 * 
 * The game focus is used for loading map data, collisions, object population etc.
 * This command overrides it for the specified position and velocity
 * Overrides the game focus and sets it to specified position and velocity
 * 
 * Override the area where the camera will render the terrain.
 * p3, p4 and p5 are usually set to 0.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} velX
 * @param {number} velY
 * @param {number} velZ
 */
export function setFocusPosAndVel(posX: number, posY: number, posZ: number, velX: number, velY: number, velZ: number): void {
	const setFocusPosAndVel_result = Citizen.invokeNative<void>('0x2D8D239B3F1D13F9', posX, posY, posZ, velX, velY, velZ);
	return setFocusPosAndVel_result;
}