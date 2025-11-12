/**
 * GRAPHICS:DRAW_SPOT_LIGHT
 *
 * 0xE2E1B9096BCD8C5C

 * 
 * Parameters:
 *  pos - coordinate where the spotlight is located
 *  dir - the direction vector the spotlight should aim at from its current position
 *  r,g,b - color of the spotlight
 *  distance - the maximum distance the light can reach
 *  brightness - the brightness of the light
 *  roundness - "smoothness" of the circle edge
 *  radius - the radius size of the spotlight
 *  falloff - the falloff size of the light's edge (example: www.i.imgur.com/DemAWeO.jpg)
 * 
 * Example in C# (spotlight aims at the closest vehicle):
 * Vector3 myPos = Game.Player.Character.Position;
 * Vehicle nearest = World.GetClosestVehicle(myPos , 1000f);
 * Vector3 destinationCoords = nearest.Position;
 * Vector3 dirVector = destinationCoords - myPos;
 * dirVector.Normalize();
 * Function.Call(Hash.DRAW_SPOT_LIGHT, pos.X, pos.Y, pos.Z, dirVector.X, dirVector.Y, dirVector.Z, 255, 255, 255, 100.0f, 1f, 0.0f, 13.0f, 1f);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} directionX
 * @param {number} directionY
 * @param {number} directionZ
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} falloff
 * @param {number} intensity
 * @param {number} innerAngle
 * @param {number} outerAngle
 * @param {number} exp
 */
export function drawSpotLight(coorsX: number, coorsY: number, coorsZ: number, directionX: number, directionY: number, directionZ: number, r: number, g: number, b: number, falloff: number, intensity: number, innerAngle: number, outerAngle: number, exp: number): void {
	const drawSpotLight_result = Citizen.invokeNative<void>('0xE2E1B9096BCD8C5C', coorsX, coorsY, coorsZ, directionX, directionY, directionZ, r, g, b, falloff, intensity, innerAngle, outerAngle, exp);
	return drawSpotLight_result;
}