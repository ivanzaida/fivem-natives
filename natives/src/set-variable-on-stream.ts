/**
 * AUDIO:SET_VARIABLE_ON_STREAM
 *
 * 0x37605EDCEE5D5944

 * 
 * This command allows a scripter to communicate with the sound engine in complex ways,
 * by passing a floating point value to a specific sound object. This allows some nice effects such as adjusting the pitch of a sample being to be played back,
 * or varying a lowpass cutoff. The VariableName parameter must be set up in RAVE (the audio scripting tool) as well as instruction on its usage on a case-by-case
 * basis therefore a sound designer must be consulted with before using this command.
 * 
 * From the scripts, p0:
 * 
 * "ArmWrestlingIntensity",
 * "INOUT",
 * "Monkey_Stream",
 * "ZoomLevel"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} variableName
 * @param {number} variableValue
 */
export function setVariableOnStream(variableName: string, variableValue: number): void {
	const setVariableOnStream_result = Citizen.invokeNative<void>('0x37605EDCEE5D5944', variableName, variableValue);
	return setVariableOnStream_result;
}