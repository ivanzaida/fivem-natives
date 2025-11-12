import { ERenderingOptionFlags } from '@ivanzaida/structures'

/**
 * CAM:RENDER_SCRIPT_CAMS
 *
 * 0xE37AF9002E782BA0

 * 
 * The script must have created a camera that can be rendered. Note that rendering is typically not stopped if another script thread still expects it to be active (see bShouldApplyAcrossAllThreads.)
 * 
 * doGameCamInterp - smooth transition between the camera's positions (interpolation)
 * duration - Time in milliseconds for the transition to happen
 * 
 * If you have created a script (rendering) camera, and want to go back to the character (gameplay) camera, call this native with setActive set to false.
 * Setting doGameCamInterp to 1 will smooth the transition.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} setActive
 * @param {boolean} doGameCamInterp
 * @param {number} duration Specifies the duration of any interpolation.
 * @param {boolean} shouldLockInterpolationSourceFrame If false, the source frame is updated throughout the interpolation, allowing for fully dynamic interpolation that can reduce the appearance of 'lag' when the source frame is not static.
 * @param {boolean} shouldApplyAcrossAllThreads
 * @param {ERenderingOptionFlags} renderingOptions
 */
export function renderScriptCams(setActive: boolean, doGameCamInterp: boolean, duration: number = 3000, shouldLockInterpolationSourceFrame: boolean = true, shouldApplyAcrossAllThreads: boolean = false, renderingOptions: ERenderingOptionFlags | number = 0): void {
	const renderScriptCams_result = Citizen.invokeNative<void>('0xE37AF9002E782BA0', setActive, doGameCamInterp, duration, shouldLockInterpolationSourceFrame, shouldApplyAcrossAllThreads, renderingOptions);
	return renderScriptCams_result;
}