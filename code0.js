gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDGameTitleObjects1= [];
gdjs.MainMenuCode.GDGameTitleObjects2= [];
gdjs.MainMenuCode.GDGameTitleObjects3= [];
gdjs.MainMenuCode.GDButtonStartObjects1= [];
gdjs.MainMenuCode.GDButtonStartObjects2= [];
gdjs.MainMenuCode.GDButtonStartObjects3= [];
gdjs.MainMenuCode.GDButtonAddObjects1= [];
gdjs.MainMenuCode.GDButtonAddObjects2= [];
gdjs.MainMenuCode.GDButtonAddObjects3= [];
gdjs.MainMenuCode.GDButtonRemoveObjects1= [];
gdjs.MainMenuCode.GDButtonRemoveObjects2= [];
gdjs.MainMenuCode.GDButtonRemoveObjects3= [];
gdjs.MainMenuCode.GDRoundsLabelObjects1= [];
gdjs.MainMenuCode.GDRoundsLabelObjects2= [];
gdjs.MainMenuCode.GDRoundsLabelObjects3= [];
gdjs.MainMenuCode.GDRoundNumberTextObjects1= [];
gdjs.MainMenuCode.GDRoundNumberTextObjects2= [];
gdjs.MainMenuCode.GDRoundNumberTextObjects3= [];
gdjs.MainMenuCode.GDPriceMessageTextObjects1= [];
gdjs.MainMenuCode.GDPriceMessageTextObjects2= [];
gdjs.MainMenuCode.GDPriceMessageTextObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};


gdjs.MainMenuCode.userFunc0x7099a0 = function(runtimeScene) {
"use strict";
var ChainId = runtimeScene.getGame().getVariables().get("ChainId");
var WalletId = runtimeScene.getGame().getVariables().get("WalletId");
var Transaction = runtimeScene.getGame().getVariables().get("Transaction");
var TransactionConfirmation = Transaction.getChild('Confirmation');
var TransactionHash = Transaction.getChild('Hash');


const ChainIdAsString = ChainId.getAsString();
const WalletIdAsString = WalletId.getAsString();
const TransactionConfirmationAsString = TransactionConfirmation.getAsString();
const TransactionHashAsString = TransactionHash.getAsString();

if((ChainIdAsString == "0x83" || ChainIdAsString == "0x61") && WalletIdAsString != "-1" && TransactionConfirmationAsString != "-1" && TransactionHashAsString != "-1"){
    gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}
};
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonAddObjects1Objects = Hashtable.newFrom({"ButtonAdd": gdjs.MainMenuCode.GDButtonAddObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonAddObjects1Objects = Hashtable.newFrom({"ButtonAdd": gdjs.MainMenuCode.GDButtonAddObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDButtonAddObjects1, gdjs.MainMenuCode.GDButtonAddObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDButtonAddObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonAddObjects2[i].setAnimationName("AddPressed");
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 10;
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RoundNumberText"), gdjs.MainMenuCode.GDRoundNumberTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) + 1);
}{for(var i = 0, len = gdjs.MainMenuCode.GDRoundNumberTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRoundNumberTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonRemoveObjects1Objects = Hashtable.newFrom({"ButtonRemove": gdjs.MainMenuCode.GDButtonRemoveObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonRemoveObjects1Objects = Hashtable.newFrom({"ButtonRemove": gdjs.MainMenuCode.GDButtonRemoveObjects1});gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDButtonRemoveObjects1, gdjs.MainMenuCode.GDButtonRemoveObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDButtonRemoveObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonRemoveObjects2[i].setAnimationName("RemovePressed");
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 1;
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RoundNumberText"), gdjs.MainMenuCode.GDRoundNumberTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) - 1);
}{for(var i = 0, len = gdjs.MainMenuCode.GDRoundNumberTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRoundNumberTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.userFunc0x81fb40 = function(runtimeScene) {
"use strict";
(async () => {
    //gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AfterAuth", false);
    /**
     * Wallet where BNB are sent.
     */
    const gameWallet = "0x4038591c4dD4ca580b838B91ae508E1e1DDC3F7c";
    /**
     * BNB price
     * 18 decimals
     * 0.001 BNB
     */
    const gamePrice = 10000000000000000;

    /**
     * How many rounds you can play.
     */
    var gameRounds = runtimeScene.getGame().getVariables().get("Rounds").getAsNumber();

    /**
     * Total price
     */
    var gameTotalPrice = gamePrice * gameRounds;

    /**
     * Set Environnement
     */
    var Env = runtimeScene.getGame().getVariables().get("Env");

    /**
     * Init Web3.js
     */
    const ethereum = window.ethereum;
    const web3Instance = new Web3(ethereum);

    /**
     * Chain ID
     */
    var ChainId = runtimeScene.getGame().getVariables().get("ChainId");
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    ChainId.setString(chainId);
    if(chainId == "0x38" ){
        Env.setString("production");
    }

    /**
     * Wallet ID
     */
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const userWallet = accounts[0];
    if(chainId == "0x38" || chainId == "0x61"){
        var WalletId = runtimeScene.getGame().getVariables().get("WalletId");
        WalletId.setString(userWallet);        

        /**
         * Transaction
         * Total should be equal or higher than 1 party price.
         */
        if(gameTotalPrice >= gamePrice){
            var Transaction = runtimeScene.getGame().getVariables().get("Transaction");
            var TransactionConfirmation = Transaction.getChild("Confirmation");
            var TransactionHash = Transaction.getChild("Hash");
            web3Instance.eth.sendTransaction({
                from: userWallet,
                to: gameWallet,
                value: gameTotalPrice
            }).on('transactionHash', function(hash){
                TransactionHash.setString(hash);
            }).on('receipt', function(receipt){
                
            }).on('confirmation', function(confirmationNumber, receipt){
                TransactionConfirmation.setString(confirmationNumber);
            });
        }
    }
})();
};
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainMenuCode.userFunc0x81fb40(runtimeScene);

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDButtonStartObjects1, gdjs.MainMenuCode.GDButtonStartObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.MainMenuCode.userFunc0x7099a0(runtimeScene);

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonAdd"), gdjs.MainMenuCode.GDButtonAddObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonAddObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonAddObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonAddObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonAddObjects1[i].setAnimationName("AddNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonAdd"), gdjs.MainMenuCode.GDButtonAddObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonAddObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonAddObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonAddObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonAddObjects1[i].setAnimationName("AddHover");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonRemove"), gdjs.MainMenuCode.GDButtonRemoveObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonRemoveObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonRemoveObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonRemoveObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonRemoveObjects1[i].setAnimationName("RemoveNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonRemove"), gdjs.MainMenuCode.GDButtonRemoveObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonRemoveObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonRemoveObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonRemoveObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonRemoveObjects1[i].setAnimationName("RemoveHover");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects3.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects1.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects2.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects3.length = 0;
gdjs.MainMenuCode.GDButtonAddObjects1.length = 0;
gdjs.MainMenuCode.GDButtonAddObjects2.length = 0;
gdjs.MainMenuCode.GDButtonAddObjects3.length = 0;
gdjs.MainMenuCode.GDButtonRemoveObjects1.length = 0;
gdjs.MainMenuCode.GDButtonRemoveObjects2.length = 0;
gdjs.MainMenuCode.GDButtonRemoveObjects3.length = 0;
gdjs.MainMenuCode.GDRoundsLabelObjects1.length = 0;
gdjs.MainMenuCode.GDRoundsLabelObjects2.length = 0;
gdjs.MainMenuCode.GDRoundsLabelObjects3.length = 0;
gdjs.MainMenuCode.GDRoundNumberTextObjects1.length = 0;
gdjs.MainMenuCode.GDRoundNumberTextObjects2.length = 0;
gdjs.MainMenuCode.GDRoundNumberTextObjects3.length = 0;
gdjs.MainMenuCode.GDPriceMessageTextObjects1.length = 0;
gdjs.MainMenuCode.GDPriceMessageTextObjects2.length = 0;
gdjs.MainMenuCode.GDPriceMessageTextObjects3.length = 0;

gdjs.MainMenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
