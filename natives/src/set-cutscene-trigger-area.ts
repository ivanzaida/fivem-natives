/**
 * CUTSCENE:SET_CUTSCENE_TRIGGER_AREA
 *
 * 0x09B8E842C8055B05

 * 
 * Depending on the type of of cutscene it maybe possible orientate the cutscene over a range of angles.
 * 
 * Only used twice in R scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} offsetFromSceneOriginX
 * @param {number} offsetFromSceneOriginY
 * @param {number} offsetFromSceneOriginZ
 * @param {number} triggerRadius
 * @param {number} triggerOrient
 * @param {number} triggerAngle
 */
export function setCutsceneTriggerArea(offsetFromSceneOriginX: number, offsetFromSceneOriginY: number, offsetFromSceneOriginZ: number, triggerRadius: number, triggerOrient: number, triggerAngle: number): void {
	const setCutsceneTriggerArea_result = Citizen.invokeNative<void>('0x09B8E842C8055B05', offsetFromSceneOriginX, offsetFromSceneOriginY, offsetFromSceneOriginZ, triggerRadius, triggerOrient, triggerAngle);
	return setCutsceneTriggerArea_result;
}