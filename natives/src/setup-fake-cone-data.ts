import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SETUP_FAKE_CONE_DATA
 *
 * 0xFF89A4A6580A0AB1

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} visualFieldMinAzimuthAngle
 * @param {number} visualFieldMaxAzimuthAngle
 * @param {number} centreOfGazeMaxAngle
 * @param {number} peripheralRange
 * @param {number} focusRange
 * @param {number} rotation
 * @param {boolean} continuousUpdate
 * @param {number} hudColor
 */
export function setupFakeConeData(blip: BlipIndex, visualFieldMinAzimuthAngle: number, visualFieldMaxAzimuthAngle: number, centreOfGazeMaxAngle: number, peripheralRange: number, focusRange: number, rotation: number, continuousUpdate: boolean, hudColor: number = 11): void {
	const setupFakeConeData_result = Citizen.invokeNative<void>('0xFF89A4A6580A0AB1', blip, visualFieldMinAzimuthAngle, visualFieldMaxAzimuthAngle, centreOfGazeMaxAngle, peripheralRange, focusRange, rotation, continuousUpdate, hudColor);
	return setupFakeConeData_result;
}