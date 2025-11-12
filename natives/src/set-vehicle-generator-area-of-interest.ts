/**
 * VEHICLE:SET_VEHICLE_GENERATOR_AREA_OF_INTEREST
 *
 * 0x5519F1C3752E3A90

 * 
 * Related to car generators & CPlayerSwitchMgrLong
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} radius
 */
export function setVehicleGeneratorAreaOfInterest(positionX: number, positionY: number, positionZ: number, radius: number): void {
	const setVehicleGeneratorAreaOfInterest_result = Citizen.invokeNative<void>('0x5519F1C3752E3A90', positionX, positionY, positionZ, radius);
	return setVehicleGeneratorAreaOfInterest_result;
}