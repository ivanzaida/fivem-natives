/**
 * CAM:USE_DEDICATED_STUNT_CAMERA_THIS_UPDATE
 *
 * 0x8AD0D4D95EF3CE16

 * 
 * Similar to USE_VEHICLE_CAM_STUNT_SETTINGS_THIS_UPDATE, but instead it uses a dedicated camera and not a group of settings. The system will still try to detect if the stunt camera is needed based by the vehicle orientation.
 * 
 * Sets gameplay camera to hash
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} stuntCamera
 */
export function useDedicatedStuntCameraThisUpdate(stuntCamera: string): void {
	const useDedicatedStuntCameraThisUpdate_result = Citizen.invokeNative<void>('0x8AD0D4D95EF3CE16', stuntCamera);
	return useDedicatedStuntCameraThisUpdate_result;
}