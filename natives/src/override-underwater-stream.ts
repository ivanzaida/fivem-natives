/**
 * AUDIO:OVERRIDE_UNDERWATER_STREAM
 *
 * 0xC9695FEF4C4A96F8

 * 
 * This command allows a scripter to override the current underwater stream.
 * It needs to be called before going into the water.
 * And it needs to also be called with OVERRIDE_UNDERWATER_STREAM("", false)
 * in order to stop overriding.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} streamName
 * @param {boolean} override
 */
export function overrideUnderwaterStream(streamName: string, override: boolean): void {
	const overrideUnderwaterStream_result = Citizen.invokeNative<void>('0xC9695FEF4C4A96F8', streamName, override);
	return overrideUnderwaterStream_result;
}