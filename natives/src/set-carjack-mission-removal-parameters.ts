/**
 * VEHICLE:SET_CARJACK_MISSION_REMOVAL_PARAMETERS
 *
 * 0x424A62A3138EF2F6

 * 
 * ------------------------------------------------------------------
 * @param {number} numVehiclesInArea
 * @param {number} radiusForRemoval
 */
export function setCarjackMissionRemovalParameters(numVehiclesInArea: number, radiusForRemoval: number): void {
	const setCarjackMissionRemovalParameters_result = Citizen.invokeNative<void>('0x424A62A3138EF2F6', numVehiclesInArea, radiusForRemoval);
	return setCarjackMissionRemovalParameters_result;
}