import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SHOULD_PROBE_FOR_SCENARIO_EXITS_IN_ONE_FRAME
 *
 * 0xE54C4227DC826E1C

 * 
 * When this ped is performing their scenario exit probes, all of the probes will be checked in one frame.
 * Use with caution!  This can cause performance issues if overused.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} inOneFrame
 */
export function setPedShouldProbeForScenarioExitsInOneFrame(ped: PedIndex, inOneFrame: boolean): void {
	const setPedShouldProbeForScenarioExitsInOneFrame_result = Citizen.invokeNative<void>('0xE54C4227DC826E1C', ped, inOneFrame);
	return setPedShouldProbeForScenarioExitsInOneFrame_result;
}