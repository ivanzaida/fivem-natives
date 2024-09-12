/**
 * PED:SET_BLOCKING_OF_NON_TEMPORARY_EVENTS_FOR_AMBIENT_PEDS_THIS_FRAME
 *
 * 0x9288ABAC1FCB4745

 * 
 * ------------------------------------------------------------------
 * @param {boolean} block
 */
export function setBlockingOfNonTemporaryEventsForAmbientPedsThisFrame(block: boolean): void {
	const setBlockingOfNonTemporaryEventsForAmbientPedsThisFrame_result = Citizen.invokeNative<void>('0x9288ABAC1FCB4745', block);
	return setBlockingOfNonTemporaryEventsForAmbientPedsThisFrame_result;
}