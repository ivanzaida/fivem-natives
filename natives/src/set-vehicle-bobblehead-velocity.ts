/**
 * VEHICLE:SET_VEHICLE_BOBBLEHEAD_VELOCITY
 *
 * 0x5F6C263433E7851E

 * 
 * Controls how fast bobbleheads and tsurikawas move on each axis.
 * 
 * p2 is probably z, but changing that value didn't seem to have a noticeable effect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} vecVelocityX
 * @param {number} vecVelocityY
 * @param {number} vecVelocityZ
 */
export function setVehicleBobbleheadVelocity(vecVelocityX: number, vecVelocityY: number, vecVelocityZ: number): void {
	const setVehicleBobbleheadVelocity_result = Citizen.invokeNative<void>('0x5F6C263433E7851E', vecVelocityX, vecVelocityY, vecVelocityZ);
	return setVehicleBobbleheadVelocity_result;
}