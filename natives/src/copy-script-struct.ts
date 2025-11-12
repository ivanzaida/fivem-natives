/**
 * MISC:COPY_SCRIPT_STRUCT
 *
 * 0xDD7F149F8BAF1260

 * 
 * Copies the contents of SourceStruct into DestStruct. It's assumed that both structs are of the same type and therefore have the same size.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {DataView} destStruct [Ref]
 * @param {DataView} sourceStruct [Ref]
 * @param {number} size
 */
export function copyScriptStruct(destStruct: DataView /* ptr */, sourceStruct: DataView /* ptr */, size: number): void {
	const copyScriptStruct_result = Citizen.invokeNative<void>('0xDD7F149F8BAF1260', destStruct, sourceStruct, size);
	return copyScriptStruct_result;
}