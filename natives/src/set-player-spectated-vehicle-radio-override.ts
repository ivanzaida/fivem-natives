/**
 * PLAYER:SET_PLAYER_SPECTATED_VEHICLE_RADIO_OVERRIDE
 *
 * 0xE3CF1CD0E11083B3

 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function setPlayerSpectatedVehicleRadioOverride(override: boolean): void {
	const setPlayerSpectatedVehicleRadioOverride_result = Citizen.invokeNative<void>('0xE3CF1CD0E11083B3', override);
	return setPlayerSpectatedVehicleRadioOverride_result;
}