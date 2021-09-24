gdjs.KeybindsCode = {};
gdjs.KeybindsCode.GDNewObjectObjects1= [];
gdjs.KeybindsCode.GDNewObjectObjects2= [];
gdjs.KeybindsCode.GDNewObject2Objects1= [];
gdjs.KeybindsCode.GDNewObject2Objects2= [];
gdjs.KeybindsCode.GDNewObject3Objects1= [];
gdjs.KeybindsCode.GDNewObject3Objects2= [];
gdjs.KeybindsCode.GDNewObject4Objects1= [];
gdjs.KeybindsCode.GDNewObject4Objects2= [];
gdjs.KeybindsCode.GDNewObject5Objects1= [];
gdjs.KeybindsCode.GDNewObject5Objects2= [];
gdjs.KeybindsCode.GDrightObjects1= [];
gdjs.KeybindsCode.GDrightObjects2= [];
gdjs.KeybindsCode.GDleftObjects1= [];
gdjs.KeybindsCode.GDleftObjects2= [];
gdjs.KeybindsCode.GDdownObjects1= [];
gdjs.KeybindsCode.GDdownObjects2= [];
gdjs.KeybindsCode.GDupObjects1= [];
gdjs.KeybindsCode.GDupObjects2= [];

gdjs.KeybindsCode.conditionTrue_0 = {val:false};
gdjs.KeybindsCode.condition0IsTrue_0 = {val:false};
gdjs.KeybindsCode.condition1IsTrue_0 = {val:false};


gdjs.KeybindsCode.eventsList0 = function(runtimeScene) {

{


gdjs.KeybindsCode.condition0IsTrue_0.val = false;
{
gdjs.KeybindsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.KeybindsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("str", "custombinds", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{


gdjs.KeybindsCode.condition0IsTrue_0.val = false;
{
gdjs.KeybindsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.KeybindsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.KeybindsCode.GDdownObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.KeybindsCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.KeybindsCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.KeybindsCode.GDupObjects1);
{for(var i = 0, len = gdjs.KeybindsCode.GDupObjects1.length ;i < len;++i) {
    gdjs.KeybindsCode.GDupObjects1[i].setString("w");
}
}{for(var i = 0, len = gdjs.KeybindsCode.GDdownObjects1.length ;i < len;++i) {
    gdjs.KeybindsCode.GDdownObjects1[i].setString("s");
}
}{for(var i = 0, len = gdjs.KeybindsCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.KeybindsCode.GDleftObjects1[i].setString("a");
}
}{for(var i = 0, len = gdjs.KeybindsCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.KeybindsCode.GDrightObjects1[i].setString("d");
}
}}

}


{


gdjs.KeybindsCode.condition0IsTrue_0.val = false;
{
gdjs.KeybindsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.KeybindsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.KeybindsCode.GDdownObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.KeybindsCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.KeybindsCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.KeybindsCode.GDupObjects1);
{for(var i = 0, len = gdjs.KeybindsCode.GDupObjects1.length ;i < len;++i) {
    gdjs.KeybindsCode.GDupObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("keybind").getChild("up")));
}
}{for(var i = 0, len = gdjs.KeybindsCode.GDdownObjects1.length ;i < len;++i) {
    gdjs.KeybindsCode.GDdownObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("keybind").getChild("down")));
}
}{for(var i = 0, len = gdjs.KeybindsCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.KeybindsCode.GDleftObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("keybind").getChild("left")));
}
}{for(var i = 0, len = gdjs.KeybindsCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.KeybindsCode.GDrightObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("keybind").getChild("right")));
}
}}

}


};

gdjs.KeybindsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.KeybindsCode.GDNewObjectObjects1.length = 0;
gdjs.KeybindsCode.GDNewObjectObjects2.length = 0;
gdjs.KeybindsCode.GDNewObject2Objects1.length = 0;
gdjs.KeybindsCode.GDNewObject2Objects2.length = 0;
gdjs.KeybindsCode.GDNewObject3Objects1.length = 0;
gdjs.KeybindsCode.GDNewObject3Objects2.length = 0;
gdjs.KeybindsCode.GDNewObject4Objects1.length = 0;
gdjs.KeybindsCode.GDNewObject4Objects2.length = 0;
gdjs.KeybindsCode.GDNewObject5Objects1.length = 0;
gdjs.KeybindsCode.GDNewObject5Objects2.length = 0;
gdjs.KeybindsCode.GDrightObjects1.length = 0;
gdjs.KeybindsCode.GDrightObjects2.length = 0;
gdjs.KeybindsCode.GDleftObjects1.length = 0;
gdjs.KeybindsCode.GDleftObjects2.length = 0;
gdjs.KeybindsCode.GDdownObjects1.length = 0;
gdjs.KeybindsCode.GDdownObjects2.length = 0;
gdjs.KeybindsCode.GDupObjects1.length = 0;
gdjs.KeybindsCode.GDupObjects2.length = 0;

gdjs.KeybindsCode.eventsList0(runtimeScene);
return;

}

gdjs['KeybindsCode'] = gdjs.KeybindsCode;
