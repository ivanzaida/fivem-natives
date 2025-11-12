/**
 * AUDIO:SET_VARIABLE_ON_UNDER_WATER_STREAM
 *
 * 0xFFB39CC82F4E6583

 * 
 * This command allows a scripter to set variables on the current underwater stream.
 * 
 * AUDIO::SET_VARIABLE_ON_UNDER_WATER_STREAM("inTunnel", 1.0);
 * AUDIO::SET_VARIABLE_ON_UNDER_WATER_STREAM("inTunnel", 0.0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} variableName
 * @param {number} variableValue
 */
export function setVariableOnUnderWaterStream(variableName: string, variableValue: number): void {
	const setVariableOnUnderWaterStream_result = Citizen.invokeNative<void>('0xFFB39CC82F4E6583', variableName, variableValue);
	return setVariableOnUnderWaterStream_result;
}