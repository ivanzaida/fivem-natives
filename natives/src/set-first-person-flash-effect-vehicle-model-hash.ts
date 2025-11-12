/**
 * CAM:SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_HASH
 *
 * 0xFED7E3E3F45F22A4

 * 
 * Must be called before RENDER_SCRIPT_CAMS(FALSE ) when you're going to warp the ped into a vehicle on the camera cut the flash corresponds to. Note that the auto flash will only
 * happen if you specify an interpolation out of 300 ms or more in your RENDER_SCRIPT_CAMS call, and the player is
 * set in first person mode.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} modelHash
 */
export function setFirstPersonFlashEffectVehicleModelHash(modelHash: number): void {
	const setFirstPersonFlashEffectVehicleModelHash_result = Citizen.invokeNative<void>('0xFED7E3E3F45F22A4', modelHash);
	return setFirstPersonFlashEffectVehicleModelHash_result;
}