gdjs.BuyCode = {};
gdjs.BuyCode.GDNewObjectObjects1= [];
gdjs.BuyCode.GDNewObjectObjects2= [];
gdjs.BuyCode.GDNewObject2Objects1= [];
gdjs.BuyCode.GDNewObject2Objects2= [];
gdjs.BuyCode.GDNewObject3Objects1= [];
gdjs.BuyCode.GDNewObject3Objects2= [];
gdjs.BuyCode.GDnoObjects1= [];
gdjs.BuyCode.GDnoObjects2= [];
gdjs.BuyCode.GDYesObjects1= [];
gdjs.BuyCode.GDYesObjects2= [];

gdjs.BuyCode.conditionTrue_0 = {val:false};
gdjs.BuyCode.condition0IsTrue_0 = {val:false};
gdjs.BuyCode.condition1IsTrue_0 = {val:false};
gdjs.BuyCode.condition2IsTrue_0 = {val:false};
gdjs.BuyCode.condition3IsTrue_0 = {val:false};
gdjs.BuyCode.condition4IsTrue_0 = {val:false};


gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects = Hashtable.newFrom({"Yes": gdjs.BuyCode.GDYesObjects1});gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects = Hashtable.newFrom({"Yes": gdjs.BuyCode.GDYesObjects1});gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects = Hashtable.newFrom({"Yes": gdjs.BuyCode.GDYesObjects1});gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects = Hashtable.newFrom({"Yes": gdjs.BuyCode.GDYesObjects1});gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects = Hashtable.newFrom({"Yes": gdjs.BuyCode.GDYesObjects1});gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDnoObjects1Objects = Hashtable.newFrom({"no": gdjs.BuyCode.GDnoObjects1});gdjs.BuyCode.eventsList0 = function(runtimeScene) {

{


gdjs.BuyCode.condition0IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if (gdjs.BuyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.BuyCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.BuyCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.BuyCode.GDNewObject2Objects1[i].setString("300");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(300);
}}

}


{


gdjs.BuyCode.condition0IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if (gdjs.BuyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.BuyCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.BuyCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.BuyCode.GDNewObject2Objects1[i].setString("450");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(450);
}}

}


{


gdjs.BuyCode.condition0IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
}if (gdjs.BuyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.BuyCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.BuyCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.BuyCode.GDNewObject2Objects1[i].setString("600");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(600);
}}

}


{


gdjs.BuyCode.condition0IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
}if (gdjs.BuyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.BuyCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.BuyCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.BuyCode.GDNewObject2Objects1[i].setString("1000");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1000);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.BuyCode.GDYesObjects1);

gdjs.BuyCode.condition0IsTrue_0.val = false;
gdjs.BuyCode.condition1IsTrue_0.val = false;
gdjs.BuyCode.condition2IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.BuyCode.condition0IsTrue_0.val ) {
{
gdjs.BuyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BuyCode.condition1IsTrue_0.val ) {
{
gdjs.BuyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) <= 299;
}}
}
if (gdjs.BuyCode.condition2IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.BuyCode.GDYesObjects1);

gdjs.BuyCode.condition0IsTrue_0.val = false;
gdjs.BuyCode.condition1IsTrue_0.val = false;
gdjs.BuyCode.condition2IsTrue_0.val = false;
gdjs.BuyCode.condition3IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.BuyCode.condition0IsTrue_0.val ) {
{
gdjs.BuyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BuyCode.condition1IsTrue_0.val ) {
{
gdjs.BuyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) >= 300;
}if ( gdjs.BuyCode.condition2IsTrue_0.val ) {
{
gdjs.BuyCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
}
}
if (gdjs.BuyCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(300);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "coins", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "skver", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 190, 80);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.BuyCode.GDYesObjects1);

gdjs.BuyCode.condition0IsTrue_0.val = false;
gdjs.BuyCode.condition1IsTrue_0.val = false;
gdjs.BuyCode.condition2IsTrue_0.val = false;
gdjs.BuyCode.condition3IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.BuyCode.condition0IsTrue_0.val ) {
{
gdjs.BuyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BuyCode.condition1IsTrue_0.val ) {
{
gdjs.BuyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) >= 450;
}if ( gdjs.BuyCode.condition2IsTrue_0.val ) {
{
gdjs.BuyCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}}
}
}
if (gdjs.BuyCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(450);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "coins", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "skver", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 190, 80);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.BuyCode.GDYesObjects1);

gdjs.BuyCode.condition0IsTrue_0.val = false;
gdjs.BuyCode.condition1IsTrue_0.val = false;
gdjs.BuyCode.condition2IsTrue_0.val = false;
gdjs.BuyCode.condition3IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.BuyCode.condition0IsTrue_0.val ) {
{
gdjs.BuyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BuyCode.condition1IsTrue_0.val ) {
{
gdjs.BuyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) >= 600;
}if ( gdjs.BuyCode.condition2IsTrue_0.val ) {
{
gdjs.BuyCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}}
}
}
if (gdjs.BuyCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(600);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "coins", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(3);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "skver", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 190, 80);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.BuyCode.GDYesObjects1);

gdjs.BuyCode.condition0IsTrue_0.val = false;
gdjs.BuyCode.condition1IsTrue_0.val = false;
gdjs.BuyCode.condition2IsTrue_0.val = false;
gdjs.BuyCode.condition3IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDYesObjects1Objects, runtimeScene, true, false);
}if ( gdjs.BuyCode.condition0IsTrue_0.val ) {
{
gdjs.BuyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BuyCode.condition1IsTrue_0.val ) {
{
gdjs.BuyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) >= 1000;
}if ( gdjs.BuyCode.condition2IsTrue_0.val ) {
{
gdjs.BuyCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}}
}
}
if (gdjs.BuyCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(1000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "coins", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(4);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "skver", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 190, 80);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.BuyCode.GDnoObjects1);

gdjs.BuyCode.condition0IsTrue_0.val = false;
gdjs.BuyCode.condition1IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BuyCode.mapOfGDgdjs_46BuyCode_46GDnoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.BuyCode.condition0IsTrue_0.val ) {
{
gdjs.BuyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.BuyCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 190, 80);
}}

}


{


gdjs.BuyCode.condition0IsTrue_0.val = false;
{
gdjs.BuyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BuyCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 640, 480);
}{gdjs.evtTools.storage.loadJSONFileFromStorage("str");
}{gdjs.evtTools.storage.readNumberFromJSONFile("str", "skver", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}}

}


};

gdjs.BuyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BuyCode.GDNewObjectObjects1.length = 0;
gdjs.BuyCode.GDNewObjectObjects2.length = 0;
gdjs.BuyCode.GDNewObject2Objects1.length = 0;
gdjs.BuyCode.GDNewObject2Objects2.length = 0;
gdjs.BuyCode.GDNewObject3Objects1.length = 0;
gdjs.BuyCode.GDNewObject3Objects2.length = 0;
gdjs.BuyCode.GDnoObjects1.length = 0;
gdjs.BuyCode.GDnoObjects2.length = 0;
gdjs.BuyCode.GDYesObjects1.length = 0;
gdjs.BuyCode.GDYesObjects2.length = 0;

gdjs.BuyCode.eventsList0(runtimeScene);
return;

}

gdjs['BuyCode'] = gdjs.BuyCode;
