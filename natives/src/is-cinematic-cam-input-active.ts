/**
 * CAM:IS_CINEMATIC_CAM_INPUT_ACTIVE
 *
 * 0x6633B158164DCD88

 * 
 * Tests some cinematic camera flags
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCinematicCamInputActive(): boolean {
	const isCinematicCamInputActive_result = Citizen.invokeNative<boolean>('0x6633B158164DCD88', );
	return isCinematicCamInputActive_result;
}