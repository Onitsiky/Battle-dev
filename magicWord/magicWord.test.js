import { expect } from "chai";
import { describe, it } from "mocha";
import condition from "./magicWord.js";

describe("Test for the magic word code", () =>{
    it("Should return 9",()=>{
        let dictionnary = "itlap macieqcl wxhvqia fxdlzuuvx usnoo nbjnchhfqj lflngldvm kltfdo xybvoxu qrdqy fsdleky aoujqdsg hiry pynmqvzkw gsjkpqffyr rsrio krlbcbg fa eftcri yzegxca jqjo cplp stxwnu usuhw zffknhjutj vwfeta zpfjxqv"
        let tab = dictionnary.split(" ");
        expect(condition(tab)).to.be.equals(9);
    })
})