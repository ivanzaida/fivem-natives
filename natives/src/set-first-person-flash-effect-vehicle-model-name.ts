/**
 * CAM:SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME
 *
 * 0x3835E455014EE7B6

 * 
 * Must be called before RENDER_SCRIPT_CAMS(FALSE ) when you're going to warp the ped into a vehicle on the camera cut the flash corresponds to. Note that the auto flash will only
 * happen if you specify an interpolation out of 300 ms or more in your RENDER_SCRIPT_CAMS call, and the player is
 * set in first person mode.
 * 
 * From b617 scripts:
 * 
 * CAM::SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME("DINGHY");
 * CAM::SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME("ISSI2");
 * CAM::SET_FIRST_PERSON_FLASH_EFFECT_VEHICLE_MODEL_NAME("SPEEDO");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} modelName
 */
export function setFirstPersonFlashEffectVehicleModelName(modelName: string): void {
	const setFirstPersonFlashEffectVehicleModelName_result = Citizen.invokeNative<void>('0x3835E455014EE7B6', modelName);
	return setFirstPersonFlashEffectVehicleModelName_result;
}