/**
 * PED:SET_COP_PERCEPTION_OVERRIDES
 *
 * 0xF4B325151D7AC09F

 * 
 * Allows script to override the cop perception parameters. This affects all code-spawned, non-mission cops. Parameters will not be overridden if left at their default values (these are the standard values already used by cops).
 * This command must be called every frame!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} seeingRange
 * @param {number} seeingRangePeripheral
 * @param {number} hearingRange How far a ped can hear (default on foot
 * @param {number} minAzimuthAngle MIN horizontal field of view for the ped (doesn't affect rendered cone blip).
 * @param {number} maxAzimuthAngle MAX horizontal field of view for the ped (doesn't affect rendered cone blip).
 * @param {number} centreOfGazeMaxAngle Defines the central angle.
 * @param {number} rearViewSeeingRangeOverride
 */
export function setCopPerceptionOverrides(seeingRange: number = 60, seeingRangePeripheral: number = 5, hearingRange: number = 60, minAzimuthAngle: number = 90, maxAzimuthAngle: number = 90, centreOfGazeMaxAngle: number = 60, rearViewSeeingRangeOverride: number = 1): void {
	const setCopPerceptionOverrides_result = Citizen.invokeNative<void>('0xF4B325151D7AC09F', seeingRange, seeingRangePeripheral, hearingRange, minAzimuthAngle, maxAzimuthAngle, centreOfGazeMaxAngle, rearViewSeeingRangeOverride);
	return setCopPerceptionOverrides_result;
}