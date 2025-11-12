/**
 * HUD:SET_MP_GAMER_TAGS_SHOULD_USE_VEHICLE_HEALTH
 *
 * 0x4E71BD4E0B8022F5

 * 
 * Displays a bunch of icons above the players name, and level, and their name twice
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {boolean} useVehicleHealth
 */
export function setMpGamerTagsShouldUseVehicleHealth(playerNum: number, useVehicleHealth: boolean): void {
	const setMpGamerTagsShouldUseVehicleHealth_result = Citizen.invokeNative<void>('0x4E71BD4E0B8022F5', playerNum, useVehicleHealth);
	return setMpGamerTagsShouldUseVehicleHealth_result;
}