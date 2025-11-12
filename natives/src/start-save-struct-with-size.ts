/**
 * MISC:START_SAVE_STRUCT_WITH_SIZE
 *
 * 0x2714FB94E6EAC372

 * 
 * Tells the game that all REGISTER_..._TO_SAVE commands up to the matching STOP_SAVE_STRUCT are within an instance
 * of this STRUCT. The game can save a bit of memory if you write a procedure to register each struct e.g.
 * PROC RegisterMyStruct(MyStruct &TestMyStruct, STRING NameOfInstanceOfMyStruct)
 * START_SAVE_STRUCT(TestMyStruct, NameOfInstanceOfMyStruct)
 * REGISTER_INT_TO_SAVE(TestMyStruct.IntWithinMyStruct, "IntWithinMyStruct")
 * STOP_SAVE_STRUCT()
 * ENDPROC
 * You can then call your procedure to register each instance of your STRUCT.
 * You can save STRUCTs within STRUCTs.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {DataView} structToSave [Ref]
 * @param {number} sizeOfStruct
 * @param {string} nameOfStructInstance
 */
export function startSaveStructWithSize(structToSave: DataView /* ptr */, sizeOfStruct: number, nameOfStructInstance: string): void {
	const startSaveStructWithSize_result = Citizen.invokeNative<void>('0x2714FB94E6EAC372', structToSave, sizeOfStruct, nameOfStructInstance);
	return startSaveStructWithSize_result;
}