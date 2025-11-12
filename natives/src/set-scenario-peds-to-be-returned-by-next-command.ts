/**
 * PED:SET_SCENARIO_PEDS_TO_BE_RETURNED_BY_NEXT_COMMAND
 *
 * 0x9C9B7988CF45CAF0

 * 
 * Sets a value indicating whether scenario peds should be returned by the next call to a command that returns peds. Eg. GET_CLOSEST_PED.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allowScenarioPedsToBeGrabbed
 */
export function setScenarioPedsToBeReturnedByNextCommand(allowScenarioPedsToBeGrabbed: boolean): void {
	const setScenarioPedsToBeReturnedByNextCommand_result = Citizen.invokeNative<void>('0x9C9B7988CF45CAF0', allowScenarioPedsToBeGrabbed);
	return setScenarioPedsToBeReturnedByNextCommand_result;
}