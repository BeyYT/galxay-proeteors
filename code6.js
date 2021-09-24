gdjs.ConnectCode = {};
gdjs.ConnectCode.GDNewObjectObjects1= [];
gdjs.ConnectCode.GDNewObjectObjects2= [];
gdjs.ConnectCode.GDNewObject2Objects1= [];
gdjs.ConnectCode.GDNewObject2Objects2= [];
gdjs.ConnectCode.GDid_95entryObjects1= [];
gdjs.ConnectCode.GDid_95entryObjects2= [];
gdjs.ConnectCode.GDNewObject3Objects1= [];
gdjs.ConnectCode.GDNewObject3Objects2= [];
gdjs.ConnectCode.GDerrorObjects1= [];
gdjs.ConnectCode.GDerrorObjects2= [];
gdjs.ConnectCode.GDconnectingObjects1= [];
gdjs.ConnectCode.GDconnectingObjects2= [];
gdjs.ConnectCode.GDNewObject4Objects1= [];
gdjs.ConnectCode.GDNewObject4Objects2= [];

gdjs.ConnectCode.conditionTrue_0 = {val:false};
gdjs.ConnectCode.condition0IsTrue_0 = {val:false};
gdjs.ConnectCode.condition1IsTrue_0 = {val:false};
gdjs.ConnectCode.condition2IsTrue_0 = {val:false};


gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.ConnectCode.GDNewObject3Objects1});gdjs.ConnectCode.eventsList0 = function(runtimeScene) {

{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.ConnectCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("id_entry"), gdjs.ConnectCode.GDid_95entryObjects1);
{for(var i = 0, len = gdjs.ConnectCode.GDid_95entryObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDid_95entryObjects1[i].setString((( gdjs.ConnectCode.GDNewObjectObjects1.length === 0 ) ? "" :gdjs.ConnectCode.GDNewObjectObjects1[0].getString()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).setString((( gdjs.ConnectCode.GDNewObjectObjects1.length === 0 ) ? "" :gdjs.ConnectCode.GDNewObjectObjects1[0].getString()));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("id_entry"), gdjs.ConnectCode.GDid_95entryObjects1);
{for(var i = 0, len = gdjs.ConnectCode.GDid_95entryObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDid_95entryObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.ConnectCode.GDid_95entryObjects1[i].getWidth()) / 2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("error"), gdjs.ConnectCode.GDerrorObjects1);
{for(var i = 0, len = gdjs.ConnectCode.GDerrorObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDerrorObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.ConnectCode.GDerrorObjects1[i].getWidth()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.ConnectCode.GDNewObject3Objects1);

gdjs.ConnectCode.condition0IsTrue_0.val = false;
gdjs.ConnectCode.condition1IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConnectCode.mapOfGDgdjs_46ConnectCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ConnectCode.condition0IsTrue_0.val ) {
{
gdjs.ConnectCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ConnectCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.ConnectCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("id_entry"), gdjs.ConnectCode.GDid_95entryObjects1);
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}{runtimeScene.getGame().getVariables().getFromIndex(13).setString((( gdjs.ConnectCode.GDNewObjectObjects1.length === 0 ) ? "" :gdjs.ConnectCode.GDNewObjectObjects1[0].getString()));
}{gdjs.evtTools.p2p.connect((( gdjs.ConnectCode.GDid_95entryObjects1.length === 0 ) ? "" :gdjs.ConnectCode.GDid_95entryObjects1[0].getString()));
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("connected", true);
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("connected", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Multiplayer_Game1", false);
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = !(gdjs.evtTools.p2p.isReady());
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("connecting"), gdjs.ConnectCode.GDconnectingObjects1);
{for(var i = 0, len = gdjs.ConnectCode.GDconnectingObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDconnectingObjects1[i].setString("connecting");
}
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onError();
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("error"), gdjs.ConnectCode.GDerrorObjects1);
{for(var i = 0, len = gdjs.ConnectCode.GDerrorObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDerrorObjects1[i].setString(gdjs.evtTools.p2p.getLastError());
}
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.ConnectCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.ConnectCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.ConnectCode.GDNewObjectObjects1[i].getBehavior("TextEntryVirtualKeyboard").openKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 0;
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{


gdjs.ConnectCode.condition0IsTrue_0.val = false;
{
gdjs.ConnectCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1;
}if (gdjs.ConnectCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useCustomBrokerServer(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)), "4000", gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)), false);
}}

}


{


{
}

}


};

gdjs.ConnectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConnectCode.GDNewObjectObjects1.length = 0;
gdjs.ConnectCode.GDNewObjectObjects2.length = 0;
gdjs.ConnectCode.GDNewObject2Objects1.length = 0;
gdjs.ConnectCode.GDNewObject2Objects2.length = 0;
gdjs.ConnectCode.GDid_95entryObjects1.length = 0;
gdjs.ConnectCode.GDid_95entryObjects2.length = 0;
gdjs.ConnectCode.GDNewObject3Objects1.length = 0;
gdjs.ConnectCode.GDNewObject3Objects2.length = 0;
gdjs.ConnectCode.GDerrorObjects1.length = 0;
gdjs.ConnectCode.GDerrorObjects2.length = 0;
gdjs.ConnectCode.GDconnectingObjects1.length = 0;
gdjs.ConnectCode.GDconnectingObjects2.length = 0;
gdjs.ConnectCode.GDNewObject4Objects1.length = 0;
gdjs.ConnectCode.GDNewObject4Objects2.length = 0;

gdjs.ConnectCode.eventsList0(runtimeScene);
return;

}

gdjs['ConnectCode'] = gdjs.ConnectCode;
